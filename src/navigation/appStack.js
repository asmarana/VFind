import React from 'react';
import { View , Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MapScreen from '../screens/navbar/mapScreen';
import { primary, whiteplus } from '../constants/colors';
import MapMenuScreen from '../screens/navbar/mapScreen/mapMenu';
import ProfileScreen from '../screens/navbar/profileScreen';
import ChatScreen from '../screens/navbar/chatScreen';
import SearchScreen from '../screens/navbar/searchScreen';
import NotificationScreen from '../screens/navbar/notificationScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const LogoHeader = () => (
    <View>
      <Image
        source={require('../assets/logo/greenLogo.png')}
        style={{height : 35 , width : 68}}
      />
    </View>
  );

const MapStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen
            name="Map"
            component={MapScreen}
            options={{
                headerLeft: () => <LogoHeader />,
                title : '',
                // headerTitleStyle: {
                //     color: primary,
                // },
                headerStyle: {
                    shadowColor: '#fff',
                    elevation: 0,
                },
                // headerRight: () => (
                //     <View style={{ marginRight: 2 }}>
                //         <FontAwesome5.Button
                //             name="bars"
                //             size={22}
                //             backgroundColor="#fff"
                //             color = {primary}
                //             onPress={() => navigation.navigate('MapMenuScreen')}
                //         />
                //     </View>
                // ),
            }}
        />
        <Stack.Screen
            name="MapMenuScren"
            component={MapMenuScreen}
            options={{
                title: '',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: whiteplus,
                    shadowColor: '#2e64e515',
                    elevation: 0,
                },
                headerBackTitleVisible: false,
                headerBackImage: () => (
                    <View style={{ marginLeft: 15 }}>
                        <Ionicons name="arrow-back" size={25} color="#2e64e5" />
                    </View>
                ),
            }}
        />
    </Stack.Navigator>
);

const SearchStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{
                headerShown: false,
            }}
        />
    </Stack.Navigator>
);
const ChatStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="ChatScreen"
            component={ChatScreen}
            options={{
                headerShown: false,
            }}
        />
    </Stack.Navigator>
);
const NotificationStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="NotificationScreen"
            component={NotificationScreen}
            options={{
                headerShown: false,
            }}
        />
    </Stack.Navigator>
);

const ProfileStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
                headerShown: false,
            }}
        />
    </Stack.Navigator>
);

const AppStack = () => {
    const getTabBarVisibility = (route) => {
        const routeName = route.state
            ? route.state.routes[route.state.index].name
            : '';

        if (routeName === 'Chat') {
            return false;
        }
        return true;
    };

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: primary,
            }}>
            <Tab.Screen
                name="V Find"
                component={MapStack}
                options={({ route }) => ({
                    tabBarLabel: 'Maps',
                    tabBarIcon: ({ color, size }) => (
                        <Feather
                            name="map-pin"
                            color={color}
                            size={size}
                        />
                    ),
                    headerShown: false,
                })}
            />
            <Tab.Screen
                name="Search"
                component={SearchStack}
                options={({ route }) => ({
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color, size }) => (
                        <Feather
                            name="search"
                            color={color}
                            size={size}
                        />
                    ),
                })}
            />
            <Tab.Screen
                name="Messages"
                component={ChatStack}
                options={({ route }) => ({
                    tabBarVisible: getTabBarVisibility(route),
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign
                            name="message1"
                            color={color}
                            size={size}
                        />
                    ),
                })}
            />
            <Tab.Screen
                name="Notification"
                component={NotificationStack}
                options={({ route }) => ({
                    tabBarVisible: getTabBarVisibility(route),
                    tabBarIcon: ({ color, size }) => (
                        <Feather
                            name="bell"
                            color={color}
                            size={size}
                        />
                    ),
                })}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    // tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default AppStack;

// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Loader from '../components/loader/loader';
// import SplashScreen from '../components/splashScreen';

// import MapScreen from '../screens/navbar/mapScreen';
// import ProfileScreen from '../screens/navbar/profileScreen';

// const Stack =  createNativeStackNavigator();

// const AppStack = () => {

//     return (
//         <>
//             <Loader visible={true} />
//             <Stack.Navigator
//                 initialRouteName={SplashScreen}
//                 screenOptions={{ headerShown: false }}>
//                 <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
//             </Stack.Navigator>
//         </>
//   );
// };

// export default AppStack;