import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import { secondary } from '../../../constants/colors';

const Messages = [
  {
    id: '1',
    userName: 'Fatima Khan',
    userImg: require('../../../assets/img4.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'What will be drop  time..?',
  },
  {
    id: '2',
    userName: 'Ali Saeed',
    userImg: require('../../../assets/img1.jpg'),
    messageTime: '2 hours ago',
    messageText:
    "Hi, can you please confirm the pickup time for tomorrow's school trip?",
  },
  {
    id: '3',
    userName: 'Usman Tahir',
    userImg: require('../../../assets/img2.jpg'),
    messageTime: '1 hours ago',
    messageText:
    "Is it possible to add one more child to the pickup list?",
  },
  {
    id: '4',
    userName: 'Umer Rehman',
    userImg: require('../../../assets/img3.jpg'),
    messageTime: '1 day ago',
    messageText:
    "Could you please let me know the estimated arrival time at the school?",
  },
  {
    id: '5',
    userName: 'Rabia Irfan',
    userImg: require('../../../assets/imgg.jpg'),
    messageTime: '2 days ago',
    messageText:
    "Please remind the children to wear their seatbelts during the ride.",
  },
];

const MessagesScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <FlatList 
          data={Messages}
          keyExtractor={item=>item.id}
          renderItem={({item}) => (
            <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('Chat', {userName: item.userName})}>
              <View style={styles.userInfo}>
                <View style={styles.userImgWrapper}>
                  <Image style={styles.userImg} source={item.userImg} />
                </View>
                <View style={styles.textSection}>
                  <View style={styles.userInfoText}>
                    <Text style={styles.userName}>{item.userName}</Text>
                    <Text style={styles.postTime}>{item.messageTime}</Text>
                  </View>
                  <Text style={styles.messageText}>{item.messageText}</Text>
                </View>
              </View>
            </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  card: {
    width: '100%',
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userImgWrapper: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  userInfoText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    color:secondary,
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
    color:secondary,
  },
  postTime: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Lato-Regular',
    color:secondary,
  },
  messageText: {
    fontSize: 14,
    color: '#333333',
    color:secondary,
  },
});