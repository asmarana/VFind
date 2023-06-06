import React, { useState, useContext, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, Keyboard } from 'react-native';
import { primary, primaryLight, secondary, whiteplus } from '../../../constants/colors';
import BorderInput from '../../../components/input/borderInput';
import Button from '../../../components/button/button';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../../navigation/authProvider';
import { FormProvider, FormContext } from '../../../helper/formContext';
import auth from '@react-native-firebase/auth';

const VehicleFormScreen = () => {
    const { setForm2Filled } = useContext(FormContext);
    const navigation = useNavigation();

    const { user } = useContext(AuthContext);

    const [inputs, setInputs] = useState({
        vehicleType: '',
        vehicleName: '',
        vehicleId: '',
        lisenseNo: '',
        totalSeats: '',
        availableSeats: '',
    });

    const [userEmail, setUserEmail] = useState(null);
    const [errors, setErrors] = useState({});
    const [vehicleName, setVehicleName] = useState(null);
    const [vehicleType, setVehicleType] = useState(null);
    const [vehicleId, setVehicleId] = useState(null);
    const [lisenseNo, setLisenseNo] = useState(null);
    const [totalSeats, setTotalSeats] = useState(null);
    const [availableSeats, setAvailableSeats] = useState(null);

    const validate = () => {
        Keyboard.dismiss();
        let isValid = true;
        const pattern = /^[A-Z]\d{3}[A-Z]{2}$/;
        const minLength = 6;
        const maxLength = 8;

        if (!inputs.vehicleType) {
            handleError('Please input Vehicle Type', 'vehicleType');
            isValid = false;
        } else if (!/^[a-zA-Z\s]+$/.test(inputs.vehicleType)) {
            handleError('Vehicle type should only contain alphabets', 'vehicleType');
            isValid = false;
        }

        if (!inputs.vehicleName) {
            handleError('Please input Vehicle Name', 'vehicleName');
            isValid = false;
        } else if (!/^[a-zA-Z\s]+$/.test(inputs.vehicleName)) {
            handleError('Vehicle Name should only contain alphabets', 'vehicleName');
            isValid = false;
        }

        if (!inputs.vehicleId) {
            handleError('Please input Vehicle Id', 'vehicleId');
            isValid = false;
        }
        else if (!pattern.test(inputs.vehicleId)) {
            handleError('Vehicle ID should have a specific format', 'vehicleId');
            isValid = false;
        }

        if (!inputs.lisenseNo) {
            handleError('Please input lisense No', 'lisenseNo');
            isValid = false;
        } else if (inputs.lisenseNo.length < minLength || inputs.lisenseNo.length > maxLength) {
            handleError(`License Number should be between ${minLength} and ${maxLength} characters long`, 'lisenseNo');
            isValid = false;
        } else if (!/^\d+$/.test(inputs.lisenseNo)) {
            handleError('Only numbers are allowed', 'lisenseNo');
            isValid = false;
        }

        if (!inputs.totalSeats) {
            handleError('Please input Available Seats', 'totalSeats');
            isValid = false;
        } else if (!/^\d+$/.test(inputs.totalSeats)) {
            handleError('Only numbers are allowed', 'totalSeats');
            isValid = false;
        }else if (inputs.totalSeats < 1 || inputs.totalSeats > 20) {
            handleError(`Seats should be between 1 and 20`, 'totalSeats');
            isValid = false;
        } 


        // if (!inputs.availableSeats) {
        //     handleError('Please input  Available Seats', 'availableSeats');
        //     isValid = false;
        // } else if (!/^\d+$/.test(inputs.availableSeats)) {
        //     handleError('Only numbers are allowed', 'availableSeats');
        //     isValid = false;
        // }
        // else if (inputs.availableSeats.length >= inputs.totalSeats.length) {
        //     handleError('Available seats are not more than total seats', 'availableseats');
        //     isValid = false;
        // } else if (inputs.availableSeats.length < 1 || inputs.availableSeats.length > 20) {
        //     handleError(`Total seats should be between 1 and 20`, 'availableSeats');
        //     isValid = false;
        // }



        if (isValid) {
            setVehicleName(inputs.vehicleName)
            setVehicleType(inputs.vehicleType)
            setVehicleId(inputs.vehicleId)
            setLisenseNo(inputs.lisenseNo)
            setTotalSeats(inputs.totalSeats)
            // setAvailableSeats(inputs.availableSeats)
            submitData();
        }
    };


    const handleOnchange = (text, input) => {
        setInputs(prevState => ({ ...prevState, [input]: text }));
    };
    const handleError = (error, input) => {
        setErrors(prevState => ({ ...prevState, [input]: error }));
    };


    const submitData = async () => {
        firestore()
            .collection('vehicleData').doc(userEmail)
            .set({
                driverId: user.uid,
                email: userEmail,
                vehicleName: vehicleName,
                vehicleType: vehicleType,
                vehicleId: vehicleId,
                lisenseNo: lisenseNo,
                totalSeats: totalSeats,
                availableSeats: availableSeats,
            })
            .then(() => {
                console.log('Drivers vehicle data added!');
                setForm2Filled(true);
                navigation.navigate('DriverRegistration');
            })
            .catch((error) => {
                console.log('Something went wrong');
                alert('Something went wrong')
            });

    }
    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(user => {
            if (user) {
                setUserEmail(user.email);
            } else {
                setUserEmail(null);
            }
        });
        return unsubscribe;
    }, []);

    return (
        <SafeAreaView style={{ backgroundColor: whiteplus, flex: 1 }}>
            <ScrollView
                contentContainerStyle={{ paddingTop: 30, paddingHorizontal: 20 }}>
                <View style={{ alignItems: 'center' }} >
                    <Image source={require('../../../assets/logo/greenLogo.png')}
                        style={{ height: 45, width: 87, }} />
                </View>
                <Text style={{ color: secondary, fontSize: 28, fontWeight: 'bold' }}>
                    Vehicle Details
                </Text>
                <Text style={{ color: primaryLight, fontSize: 18, marginVertical: 3 }}>
                    Add data about your vehicle
                </Text>
                <View style={{ marginVertical: 10 }}>

                    <BorderInput
                        onChangeText={text => handleOnchange(text, 'vehicleType')}
                        onFocus={() => handleError(null, 'vehicleType')}
                        iconName="van-passenger"
                        label="Vehicle Name"
                        placeholder="Enter your Vehicle Name"
                        error={errors.vehicleType}
                    />
                    <BorderInput
                        onChangeText={text => handleOnchange(text, 'vehicleName')}
                        onFocus={() => handleError(null, 'vehicleName')}
                        iconName="van-passenger"
                        label="Vehicle Type"
                        placeholder="Enter your Vehicle type"
                        error={errors.vehicleName}
                    />
                    <BorderInput
                        // keyboardType="numeric"
                        onChangeText={text => handleOnchange(text, 'vehicleId')}
                        onFocus={() => handleError(null, 'vehicleId')}
                        iconName="tablet"
                        label="Vehicle Id"
                        placeholder="e.g. A123BC"
                        error={errors.vehicleId}
                    />
                    <BorderInput
                        keyboardType="numeric"
                        onChangeText={text => handleOnchange(text, 'lisenseNo')}
                        onFocus={() => handleError(null, 'lisenseNo')}
                        iconName="id-card"
                        label="Lisense No"
                        placeholder="Enter your Lisense No"
                        error={errors.lisenseNo}

                    />
                    <BorderInput
                        keyboardType="numeric"
                        onChangeText={text => handleOnchange(text, 'totalSeats')}
                        onFocus={() => handleError(null, 'totalSeats')}
                        iconName="seat"
                        label="Available Seats"
                        placeholder="Enter available Seats"
                        error={errors.totalSeats}
                    />
                    {/* <BorderInput
                        keyboardType="numeric"
                        onChangeText={text => handleOnchange(text, 'availableSeats')}
                        onFocus={() => handleError(null, 'availableSeats')}
                        iconName="seat"
                        label="Available Seats"
                        placeholder="Enter Available Seats"
                        error={errors.availableSeats}
                    /> */}
                </View>
            </ScrollView>
            <View style={{ paddingHorizontal: 20 }}>
                <Button label="Submit" onPress={validate} />
            </View>
        </SafeAreaView >
    );
};
const VehicleForm = () => {
    return (
        <FormProvider>
            <VehicleFormScreen />
        </FormProvider>
    )
}

export default VehicleForm;