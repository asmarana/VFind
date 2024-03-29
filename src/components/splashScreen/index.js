import React, { useEffect, useRef, useState } from 'react'
import { Animated, Dimensions, Image, Text, View,StyleSheet } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { primary, whiteplus,lightPrimary } from '../../constants/colors';
import OnboardingScreen from '../../screens/startup/onboarding';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../assets/logo/whiteLogo.png'
import GetStarted from '../../screens/startup/getStarted';


const SplashScreen = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    const edges = useSafeAreaInsets();

    const startAnimation = useRef(new Animated.Value(0)).current;

    // Scaling Down Both logo and Title...
    const scaleLogo = useRef(new Animated.Value(1)).current;
    const scaleTitle = useRef(new Animated.Value(1)).current;

    // Offset Animation....
    const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const moveTitle = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    // Animating COntent...
    const contentTransition = useRef(new Animated.Value(Dimensions.get('window').height)).current;

    useEffect(() => {

        // Starting Animation after 500ms
        setTimeout(() => {

            // Parallel Animation...
            Animated.parallel([
                Animated.timing(
                    startAnimation,
                    {
                        // For same Height for non safe Area Devices
                        toValue: -Dimensions.get('window').height + (edges.top + 65),
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    scaleLogo,
                    {
                        // Scaling tpo 0.35
                        toValue: 0.4,
                        useNativeDriver: true
                    }
                ),
                // Animated.timing(
                //     scaleTitle,
                //     {
                //         // Scaling to 0.8
                //         toValue: 0.8,
                //         useNativeDriver: true
                //     }
                // ),
                Animated.timing(
                    moveLogo,
                    {
                        // Moving to Right Most
                        toValue: {
                            x: (Dimensions.get("window").width / 2) - 180,
                            y: (Dimensions.get('window').height / 2) + 20
                        },
                        useNativeDriver: true
                    }
                ),
                // Animated.timing(
                //     moveTitle,
                //     {
                //         // Moving to Right Most
                //         toValue: {
                //             x: 0,
                //             // Since image size is 100
                //             y: (Dimensions.get('window').height / 2) - 90
                //         },
                //         useNativeDriver: true
                //     }
                // ),
                Animated.timing(
                    contentTransition,
                    {
                        toValue: 0,
                        useNativeDriver: true
                    }
                )
            ])
                .start();

        }, 3000);

    }, []);

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then((value) => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        });

        GoogleSignin.configure({
            webClientId: '653280965619-ugosn17khi56ku843393kq4o9ia0vll3.apps.googleusercontent.com',
        });

    }, []);

    if (isFirstLaunch == null) {
        return null;
    } else if (isFirstLaunch == true) {
        return (

            <LinearGradient
                colors={[lightPrimary, primary]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.container}
            >
                <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, }}>
                    <Animated.View style={{ flex: 1, zIndex: 1, transform: [{ translateY: startAnimation }] }}>
                        <Animated.View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                            <Animated.Image source={Logo}
                                style={{
                                    width: 265, height: 140, marginBottom: 20,
                                    transform: [
                                        { translateX: moveLogo.x },
                                        { translateY: moveLogo.y },
                                        { scale: scaleLogo },

                                    ]
                                }}></Animated.Image>
                            {/* <Animated.Text style={{
                            fontSize: 25, fontWeight: 'bold', color: primary,
                            transform: [
                                { translateY: moveTitle.y },
                                { scale: scaleTitle }
                            ]
                        }}>VFIND</Animated.Text> */}
                        </Animated.View>
                    </Animated.View>
                    <Animated.View style={{
                        position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.04)', zIndex: 0,
                        transform: [
                            { translateY: contentTransition }
                        ]
                    }}>
                        <OnboardingScreen />
                    </Animated.View>
                </View>
            </LinearGradient>
        );
    } else {
        return (
            <LinearGradient
            colors={[lightPrimary, primary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >

            <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, }}>
                <Animated.View style={{ flex: 1, zIndex: 1, transform: [{ translateY: startAnimation }] }}>
                    <Animated.View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                        <Animated.Image source={Logo}
                            style={{
                                width: 265, height: 140, marginBottom: 20,
                                transform: [
                                    { translateX: moveLogo.x },
                                    { translateY: moveLogo.y },
                                    { scale: scaleLogo },

                                ]
                            }}></Animated.Image>
                        {/* <Animated.Text style={{
                            fontSize: 25, fontWeight: 'bold', color: primary,
                            transform: [
                                { translateY: moveTitle.y },
                                { scale: scaleTitle }
                            ]
                        }}>VFIND</Animated.Text> */}
                    </Animated.View>
                </Animated.View>
                <Animated.View style={{
                    position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.04)', zIndex: 0,
                    transform: [
                        { translateY: contentTransition }
                    ]
                }}>
                    <GetStarted />
                </Animated.View>
            </View>
            </LinearGradient>
        );
    }
};

export default SplashScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });