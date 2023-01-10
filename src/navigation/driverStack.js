import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loader from '../components/loader/loader';

import SplashScreen from '../components/splashScreen';
import UserTypeScreen from '../screens/startup/userType';
import AppStack from './appStack';
import DriverForm from '../screens/startup/dataForm/driverform';
import VehicleForm from '../screens/startup/dataForm/vehicleForm';
import RouteForm from '../screens/startup/dataForm/routeForm';

const Stack =  createNativeStackNavigator();

const DriverStack = () => {

    return (
        <>
            <Loader visible={true} />
            <Stack.Navigator
                initialRouteName={SplashScreen}
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="UserTypeScreen" component={UserTypeScreen} options={{header: () => null}} />
                <Stack.Screen name="DriverInfoForm" component={DriverForm} options={{header: () => null}} />
                <Stack.Screen name="AppStack" component={AppStack} options={{header: () => null}} />
                <Stack.Screen name="VehicleInfoScreen" component={VehicleForm} options={{header: () => null}} />
                <Stack.Screen name="RouteInfoScreen" component={RouteForm} options={{header: () => null}} />
            </Stack.Navigator>
        </>
  );
};

export default DriverStack;