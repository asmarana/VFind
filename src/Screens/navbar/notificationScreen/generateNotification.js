import React, {  useContext,useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity,Button,StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { grey, primaryLight, secondaryLight } from '../../../constants/colors';
import GradientButton from '../../../components/button/gradientButton';
import Background from '../../../components/background';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import NotificationController from './notificationController.android';
import { MessageContext } from '../../../components/notification/messageContext';
import { SendMessage } from '../../../../api';

const GenerateNotification = () => {
  // const {setMessage} = useContext(MessageContext);

  const [notificationText, setNotificationText] = useState('');

  // useEffect(() => {
  //   messaging().setBackgroundMessageHandler(async remoteMessage => {
  //     console.log('Message handled in the background!', remoteMessage);
  //   })

  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //      setMessage(remoteMessage);
  //       // Alert.alert('A new FCM message arrived!',JSON.stringify(remoteMessage));
  //       console.log(remoteMessage)
  //   });

  //   return unsubscribe;
  // }, []);


  const setMessage  = useContext(MessageContext);

  useEffect(() => {
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log('Message handled in the background!', remoteMessage);
    });

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      setMessage(remoteMessage);
      Alert.alert('New Notification!', JSON.stringify(remoteMessage));
      console.log(remoteMessage);
    });

    return () => unsubscribe();
  }, []);


  const checkToken = async() => {
    const fcmToken = await messaging().getToken();
    if (fcmToken){
      console.log(fcmToken);
      Alert.alert(fcmToken);
    }
  }

  const Send = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken){
      console.log(fcmToken);
      // Alert.alert(fcmToken);
    }
     try{
      const resp = await SendMessage("vfind",notificationText)
      console.log(resp)
      Alert.alert('Notification sent successfully!');
     } catch(err){
          console.log(err)
      Alert.alert('Error Sending notification!');

     }
     
  }

  // const Send = async () => {
  //   try {
  //     console.log("here 1")
  //     const resp = await SendMessage("vfind", "hello");
  //     console.log(resp);
  //     Alert.alert('Notification sent successfully!');
  //   } catch (err) {
  //     console.log(err);
  //     Alert.alert('Error Sending notification!');
  //   }
  // };

  return (
    <Background>
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'center' }}>
        <Ionicons name="notifications" size={24} color={primaryLight} />
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 10, color:primaryLight }}>Generate Notifications</Text>
      </View>
      <View>
      <TextInput
        style={{ marginTop: 20, padding: 10, fontSize: 16, borderColor: secondaryLight, borderWidth: 1 ,marginBottom:20, color:'black'}}
        placeholder="Enter notifications to generate..."
        placeholderTextColor= {secondaryLight}
        multiline={true}
        numberOfLines={6}
        value={notificationText}
        onChangeText={(text) => setNotificationText(text)}
      />
       <NotificationController/>
      <GradientButton 
      style={{padding: 10, borderRadius: 5, marginTop: 20 }}
      onPress={() => Send()}
      title={"Send"}/>
      </View>
    </View>
    {/* <View style={styles.container}>
      <NotificationController/>
      <Text style={styles.paragraph}>Push Notification with firebase</Text>
      <Button title ="Get FCM TOken" onPress={() => checkToken()}/>
    </View> */}
    </Background>
  );
};

export default GenerateNotification;

const styles = StyleSheet.create({
  container:{
    flex : 1,
    justifyContent:'space-around',
    padding:20,
  },
  paragraph:{
    textAlign:"center",
    fontSize:22,
    color:"black",
    fontWeight:'bold',
  }
})