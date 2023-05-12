import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { primaryLight } from '../../../constants/colors';
import GradientButton from '../../../components/button/gradientButton';
import Slider from '../../../components/slider';
import Message from '../../../components/message';
import FullMessage from '../../../components/message/fullMessage';
import Background from '../../../components/background';

const AboutScreen = () => {
  const [notificationText, setNotificationText] = useState('');
  return (
    <Background>
      <View style={{ flex: 1, padding: 10 ,justifyContent:'space-evenly'}}>
        <View style={{ alignItems:'center'}}>
        <Text style={{ fontSize: 39, fontWeight: 'bold', marginLeft:20, color:'black' }}>About</Text>
        </View>
        <Slider />
        <FullMessage/>
      </View>
    </Background>
  );
};

export default AboutScreen;