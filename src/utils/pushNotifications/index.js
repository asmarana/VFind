import React from 'react';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import {PermissionsAndroid} from 'react-native';
// PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus == messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus == messaging.AuthorizationStatus.PROVISIONAL;
    
    if (enabled) {
        console.log('Authorization Status:',authStatus);
        getFcmToken();
    }
}

const getFcmToken = async () => {
    let fcmToken = awiat AsyncStorage.getItem('fcmToken')
    console.log('Old FCM Tokken:', fcmToken)
    if (!fcmToken) {
        try {
            const fcmToken = awiat messaging().getToken();
            if (fcmToken) {
                console.log('new FCM Token Generated:', fcmToken);
                await AsyncStorage.setItem('fcmToken', fcmToken);
            }
        } catch (error) {
            console.log(error);
        }
    }

};