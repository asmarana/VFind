import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { primaryLight } from '../../../constants/colors';
import GradientButton from '../../../components/button/gradientButton';

const GenerateNotification = () => {
  const [notificationText, setNotificationText] = useState('');

  const handleGenerateNotifications = () => {
    // Code to generate notifications
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name="notifications" size={24} color="black" />
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 10, color:primaryLight }}>Generate Notifications</Text>
      </View>
      <TextInput
        style={{ marginTop: 20, padding: 10, fontSize: 16, borderColor: '#ccc', borderWidth: 1 ,marginBottom:20}}
        placeholder="Enter notifications to generate..."
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

export default GenerateNotification;