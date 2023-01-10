import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { secondary, whiteplus } from '../../../constants/colors';
import Lottie from 'lottie-react-native';
import Button from '../../../components/button/button';

const SearchScreen = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  return (
    <View style={styles.container}>
      <Lottie source={require('../../../assets/VFindTrack.json')} autoPlay speed={1} style={{ width: 250, height: 250 }} />

      <TextInput
        style={styles.input}
        placeholder="Pickup Location"
        placeholderTextColor="#aaaaaa"
        value={pickupLocation}
        onChangeText={(text) => setPickupLocation(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Destination"
        placeholderTextColor="#aaaaaa"
        value={destination}
        onChangeText={(text) => setDestination(text)}
      />
      <Button label={"Find a Driver"} />
    </View>
  );
};

export default SearchScreen;

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
    color: secondary,
  },
  input: {
    height: 40,
    width: '80%',
    // borderRadius: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
    marginTop: 20,
    paddingHorizontal: 10,
    fontSize: 16,
  },
})