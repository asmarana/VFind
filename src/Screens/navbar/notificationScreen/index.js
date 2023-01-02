import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { secondary, whiteplus } from '../../../constants/colors';

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile screen</Text>
    </View>
  );
};

export default NotificationScreen;

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