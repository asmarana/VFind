import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { secondary, whiteplus } from '../../../constants/colors';

const MapMenuScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Map menu screen</Text>
    </View>
  );
};

export default MapMenuScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: whiteplus,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    color:secondary,
  }
})