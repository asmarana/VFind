import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { primaryLight } from '../../../constants/colors';
import GradientButton from '../../../components/button/gradientButton';

const FeedbackScreen = () => {
  const [notificationText, setNotificationText] = useState('');
  return (
    <View style={{ flex: 1, padding: 20,justifyContent:'center' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {/* <Ionicons name="notifications" size={24} color="black" /> */}
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 10, color:primaryLight,justifyContent:"center",alignItems:'center' }}>Give Feedback</Text>
      </View>
      <TextInput
        style={{ marginTop: 20, padding: 10, fontSize: 16, borderColor: '#ccc', borderWidth: 1 ,marginBottom:20}}
        placeholder="Enter Feedback"
        placeholderTextColor="#ccc"
        multiline={true}
        numberOfLines={4}
        value={notificationText}
        onChangeText={(text) => setNotificationText(text)}
      />
      <GradientButton 
      style={{padding: 10, borderRadius: 5, marginTop: 20 }}
      title={"Done"}/>
    </View>
  );
};

export default FeedbackScreen;