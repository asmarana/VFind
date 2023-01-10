import React, { Component, useState, useRef } from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps'
import { primaryLight } from '../../../constants/colors'

const { width, height } = Dimensions.get('window')

const aspectRatio = width / height
const LATITUDE = 33.7715
const LONGITUDE = 72.7511
const LATITUDE_DELTA = 0.0322
const LONGITUDE_DELTA = LATITUDE_DELTA * aspectRatio


class MapScreen extends Component {

  constructor(props) {
    super(props)
    this.mapRef = React.createRef();
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      route: [],
      pressCount: 0,
      coordinates: { latitude: 0, longitude: 0 },
      coor: { latitude: 0, longitude: 0 },
      markers: [],
      currentLocation: null,
    }
  }

  updateStudentLoc = () => {
    this.setState({
      markers: [
        { latitude: 33.7725, longitude: 72.7575 },
        { latitude: 33.7715, longitude: 72.7590 },
        { latitude: 33.7735, longitude: 72.7580 },
      ]
    });
  }

  updateRoute = () => {
    this.setState({
      route: [
        { latitude: 33.7715, longitude: 72.7590 },
        { latitude: 33.7735, longitude: 72.7580 },
        { latitude: 33.7725, longitude: 72.7575 },
        { latitude: 33.7670, longitude: 72.7510 }
      ]
    });
  }

  removeRoute = () => {
    this.setState({ route: [] });
  }

  removeStudentLoc = () => {
    this.setState({ markers: [] });
  }
  updateSchoolLoc = (lat, lng) => {
    this.setState({ coordinates: { latitude: lat, longitude: lng } });
  }

  studentLoc = () => {
    if (this.state.pressCount === 0) {
      this.setState({ pressCount: 1 });
      this.updateStudentLoc();
      this.mapRef.current.animateToRegion(this.state.region, 1000);
    } else {
      this.setState({ pressCount: 0 });
      this.removeStudentLoc();
    }
  }

  schoolLoc = () => {
    if (this.state.pressCount === 0) {
      this.setState({ pressCount: 1 });
      this.updateSchoolLoc(33.7670, 72.7510);
      this.mapRef.current.animateToRegion(this.state.region, 1000);
    } else {
      this.setState({ pressCount: 0 });
      this.updateSchoolLoc(0, 0);
    }
  }

  routeLoc = () => {
    if (this.state.pressCount === 0) {
      this.setState({ pressCount: 1 });
      this.updateRoute();
      this.mapRef.current.animateToRegion(this.state.region, 1000);
    } else {
      this.setState({ pressCount: 0 });
      this.removeRoute();
    }
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          currentLocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
        });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          ref={this.mapRef}
          style={styles.map}
          // mapType={MAP_TYPES.SATELLITE}
          initialRegion={this.state.region}
          showsUserLocation={true}
        >
          <Polyline
            coordinates={this.state.route}
            strokeWidth={4}
            strokeColor="red"
          />
          {this.state.markers.map((marker, index) => (
            <Marker key={index} coordinate={marker} />
          ))}
          <Marker coordinate={this.state.coordinates} >
            <Image style={{ width: 50, height: 50 }} source={require('../../../assets/schoolMarker.webp')} />
          </Marker>
        </MapView>
        <View style={styles.buttonContainer}>

          <TouchableOpacity
            style={[styles.bubble, styles.button]}
            onPress={this.routeLoc}
          >
            <Text style={{ color: primaryLight, fontWeight: 'bold' }}>Routes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.bubble, styles.button]}
            onPress={this.studentLoc}
          >
            <Text style={{ color: primaryLight, fontWeight: 'bold' }}>Student</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.bubble, styles.button]}
            onPress={this.schoolLoc}
          >
            <Text style={{ color: primaryLight, fontWeight: 'bold' }}>School</Text>
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
    backgroundColor: 'rgba(255,255,255,0.5)',
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


