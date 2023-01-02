// import React from 'react';
// import { View, StyleSheet, Text } from 'react-native';
// import { secondary, whiteplus } from '../../../constants/colors';

// const MapScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Profile screen</Text>
//     </View>
//   );
// };

// export default MapScreen;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: whiteplus,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   text: {
//     fontSize: 20,
//     color:secondary,
//   }
// })

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native'

import MapView, {
  Polygon, PROVIDER_GOOGLE
} from 'react-native-maps'
import { primaryLight } from '../../../constants/colors'

const { width, height } = Dimensions.get('window')

const ASPECT_RATIO = width / height
const LATITUDE = 33.7715
const LONGITUDE = 72.7511
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class MapScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
    }
  }

  render() {
    const mapOptions = {
      scrollEnabled: true
    }
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          //   mapType={MAP_TYPES.SATELLITE}
          initialRegion={this.state.region}
        >
        </MapView>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.bubble, styles.button]}>
            <Text style={{ color: primaryLight }}>Routes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.bubble, styles.button]}>
            <Text style={{ color: primaryLight }}>Student</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.bubble, styles.button]}>
          <Text style={{ color: primaryLight }}>School</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 7,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch'
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent'
  }
})

export default MapScreen;


