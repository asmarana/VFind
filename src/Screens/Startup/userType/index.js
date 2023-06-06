import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import { primaryLight, } from '../../../constants/colors';
import Lottie from 'lottie-react-native';
import Button from '../../../components/button/button';
import Background from '../../../components/background';
import { firebase } from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../../../navigation/authProvider';

const UserTypeScreen = ({ navigation }) => {

    const { user } = useContext(AuthContext);
    const [userEmail, setUserEmail] = useState(null);

    const handleRoleSelection = (selectedRole) => {
        if (selectedRole !== '') {
            const userRef = firebase.firestore().collection('users').doc(user.uid);

            userRef.set({
                Userid: user.uid,
                role: selectedRole,
                email: userEmail,
            })

                .then(() => {
                    console.log('User role stored in Firestore successfully!');

                    if (selectedRole === 'finder') {
                        navigation.navigate('FinderStack');
                    } else if (selectedRole === 'driver') {
                        navigation.navigate('DriverRegistration');
                    }
                })
                .catch((error) => {
                    console.log('Error storing user role:', error);
                });
        }
    };

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
        <Background>
            <View style={styles.container}>
                <SafeAreaView style={{ flex: 1 }}>
                    <ScrollView>
                        <View style={{ paddingTop: 40, paddingHorizontal: 20, alignItems: 'center', }}>
                            <Text style={{ color: primaryLight, fontSize: 25, fontWeight: 'bold', }}>
                                You are a ?
                            </Text>
                            <View>
                                <View style={styles.card}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Lottie source={require('../../../assets/finder.json')} autoPlay speed={1} style={{ width: 150, height: 150, }} />
                                    </View>
                                    <Button label=" Finder" onPress={() => handleRoleSelection('finder')} />
                                </View>
                                <View style={styles.card}>
                                    <Lottie source={require('../../../assets/driver.json')} autoPlay speed={1} style={{ width: 150, height: 150 }} />
                                    <Button label=" Driver" onPress={() => handleRoleSelection('driver')} />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
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

// import React from 'react';
// import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
// import { grey, primaryLight, secondary, secondaryLight, whiteplus } from '../../../constants/colors';
// import Lottie from 'lottie-react-native';
// import Button from '../../../components/button/button';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Logo from '../../../components/logo';
// import Background from '../../../components/background';


// const UserTypeScreen = ({ navigation }) => {
//     const handleUserTypeSelect = async (userType) => {
//         // Store the user type in AsyncStorage
//         await AsyncStorage.setItem('userType', userType);

//         // Redirect the user to the appropriate screen based on their user type
//         if (userType === 'driver') {
//             navigation.navigate('DriverRegistration');
//         } else if (userType === 'finder') {
//             navigation.navigate('FinderStack');
//         }
//     };
//     return (
//         <Background>
//         <View style={styles.container}>
//             <SafeAreaView style={{flex: 1 }}>
//                 <View style={{ paddingTop: 40, paddingHorizontal: 20, alignItems: 'center', }}>
//                     <Text style={{ color: primaryLight, fontSize: 25, fontWeight: 'bold', }}>
//                         You are a ?
//                     </Text>
//                     <View>
//                         <View style={styles.card}>
//                             <View style={{ alignItems: 'center' }}>
//                                 <Lottie source={require('../../../assets/finder.json')} autoPlay speed={1} style={{ width: 150, height: 150, }} />
//                             </View>
//                             <Button label=" Finder" onPress={() => handleUserTypeSelect('finder')} />
//                         </View>
//                         <View style={styles.card}>
//                             <Lottie source={require('../../../assets/driver.json')} autoPlay speed={1} style={{ width: 150, height: 150 }} />
//                             <Button label=" Driver" onPress={() => handleUserTypeSelect('driver')} />
//                         </View>

//                     </View>
//                 </View>
//             </SafeAreaView >
//         </View >
//         </Background>
//     );
// };

// export default UserTypeScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     card: {
//         justifyContent: 'center',
//         width: 270,
//         height: 250,
//         margin: 10,
//         padding: 10,
//         borderRadius: 3,
//         elevation: 2,
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.5,
//         shadowRadius: 3.84,
//     }
// })