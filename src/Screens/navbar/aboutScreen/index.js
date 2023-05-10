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
    <View style={{ flex: 1, padding: 20 }}>
        <Background>
      <Slider/>
      <FullMessage/>
      </Background>
    </View>
  );
};

export default AboutScreen;