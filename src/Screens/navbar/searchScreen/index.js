import React, { useState } from 'react';
import { Pressable, View, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import { secondary, white } from '../../../constants/colors';
import Lottie from 'lottie-react-native';
import Button from '../../../components/button/button';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  return (
    <View style={styles.container}>
      <Lottie source={require('../../../assets/VFindTrack.json')} autoPlay speed={1} style={{ width: 250, height: 250 }} />
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Pressable 
          onPress = {() => navigation.navigate("GoogleSearch")}
          style={styles.pressable}>
            <Text style={styles.input}>Pickup Location</Text>
            {/* <TextInput
              style={styles.input}
              placeholder="Pickup Location"
              placeholderTextColor="#aaaaaa"
              // value={pickupLocation}
              // onChangeText={(text) => setPickupLocation(text)}
            /> */}
          </Pressable>
          <Pressable style={styles.pressable}>
            <TextInput
              style={styles.input}
              placeholder="Destination"
              placeholderTextColor="#aaaaaa"
              value={destination}
              onChangeText={(text) => setDestination(text)}
            />
          </Pressable>
          <Pressable style={styles.pressable}>
            <Button label={"Find a Driver"} />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: secondary,
  },
  input: {
    height: 40,
    width: '100%',
    // borderRadius: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: '#000000',
    marginTop: 12,
    paddingHorizontal: 4,
    fontSize: 16,
    color:"#aaaaaa"
  },
  pressable : {
    alignItems: "center", 
 
  }
})


