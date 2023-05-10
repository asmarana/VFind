import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { lightPrimary, primary } from '../../constants/colors';

const GradientButton = ({ onPress, iconName, iconSize }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[lightPrimary, primary]}
        style={{ borderRadius: 5 }}
      >
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            borderRadius: 5,
            paddingHorizontal:"7%",
          }}
        >
          <Icon name={iconName} size={iconSize} color="white" />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;