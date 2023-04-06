import React from 'react';
import { View, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { primary } from '../constants/colors';
import ProfileScreen from '../screens/navbar/profileScreen';
import ChatScreen from '../screens/navbar/chatScreen';
import SearchScreen from '../screens/navbar/searchScreen';
import Search from '../screens/navbar/searchScreen/search';
import NotificationScreen from '../screens/navbar/notificationScreen';

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


const SearchStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{
                headerLeft: () => <LogoHeader />,
                title: '',
            }}
        />
        <Stack.Screen
            name="GoogleSearch"
            component={Search}
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

const FinderStack = () => {
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
            screenOptions={{
                activeTintColor: primary,
            }}>
            <Tab.Screen
                name="Search"
                component={SearchStack}
                options={({ route }) => ({
                    headerShown: false,
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

export default FinderStack;