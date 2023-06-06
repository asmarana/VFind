import React, { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { primary, primaryLight } from '../../../constants/colors';
import Background from '../../../components/background';
import Logo from '../../../components/logo';
import { useNavigation } from '@react-navigation/native';
import { FormContext, FormProvider } from '../../../helper/formContext';

const Button = ({ title, onPress }) => (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
            <View style={styles.arrow} />
        </View>
    </TouchableOpacity>
);




const DriverRegistrationScreen = () => {
    const navigation = useNavigation();
    const { form1Filled, form2Filled, form3Filled, isAllFormsFilled } = useContext(FormContext);

    return (
        <Background>
            <Logo />
            <View style={styles.Container}>
                <Text style={styles.heading1}>Driver Registration</Text>
                <Text style={styles.heading2}>اپنے آپ کو رجسٹر کروائیں</Text>
                <Button title="Basic Info(بنیادی معلومات)" onPress={() => navigation.navigate('DriverInfoForm')} />
                {/* <Button title="CNIC (شناختی کارڈ) " onPress={() => navigation.navigate('CnicForm')} /> */}
                <Button title="Route (روٹ)" onPress={() => navigation.navigate('RouteInfoScreen')} />
                <Button title="Vehicle (گاڑی کی معلومات) " onPress={() => navigation.navigate('VehicleInfoScreen')} />
                <TouchableOpacity
                    style={[styles.doneButton, !isAllFormsFilled && styles.disabledButton]}
                    // disabled={!isAllFormsFilled}
                    onPress={() => navigation.navigate('AppStack')}>
                    <Text style={styles.doneButtonText}>Done</Text>
                </TouchableOpacity>
            </View>
        </Background>
    );
};
const DriverRegistration = () => {
    return (
        <FormProvider>
            <DriverRegistrationScreen />
        </FormProvider>
    );
};

const styles = StyleSheet.create({

    Container: {
        // backgroundColor: '#FFFFFF',
        borderRadius: 5,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        marginVertical: 10,
        width: '80%',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: primaryLight,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    arrow: {
        width: 10,
        height: 10,
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderColor: '#fff',
        transform: [{ rotate: '45deg' }],
    },
    doneButton: {
        marginTop: 20,
        padding: 15,
        backgroundColor: primary,
        borderRadius: 35,
        width: 220,
        alignItems: 'center',
        justifyContent: "center"

    },
    // disabledButton: {
    //     opacity: 0.5,
    // },

    doneButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    heading1: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333'
    },
    heading2: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        paddingBottom: 30,
    }
});

export default DriverRegistration;