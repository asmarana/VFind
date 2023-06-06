import React, { useState, useContext , useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, Keyboard } from 'react-native';
import { primaryLight, secondary, whiteplus } from '../../../constants/colors';
import BorderInput from '../../../components/input/borderInput';
import Button from '../../../components/button/button';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../../../navigation/authProvider';
import { FormContext, FormProvider } from '../../../helper/formContext';
import auth from '@react-native-firebase/auth';

const RouteFormScreen = () => {
    const {setForm3Filled } = useContext(FormContext);
    const navigation = useNavigation();
    const { user } = useContext(AuthContext);

    const [inputs, setInputs] = React.useState({
        pickupArea: '',
        route: '',
        school: '',
    });

    const [userEmail, setUserEmail] = useState(null);
    const [errors, setErrors] = React.useState({});
    const [pickupArea, setPickupArea] = useState(null);
    const [route, setroute] = useState(null);
    const [school, setschool] = useState(null);

    const validate = () => {
        Keyboard.dismiss();
        let isValid = true;

        if (!inputs.pickupArea) {
            handleError('Please input pickup Area', 'pickupArea');
            isValid = false;
        } else if (!/^[a-zA-Z\s]+$/.test(inputs.pickupArea)) {
            handleError('Pickup area should only contain alphabets', 'pickupArea');
            isValid = false;
        }

        if (!inputs.route) {
            handleError('Please input Route', 'route');
            isValid = false;
        } else if (!/^[a-zA-Z\s]+$/.test(inputs.route)) {
            handleError('Route should only contain alphabets', 'route');
            isValid = false;
        }

        // if (!inputs.school) {
        //     handleError('Please input School', 'school');
        //     isValid = false;
        // } else if (!/^[a-zA-Z\s]+$/.test(inputs.school)) {
        //     handleError('School Name should only contain alphabets', 'school');
        //     isValid = false;
        // }

        if (isValid) {
            setPickupArea(inputs.pickupArea)
            setroute(inputs.route)
            // setschool(inputs.school)
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
            .collection('route').doc(userEmail)
            .set({
                driverId: user.uid,
                email : userEmail,
                pickupArea: pickupArea,
                route: route,
                // school: school,
            })
            .then(() => {
                console.log('Drivers route data added!');
                setForm3Filled(true);
                navigation.navigate('DriverRegistration');
            })
            .catch((error) => {
                console.log('Something went wrong', error);
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
                    Hey there!
                </Text>
                <Text style={{ color: primaryLight, fontSize: 18, marginVertical: 3 }}>
                    Let's get to know you
                </Text>
                <View style={{ marginVertical: 10 }}>
                    <BorderInput
                        onChangeText={text => handleOnchange(text, 'pickupArea')}
                        onFocus={() => handleError(null, 'pickupArea')}
                        iconName="map-marker"
                        label="pickup Area"
                        placeholder="Enter pickup Area"
                        error={errors.pickupArea}
                    />
                    <BorderInput
                        onChangeText={text => handleOnchange(text, 'route')}
                        onFocus={() => handleError(null, 'route')}
                        iconName="map-marker"
                        label="Route"
                        placeholder="Enter your route"
                        error={errors.route}
                    />
                    {/* <BorderInput
                        onChangeText={text => handleOnchange(text, 'school')}
                        onFocus={() => handleError(null, 'school')}
                        iconName="map-outline"
                        label="School"
                        placeholder="Enter school"
                        error={errors.school}
                    /> */}
                    <Button label="Submit" onPress={validate} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const RouteForm = () => {
    return (
        <FormProvider>
            <RouteFormScreen />
        </FormProvider>
    )
}

export default RouteForm;