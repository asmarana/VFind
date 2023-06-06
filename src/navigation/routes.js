// import React, { useContext, useState, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import auth from '@react-native-firebase/auth';
// import { AuthContext } from './authProvider';
// import Loader from '../components/loader/loader';
// import AuthStack from './authStack';
// import AppStack from './appStack';
// import DriverStack from './driverStack';
// import DriverRegistration from '../screens/startup/driverRegistration';
// import FinderStack from './finderStack';
// import UserTypeScreen from '../screens/startup/userType';
// import firestore from '@react-native-firebase/firestore';
// import { firebase } from '@react-native-firebase/firestore';

// const Routes = () => {

//   const { user, setUser, role } = useContext(AuthContext);

//   console.log(role);
//   const [initializing, setInitializing] = useState(true);
//   let role1 = '';
//   let globalValue = '';
//   const onAuthStateChanged = async (user) => {

//     setUser(user);
//     if (initializing)
//       setInitializing(false);
//     // const querySnapshot = await firestore()
//     //console.log('r',role)
//     //console.log('u',user)

//   };

//   useEffect( () => {
//     // role1 = funtn();
//     // role1.then(result => {
//     //   globalValue = result;
//     // })
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//  //   console.log('eeeeee', funtn())
//     return subscriber;

//   }, []);

//   if (initializing)
//     return (
//       <Loader visible={true} />
//     );

//     const funtn = async () => {
//       let r1;
//       try {
//         const snap = await firestore()
//           .collection('users')
//           .doc(user.uid)
//           .get();

//         if (snap.exists) {
//           r1 = snap.data().role;
//         } else {
//           r1 = '';
//         }
//       } catch (error) {
//         console.log('Error:', error);
//         r1 = '';
//       }

//       console.log('r1', r1);
//       return r1;
//     };


//   return (

//     <NavigationContainer>

//       {user ? (

//         (globalValue == '' || globalValue == null || globalValue == ' ') ?
//        <DriverStack /> : 

//        (globalValue == 'driver' ? <AppStack /> : globalValue == 'finder' ?  <FinderStack /> : <DriverStack />)


//        ) : <AuthStack />}
//     </NavigationContainer>
//   );
// };
// export default Routes;

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

  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  const [role, setRole] = useState('');

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing)
      setInitializing(false);
  };

  const getRole = async () => {
    try {
      const querySnapshot = await firestore()
        .collection('driverData')
        .where('Userid', '==', user.uid)
        .get();

      const data = querySnapshot.docs.map((doc) => doc.data());
      console.log('Role fetch',data.role);
      setRole(data.role)
    } catch (e) {
      console.log('Error fetching data.');
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    getRole;
    return subscriber;
  }, []);

  if (initializing)
    return (
      <Loader visible={true} />
    );

  return (
    <NavigationContainer>
      {user ?
        (role === '' || role == null ? <DriverStack />
          : (role === 'driver' ? <AppStack />
            : <FinderStack />)) :
        <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;  