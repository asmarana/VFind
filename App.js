import React from 'react';
import { Text, View, } from 'react-native';
import Onboard from './src/screens/startup/onboarding/index';
import Splash from './src/screens/startup/splash';
import SplashScreen from './src/components/splashScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const App = () => {
  return (
    <SafeAreaProvider>
      <SplashScreen />
    </SafeAreaProvider>
  );
};

export default App;
