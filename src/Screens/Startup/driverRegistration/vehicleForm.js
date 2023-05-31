import React, { useState, useContext } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, Keyboard } from 'react-native';
import { primary, primaryLight, secondary, whiteplus } from '../../../constants/colors';
import BorderInput from '../../../components/input/borderInput';
import Button from '../../../components/button/button';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../../navigation/authProvider';

const VehicleForm = () => {
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

        if (!inputs.vehicleType) {
            handleError('Please input Vehicle Type', 'vehicleType');
            isValid = false;
        }

        if (!inputs.vehicleName) {
            handleError('Please input Vehicle Name', 'vehicleName');
            isValid = false;
        }

        if (!inputs.vehicleId) {
            handleError('Please input Vehicle Id', 'vehicleId');
            isValid = false;
        }

        if (!inputs.lisenseNo) {
            handleError('Please input lisense No', 'lisenseNo');
            isValid = false;
        }

        if (!inputs.totalSeats) {
            handleError('Please input Total Seats', 'totalSeats');
            isValid = false;
        } else if (inputs.totalSeats.length >= 20) {
            handleError('Total Seats will not be more than 20', 'password');
            isValid = false;
          }

        if (!inputs.availableSeats) {
            handleError('Please input  Available Seats', 'availableSeats');
            isValid = false;
        }
        else if (inputs.availableSeats.length >= 20) {
            handleError('Vehicles seats will not be more than 20', 'availableSeats');
            isValid = false;
          }

        if (isValid) {
            setVehicleName(inputs.vehicleName)
            setVehicleType(inputs.vehicleType)
            setVehicleId(inputs.vehicleId)
            setLisenseNo(inputs.lisenseNo)
            setTotalSeats(inputs.totalSeats)
            setAvailableSeats(inputs.availableSeats)
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
            .collection('driverData')
            .add({
                driverId: user.uid,
                vehicleName: vehicleName,
                vehicleType: vehicleType,
                vehicleId: vehicleId,
                lisenseNo: lisenseNo,
                totalSeats: totalSeats,
                availableSeats: availableSeats,
            })
            .then(() => {
                console.log('Drivers vehicle data added!');
                navigation.navigate('RouteInfoScreen');
            })
            .catch((error) => {
                console.log('Something went wrong');
            });

    }

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
                        placeholder="Enter your vehicle Id"
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
                        label="Total Seats"
                        placeholder="Enter total Seats"
                        error={errors.totalSeats}
                    />
                    <BorderInput
                        keyboardType="numeric"
                        onChangeText={text => handleOnchange(text, 'availableSeats')}
                        onFocus={() => handleError(null, 'availableSeats')}
                        iconName="seat"
                        label="Available Seats"
                        placeholder="Enter Available Seats"
                        error={errors.availableSeats}
                    />
                </View>
            </ScrollView>
            <View style={{ paddingHorizontal: 20 }}>
                <Button label="Submit" onPress={validate} />
            </View>
        </SafeAreaView >
    );
};

export default VehicleForm;