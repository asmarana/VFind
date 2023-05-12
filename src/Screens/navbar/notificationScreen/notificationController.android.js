import React, {useEffect} from 'react';
import {Alert} from "react-native";
import messaging from '@react-native-firebase/messaging';
import PushNotification  from 'react-native-push-notification';

PushNotification.createChannel({
    channelId : "channel-id",
    channelName : "My channel",
    channelDescription : "A channel to categorise your notifications",
    playSound : false,
    soundName : "default",
    importance :4,
    vibrate : true,
},
(created) => console.log(`createChannel returned'${created}'`)
);

const NotificationController =(props) => {
    useEffect(()=>{
        // PushNotification.getChannels(function(channel_ids){
        //     console.log(channel_ids);
        // });
        const unsubscribe = messaging().onMessage(async(remoteMessage) => {
            PushNotification.localNotification({
                message:remoteMessage.notification.body,
                title : remoteMessage.notification.title,
                bigPictureUrl : remoteMessage.notification.android.imageUrl,
                smallIcon: remoteMessage.notification.android,channelId,
                channelId:true,
                vibrate:true,
            });
        });
        return unsubscribe;
    },[]);
    return null;
};
export default NotificationController;