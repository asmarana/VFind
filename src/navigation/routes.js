import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { AuthContext } from './authProvider';
import Loader from '../components/loader/loader';
import AuthStack from './authStack';
import AppStack from './appStack';
import DriverStack from './driverStack';
import DriverRegistration from '../screens/startup/driverRegistration';
import FinderStack from './finderStack';
import UserTypeScreen from '../screens/startup/userType';

const Routes = () => {

  const { user, setUser, role } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) 
    setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) 
  return(
    <Loader visible={true} />
  ); 

  return (
    <NavigationContainer>
      {user ? (role === '' ? <DriverStack/>: (role === 'driver'? <AppStack /> : <FinderStack />)) : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes; 