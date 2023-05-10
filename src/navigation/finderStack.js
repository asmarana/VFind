// import React from 'react';
// import { View, Image } from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Feather from 'react-native-vector-icons/Feather';
// import SearchScreen from '../screens/navbar/searchScreen';
// import Search from '../screens/navbar/searchScreen/search';
// import {primary, white } from '../constants/colors';
// import NotificationScreen from '../screens/navbar/notificationScreen';

// const Stack = createNativeStackNavigator();

// const LogoHeader = () => (
//     <View>
//         <Image
//             source={require('../assets/logo/greenLogo.png')}
//             style={{ height: 35, width: 68 }}
//         />
//     </View>
// );


// const SearchStack = () => (
//     <Stack.Navigator>
//         <Stack.Screen
//             name="SearchScreen"
//             component={SearchScreen}
//             options={{
//                 headerRight: () => <LogoHeader />,
//                 title: '',
//                 headerShown : true,
//             headerTitleStyle:{
//                 fontSize:20,
//                 fontWeight:"bold",
//                 color:"white",
//             },
//             headerLeft : () => <Feather name="menu" color={primary} size={24}/>
//             }}
//         />
//         <Stack.Screen
//             name="GoogleSearch"
//             component={Search}
//             options={{
//                 headerShown: false,
//             }}
//         />
//     </Stack.Navigator>
// );

// const FinderStack = () => {


//     return (
//         <SearchStack />
//     );
// };

// export default FinderStack;



import React from 'react';
import { View, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';
import SearchScreen from '../screens/navbar/searchScreen';
import Search from '../screens/navbar/searchScreen/search';
import ChatScreen from '../screens/navbar/chatScreen';
import ProfileScreen from '../screens/navbar/profileScreen';
import { primary, } from '../constants/colors';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawer from '../components/customDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SettingScreen from '../screens/navbar/settingScreen';
import AboutScreen from '../screens/navbar/aboutScreen';
import FeedbackScreen from '../screens/navbar/feedbackScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const LogoHeader = () => (
    <View>
        <Image
            source={require('../assets/logo/greenLogo.png')}
            style={{ height: 35, width: 68, marginRight: 12 }}
        />
    </View>
);


const SearchStack = () => (
    <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: primary,
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#333',
            drawerLabelStyle: {
                marginLeft: -25,
                fontFamily: 'Roboto-Medium',
                fontSize: 15,
            },
        }}>
        <Drawer.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="home-outline" size={22} color={color} />
                ),
                headerRight: () => <LogoHeader />,
                title: 'Home',
                headerShown: true,
                headerTitleStyle: {
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "white",
                },
                // headerLeft: () => <Feather name="menu" color={primary} size={24} />
            }}
        />
        <Drawer.Screen
            name="Search"
            component={Search}
            options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="search" size={22} color={color} />
                ),
                headerShown: false,
            }}
        />
        <Drawer.Screen
            name="About"
            component={AboutScreen}
            options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="information-circle-outline" size={22} color={color} />
                ),
                headerShown: false,
            }}
        />
        <Drawer.Screen
            name="Feedback"
            component={FeedbackScreen}
            options={{
                headerShown: false,
                drawerIcon: ({ color }) => (
                    <MaterialIcons name="feedback" size={22} color={color} />
                ),
            }}
        />
        <Drawer.Screen
            name="Settings"
            component={SettingScreen}
            options={{
                drawerIcon: ({ color }) => (
                    <Ionicons name="settings-outline" size={22} color={color} />
                ),
            }}
        />
    </Drawer.Navigator>
);

const FinderStack = () => {


    return (
        <SearchStack />
    );
};

export default FinderStack;