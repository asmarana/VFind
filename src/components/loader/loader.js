import React from 'react';
import {useWindowDimensions, View, Text, ActivityIndicator, StyleSheet, } from 'react-native';
import { primaryLight, white } from '../../constants/colors';

const Loader = ({visible = false}) => {
  const {width, height} = useWindowDimensions();
  return (
    visible && (
      <View style={[style.container, {height, width}]}>
        <View style={style.loader}>
          <ActivityIndicator size="large" color={primaryLight} />
          <Text style={{marginLeft: 10, fontSize: 16, color: primaryLight}}>Loading...</Text>
        </View>
      </View>
    )
  );
};

const style = StyleSheet.create({
  loader: {
    height: 60,
    backgroundColor: white,
    marginHorizontal: 90,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  container: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
});

export default Loader;