import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loader from '../components/loader/loader';
import SplashScreen from '../components/splashScreen';
import UserTypeScreen from '../screens/startup/userType';
import AppStack from './appStack';
import DriverForm from '../screens/startup/driverRegistration/driverform';
import VehicleForm from '../screens/startup/driverRegistration/vehicleForm';
import RouteForm from '../screens/startup/driverRegistration/routeForm';
import FinderStack from './finderStack';
import DriverRegistration from '../screens/startup/driverRegistration';
import DriverLocation from '../screens/navbar/mapScreen/driverLocation';
import MapComponent from '../components/map';
import DriverProfile from '../screens/navbar/profileScreen/driverProfile';
import GetStarted from '../screens/startup/getStarted';
import AboutScreen from '../screens/navbar/aboutScreen';
import ChatScreen from '../screens/navbar/chatScreen';
import UserNotifications from '../screens/navbar/notificationScreen/userNotifications';
import FinderLocationSearch from '../screens/navbar/searchScreen/finderLocationSearch';
import CnicForm from '../screens/startup/driverRegistration/cnicForm';

const Stack =  createNativeStackNavigator();

const DriverStack = () => {

    return (
        <>
            <Loader visible={true} />
            <Stack.Navigator
                initialRouteName={SplashScreen}
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="UserTypeScreen" component={UserTypeScreen} options={{header: () => null}} />
                <Stack.Screen name="DriverRegistration" component={DriverRegistration} options={{header: () => true}}/>
                <Stack.Screen name="DriverInfoForm" component={DriverForm} options={{header: () => null}} />
                <Stack.Screen name="VehicleInfoScreen" component={VehicleForm} options={{header: () => null}} />
                <Stack.Screen name="RouteInfoScreen" component={RouteForm} options={{header: () => null}} />
                <Stack.Screen name="AppStack" component={AppStack} options={{header: () => null}} />
                <Stack.Screen name="DriverLocation" component={DriverLocation} options={{header: () => null}} />
                <Stack.Screen name="FinderStack" component={FinderStack} options={{header: () => null}} />
                <Stack.Screen name="Maps" component={MapComponent} options={{header: () => null}} />
                <Stack.Screen name="DriverProfile" component={DriverProfile} options={{header: () => null}} />
                <Stack.Screen name="ChatScreen" component={ChatScreen} options={{header: () => null}} />
                <Stack.Screen name="GetStarted" component={GetStarted} options={{header: () => null}} />
                <Stack.Screen name="AboutScreen" component={AboutScreen} options={{header: () => null}} />
                <Stack.Screen name="UserNotifications" component={UserNotifications} options={{header: () => null}} />
                <Stack.Screen name="FinderLocationSearch" component={FinderLocationSearch} options={{header: () => null}} />
                <Stack.Screen name="CnicForm" component={CnicForm} options={{header: () => null}} />
            </Stack.Navigator>
        </>
  );
};

export default DriverStack;