import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { primary } from '../../constants/colors';

const CustomLoader = ({ size = 'large', color = primary, backgroundColor = 'transparent', overlay = false }) => {
  return (
    <View style={[styles.container, overlay && styles.overlay, { backgroundColor: backgroundColor }]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1
  }
});

export default CustomLoader;
