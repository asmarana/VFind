// import React from 'react';
// import { View, StyleSheet, Text,Image } from 'react-native';
// import { secondary, whiteplus } from '../../../constants/colors';
// const Card = ({ image, title, subtitle }) => {
//   return (
//     <View style={styles.card}>
//       <Image source={image} style={styles.image} />
//       <View style={styles.textContainer}>
//         <Text style={styles.title}>{title}</Text>
//         <Text style={styles.subtitle}>{subtitle}</Text>
//       </View>
//     </View>
//   );
// };



// const ChatScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Card
//         image={require('../../../assets/imgg.jpg')}
//         title="Sara Ahmed"
//         subtitle="What will be the new timmimg"
//       />
//             <Card
//         image={require('../../../assets/imgg.jpg')}
//         title="Sara Ahmed"
//         subtitle="What will be the new timmimg"
//       />
//             <Card
//         image={require('../../../assets/imgg.jpg')}
//         title="Sara Ahmed"
//         subtitle="What will be the new timmimg"
//       />
//             <Card
//         image={require('../../../assets/imgg.jpg')}
//         title="Sara Ahmed"
//         subtitle="What will be the new timmimg"
//       />
//             <Card
//         image={require('../../../assets/imgg.jpg')}
//         title="Sara Ahmed"
//         subtitle="What will be the new timmimg"
//       />
//             <Card
//         image={require('../../../assets/imgg.jpg')}
//         title="Sara Ahmed"
//         subtitle="What will be the new timmimg"
//       />
//             <Card
//         image={require('../../../assets/imgg.jpg')}
//         title="Sara Ahmed"
//         subtitle="What will be the new timmimg"
//       />
//                   <Card
//         image={require('../../../assets/imgg.jpg')}
//         title="Sara Ahmed"
//         subtitle="What will be the new timmimg"
//       />
//     </View>
//   );
// };

// export default ChatScreen;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: whiteplus,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding:1,
//   },
//   text: {
//     fontSize: 20,
//     color: secondary,
//   },
//   card: {
//     flexDirection: 'row',
//     backgroundColor: '#ffffff',
//     borderRadius: 4,
//     shadowColor: '#000000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 1,
//     margin: 1,
//   },
//   image: {
//     width: 50,
//     height: 50,
//     // borderTopLeftRadius: 10,
//     // borderBottomLeftRadius: 10,
//     borderRadius : 50,

//   },
//   textContainer: {
//     flex: 1,
//     padding: 10,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     color:'black'
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666666',
//   },
// });


import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, Text, Button, StyleSheet} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { primary } from '../../../constants/colors';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Could you let me know estimated arrival time?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hello',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{marginBottom: 5, marginRight: 5}}
            size={32}
            color= {primary}
          />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: primary,
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return(
      <FontAwesome name='angle-double-down' size={22} color='#333' />
    );
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});