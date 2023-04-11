import React, { useState } from 'react';
import { Pressable, View, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import { secondary, white, whiteplus } from '../../../constants/colors';
// import Lottie from 'lottie-react-native';
import Button from '../../../components/button/button';
import { useNavigation } from '@react-navigation/native';
import MapComponent from '../../../components/map';
import Message from '../../../components/message';
import HomeSearch from '../../../components/homeSerachComponent';

const SearchScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <MapComponent/>
     <Message/>
    <HomeSearch/>
      {/* <Lottie source={require('../../../assets/VFindTrack.json')} autoPlay speed={1} style={{ width: 250, height: 250 }} /> */}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: whiteplus,
    flex: 1,
  }
})


