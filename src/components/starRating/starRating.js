import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const StarRating = ({ size }) => {
  return (
    <View style={{ flexDirection: 'row',padding: 4 }}>
      <Icon style={{margin:2}} name="star" size={size} color="#F4D03F" />
      <Icon style={{margin:2}} name="star" size={size} color="#F4D03F" />
      <Icon style={{margin:2}} name="star" size={size} color="#F4D03F" />
      <Icon style={{margin:2}} name="star" size={size} color="#F4D03F" />
      <Icon style={{margin:2}} name="star-o" size={size} color="#F4D03F" />
    </View>
  );
};

export default StarRating;