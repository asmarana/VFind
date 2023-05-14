import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { grey, primaryLight, secondary, secondaryLight, whiteplus } from '../../../constants/colors';
import Lottie from 'lottie-react-native';
import Button from '../../../components/button/button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../../../components/logo';
import Background from '../../../components/background';


const UserTypeScreen = ({ navigation }) => {
    const handleUserTypeSelect = async (userType) => {
        // Store the user type in AsyncStorage
        await AsyncStorage.setItem('userType', userType);

        // Redirect the user to the appropriate screen based on their user type
        if (userType === 'driver') {
            navigation.navigate('DriverRegistration');
        } else if (userType === 'finder') {
            navigation.navigate('FinderStack');
        }
    };
    return (
        <Background>
        <View style={styles.container}>
            <SafeAreaView style={{flex: 1 }}>
                <View style={{ paddingTop: 40, paddingHorizontal: 20, alignItems: 'center', }}>
                    <Text style={{ color: primaryLight, fontSize: 25, fontWeight: 'bold', }}>
                        You are a ?
                    </Text>
                    <View>
                        <View style={styles.card}>
                            <View style={{ alignItems: 'center' }}>
                                <Lottie source={require('../../../assets/finder.json')} autoPlay speed={1} style={{ width: 150, height: 150, }} />
                            </View>
                            <Button label=" Finder" onPress={() => handleUserTypeSelect('finder')} />
                        </View>
                        <View style={styles.card}>
                            <Lottie source={require('../../../assets/driver.json')} autoPlay speed={1} style={{ width: 150, height: 150 }} />
                            <Button label=" Driver" onPress={() => handleUserTypeSelect('driver')} />
                        </View>

                    </View>
                </View>
            </SafeAreaView >
        </View >
        </Background>
    );
};

export default UserTypeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        justifyContent: 'center',
        width: 270,
        height: 250,
        margin: 10,
        padding: 10,
        borderRadius: 3,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
    }
})