import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loader from '../components/loader/loader';
import SplashScreen from '../components/splashScreen';
import UserTypeScreen from '../screens/startup/userType';
import AppStack from './appStack';
import DriverForm from '../screens/startup/driverRegistration/driverform';
import VehicleForm from '../screens/startup/driverRegistration/driverform';
import RouteForm from '../screens/startup/driverRegistration/driverform';
import FinderStack from './finderStack';
import DriverRegistration from '../screens/startup/driverRegistration';
import DriverLocation from '../screens/navbar/mapScreen/driverLocation';
import MapComponent from '../components/map';

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
            </Stack.Navigator>
        </>
  );
};

export default DriverStack;

// useEffect(() => {
//     AsyncStorage.getItem('alreadyLaunched').then((value) => {
//         if (value == null) {
//             AsyncStorage.setItem('alreadyLaunched', 'true'); /
//             setIsFirstLaunch(true);
//         } else {
//             setIsFirstLaunch(false);
//         }
//     });
// }, []);

// if (isFirstLaunch == null) {
//     return null;
// } else if (isFirstLaunch == true) {
//     return()
// } else {
//     return()
// }