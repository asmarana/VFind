import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { whiteplus } from '../../../constants/colors';
import Lottie from 'lottie-react-native';
import Button from '../../../components/button/button';
import { useNavigation } from '@react-navigation/native';
import MapComponent from '../../../components/map';
import Message from '../../../components/message';
import HomeSearch from '../../../components/homeSerachComponent';
import Slider from '../../../components/slider';
import Background from '../../../components/background';

const SearchScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <Background> */}
      <View style={{height:Dimensions.get('window').height-468}}>
        <MapComponent />
      </View>
      {/* <Slider /> */}
      <Message/>
      <HomeSearch />
      {/* </Background> */}
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