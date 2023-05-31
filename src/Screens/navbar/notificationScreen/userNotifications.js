import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { grey, primaryLight, secondaryLight, } from '../../../constants/colors';
import Background from '../../../components/background';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { MessageProvider } from '../../../components/notification/messageContext';
import PopupNotification from '../../../components/notification/notificationStyle';

// const notifications = [
//   {
//     id: 1,
//     username: 'Driver',
//     message: 'Pickup time is 2.',
//     time: '2 minutes ago',
//   },
//   {
//     id: 2,
//     username: 'Driver',
//     message: 'Coming in 15 mintues.',
//     time: '5 hour ago',
//   },
//   // Add more notifications as needed
// ];


const UserNotification = () => {

  const [notificationData, setNotificationData] = useState([
    {
      id: 1,
      username: 'Driver',
      message: 'Pickup time is 2.',
      time: '2 minutes ago',
    },
    {
      id: 2,
      username: 'Driver',
      message: 'Coming in 15 mintues.',
      time: '5 hour ago',
    },
  ]);



  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationText}>
        <Text style={styles.username}>{item.username}</Text>{'\n\n '}
        <Text>{item.message}</Text>
      </Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );


  useEffect(() => {
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    })

    // const unsubscribe = messaging().onMessage(async remoteMessage => {
    //   Alert.alert('New Notification!', JSON.stringify(remoteMessage));
    //   <Text style={{ color: 'black' }}>{JSON.stringify(remoteMessage)}</Text>
    //   console.log(remoteMessage)
    // });

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      // Extract the relevant information from remoteMessage
      const newNotification = {
        id: remoteMessage.id,
        username: "Driver",
        message: remoteMessage.data.message,
        time: "Now",
      };

      // Update the notificationData array with the new notification
      setNotificationData((prevData) => [...prevData, newNotification]);

      Alert.alert('New Notification!', JSON.stringify(remoteMessage.data.message));
      console.log(remoteMessage);
    });

    return unsubscribe;
  }, []);



  return (
    <MessageProvider>
      <Background>
        <View style={styles.container}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Ionicons name="notifications" size={24} color={"black"} />
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 10, color: "black" }}>Notifications</Text>
          </View>
          {/* <PopupNotification /> */}
          {/* <Text>{JSON.stringify(remoteMessage)}</Text> */}
          <View style={styles.notificationContainer}>
            <FlatList
              data={notificationData}
              // keyExtractor={(item) => item.id.toString()}
              renderItem={renderItem}
              contentContainerStyle={styles.notificationList}
            />
          </View>
        </View>
      </Background>
    </MessageProvider>
  );
};

export default UserNotification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  paragraph: {
    // textAlign: "center",
    // fontSize: 22,
    // color: "black",
    // fontWeight: 'bold',
  },
  notificationContainer: {
    flex: 1,

  },
  notificationList: {
    paddingTop: 8,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 12,
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius:5,
    borderBottomWidth:1,
    borderBottomColor:grey

  },
  notificationText: {
    flex: 1,
    marginLeft: 8,
    color: primaryLight
  },
  username: {
    fontWeight: 'bold',
    color: 'black'
  },
  time: {
    color: '#888',
    fontSize: 12,
  },
})