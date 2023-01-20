import React, { useState, useContext } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, Keyboard } from 'react-native';
import {primaryLight, secondary, whiteplus } from '../../../constants/colors';
import BorderInput from '../../../components/input/borderInput';
import Button from '../../../components/button/button';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../../../navigation/authProvider';


const RouteForm = () => {
    const navigation = useNavigation();
    const { user } = useContext(AuthContext);

    const [inputs, setInputs] = React.useState({
        pickupArea: '',
        route: '',
        school: '',
    });
    const [errors, setErrors] = React.useState({});
    const [pickupArea, setPickupArea] = useState(null);
    const [route, setroute] = useState(null);
    const [school, setschool] = useState(null);

    const validate = () => {
        Keyboard.dismiss();
        let isValid = true;

        if (!inputs.pickupArea) {
            handleError('Please input Vehicle Type', 'pickupArea');
            isValid = false;
        }

        if (!inputs.route) {
            handleError('Please input Vehicle Name', 'route');
            isValid = false;
        }

        if (!inputs.school) {
            handleError('Please input Vehicle Id', 'school');
            isValid = false;
        }

        if (isValid) {
            setPickupArea(inputs.pickupArea)
            setroute(inputs.route)
            setschool(inputs.school)
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
            .collection('routeData')
            .add({
                driverId: user.uid,
                pickupArea : pickupArea,
                route : route,
                school : school,
            })
            .then(() => {
                console.log('Drivers route data added!');
                navigation.navigate('AppStack');
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
                    <BorderInput
                        onChangeText={text => handleOnchange(text, 'school')}
                        onFocus={() => handleError(null, 'school')}
                        iconName="map-outline"
                        label="School"
                        placeholder="Enter school"
                        error={errors.school}
                    />
                    <Button label="Next" onPress={validate} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default RouteForm;