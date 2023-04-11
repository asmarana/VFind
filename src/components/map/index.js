import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'


const MapComponent = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  )
}

export default MapComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },

});