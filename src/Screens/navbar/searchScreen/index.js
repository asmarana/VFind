import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { whiteplus } from '../../../constants/colors';
import MapComponent from '../../../components/map';
import Message from '../../../components/message';
import HomeSearch from '../../../components/homeSerachComponent';


const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ height: Dimensions.get('window').height - 468 }}>
        <MapComponent />
      </View>
      <Message />
      <HomeSearch />
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