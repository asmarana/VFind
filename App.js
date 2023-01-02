// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Loader from './src/components/loader/loader';

// import Onboard from './src/screens/startup/onboarding/index';
// import Splash from './src/screens/startup/splash';
// import SplashScreen from './src/components/splashScreen';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import DriverForm from './src/screens/startup/dataForm/driverform';
// import LoginScreen from './src/screens/startup/login';
// import SignupScreen from './src/screens/startup/signup';
// import OnboardingScreen from './src/screens/startup/onboarding/index';


// const Stack = createNativeStackNavigator();

// const App = () => {
//   const [initialRouteName, setInitialRouteName] = React.useState('');

//   React.useEffect(() => {
//     setTimeout(() => {
//       authUser();
//     }, 2000);
//   }, []);

//   const authUser = async () => {
//     try {
//       let userData = await AsyncStorage.getItem('userData');
//       if (userData) {
//         userData = JSON.parse(userData);
//         if (userData.loggedIn) {
//           setInitialRouteName('HomeScreen');
//         } else {
//           setInitialRouteName('SplashScreen');
//         }
//       } else {
//         setInitialRouteName('SignupScreen');
//       }
//     } catch (error) {
//       setInitialRouteName('SplashScreen');
//     }
//   };
//   return (
//     <NavigationContainer>
//       {!initialRouteName ? (
//         <Loader visible={true} />
//       ) : (
//         <>
//           <Stack.Navigator
//             initialRouteName={initialRouteName}
//             screenOptions={{ headerShown: false }}>
//             <Stack.Screen
//               name="SignupScreen"
//               component={SignupScreen}
//             />
//             <Stack.Screen name="SplashScreen" component={SplashScreen} />
//             <Stack.Screen name="LoginScreen" component={LoginScreen} />
//             <Stack.Screen name="HomeScreen" component={SignupScreen} />
//           </Stack.Navigator>
//         </>
//       )}
//     </NavigationContainer>
//       // <SafeAreaProvider>
//       //   <SplashScreen />
//       // </SafeAreaProvider> 
//   );
// };

// export default App;

import React from 'react';
import RootNavigation from './src/navigation';

const App = () => {
  return <RootNavigation/>;
}

export default App;
