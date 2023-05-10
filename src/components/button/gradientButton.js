import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { lightPrimary, primary } from '../../constants/colors';

const GradientButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[primary, lightPrimary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          padding: 10,
          alignItems: 'center',
          borderRadius: 5,
          paddingHorizontal:"26%",
        }}>
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize:16 }}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;