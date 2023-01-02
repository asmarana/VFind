import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loader from '../components/loader/loader';

import SplashScreen from '../components/splashScreen';
import LoginScreen from '../screens/startup/login';
import SignupScreen from '../screens/startup/signup';
import MapScreen from '../screens/navbar/mapScreen';

const Stack =  createNativeStackNavigator();

const AuthStack = () => {

    return (
        <>
            <Loader visible={true} />
            <Stack.Navigator
                initialRouteName={SplashScreen}
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{header: () => null}}/>
                <Stack.Screen name="SignupScreen" component={SignupScreen} options={{header: () => null}}/>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{header: () => null}} />
                <Stack.Screen name="MapScreen" component={MapScreen} />
            </Stack.Navigator>
        </>
  );
};

export default AuthStack;