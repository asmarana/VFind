import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'


const MapComponent = () => {
  return (
    <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 33.7744,
            longitude: 72.6996,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
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