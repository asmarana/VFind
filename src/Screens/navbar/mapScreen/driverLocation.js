import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';

const DriverLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      error => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    return () => {
      Geolocation.clearWatch(watchId);
    };
  }, []);

  return (
    <View>
      <Text>driverLocation</Text>
      <MapView style={{ flex: 1 }} initialRegion={{ ...location, latitudeDelta: 0.01, longitudeDelta: 0.01 }}>
        {location && <Marker coordinate={location} />}
      </MapView>
    </View>
  )
}

export default DriverLocation;