import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import React, { useState, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
const ApiKey = 'AIzaSyCY1oDgXTf55jiJBGLsiTsCgf9DyrlU66E';

const MapComponent = () => {
  const [state, setState] = useState({
    pickupCords: {
      latitude: 33.7744,
      longitude: 72.6996,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
    dropLocationCords: {
      latitude: 33.7333,
      longitude: 72.7794,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    },
  })

  const mapRef = useRef()

  const { pickupCords, dropLocationCords } = state

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={pickupCords}
      >
        <Marker
          coordinate={pickupCords}
        />
        <Marker coordinate={dropLocationCords} >
          <Image style={{ width: 50, height: 50 }} source={require('../../assets/schoolMarker.webp')} />
        </Marker>
        {/* <MapViewDirections
          origin={pickupCords}
          destination={dropLocationCords}
          apikey={ApiKey}
          strokeWidth={3}
          strokeColor="hotpink"
          optimizeWaypoints={true}
          onReady={result => {
            mapRef.current.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: (width / 20),
                bottom: (height / 20),
                left: (width / 20),
                top: (height / 20),
              }
            })
          }}

        /> */}
      </MapView>
      {/* <View style={styles.bottomCard}>
                <Text style = {{color:'black'}}>Where are you going..?</Text>
                <TouchableOpacity
                  // onPress={}
                    style={styles.inpuStyle}
                >
                    <Text style = {{color:'black'}}>Choose your location</Text>
                </TouchableOpacity>
            </View> */}
            {/* <Loader isLoading={isLoading} /> */}
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
  bottomCard: {
    backgroundColor: 'white',
    width: '100%',
    padding: 30,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24
},
inpuStyle: {
  backgroundColor: 'white',
  borderRadius: 4,
  borderWidth: 1,
  alignItems: 'center',
  height: 48,
  justifyContent: 'center',
  marginTop: 16
}
});




// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import { GOOGLE_MAP_KEY } from '../../constants/googleMapKey';

// const MapComponent = () => {
//   return (
//     <View>
//       <GooglePlacesAutocomplete
//         placeholder='Search'
//         onPress={(data, details = null) => {
//           // 'details' is provided when fetchDetails = true
//           console.log(data, details);
//         }}
//         query={{
//           key: 'YOUR API KEY',
//           language: 'en',
//         }}
//       />
//     </View>
//   )
// }

// export default MapComponent

// const styles = StyleSheet.create({})