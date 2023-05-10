import React from 'react';
import { View, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MapScreen from '../screens/navbar/mapScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { primary, secondary, whiteplus } from '../constants/colors';
import MapMenuScreen from '../screens/navbar/mapScreen/mapMenu';
import ProfileScreen from '../screens/navbar/profileScreen';
import ChatScreen from '../screens/navbar/chatScreen';
import MessagesScreen from '../screens/navbar/chatScreen/messagesScreen';
import SearchScreen from '../screens/navbar/searchScreen';
import NotificationScreen from '../screens/navbar/notificationScreen';
import GenerateNotification from '../screens/navbar/notificationScreen/generateNotification';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const LogoHeader = () => (
    <View>
        <Image
            source={require('../assets/logo/greenLogo.png')}
            style={{ height: 35, width: 68 }}
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
                title: '',
                // headerTitleStyle: {
                //     color: primary,
                // },
                headerStyle: {
                    shadowColor: '#fff',
                    elevation: 0,
                },
                headerRight: () => (
                    <View>
                        <FontAwesome5.Button
                            name="bars"
                            size={22}
                            backgroundColor="#fff"
                            color={primary}
                            onPress={() => navigation.navigate('DriverLocation')}
                        />
                    </View>
                ),
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

const MessageStack = ({ navigation }) => (
    
    <Stack.Navigator>
        <Stack.Screen name="Messages" component={MessagesScreen}/>
        <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={({ route }) => ({
                title: route.params.userName,
                tabBarVisible: false,
                headerBackTitleVisible: false,
            })}
        />
    </Stack.Navigator>
);

const NotificationStack = ({navigation}) => (
    <Stack.Navigator>
        <Stack.Screen
            name="Notification"
            component={NotificationScreen}
            options={{
                // headerShown: false,
                headerRight: () => (
                    <View>
                        <FontAwesome5.Button
                            name="plus"
                            size={22}
                            backgroundColor="#fff"
                            color={secondary}
                            onPress={() => navigation.navigate('Notifications')}
                        />
                    </View>
                ),
            }}
        />
        <Stack.Screen name="Notifications" component={GenerateNotification}/>
    </Stack.Navigator>
);

const ProfileStack = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
                headerShown: false,
                // headerRight: () => (
                //     <View>
                //         <FontAwesome5.Button
                //             name="plus"
                //             size={22}
                //             backgroundColor="#fff"
                //             color={secondary}
                //             onPress={() => navigation.navigate('Notifications')}
                //         />
                //     </View>
                // ),
            }}
        />
    </Stack.Navigator>
);

const AppStack = () => {

    const getTabBarVisibility = (route) => {
        const routeName = route.state
            ? route.state.routes[route.state.index].name
            : '';
    
        if (routeName === 'ChatF') {
            return false;
        }
        return true;
    };
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: primary
            }}
            screenOptions={{
                activeTintColor: primary,
            }}
        >
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
                name="Messages"
                component={MessageStack}
                options={({ route }) => ({
                    headerShown: false,
                    tabBarVisible: getTabBarVisibility(route),
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="chatbox-ellipses-outline"
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
                    headerShown:false,
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
                    headerShown:false,
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