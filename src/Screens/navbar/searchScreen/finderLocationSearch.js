import React, { useContext, useState, useEffect } from 'react';
import { View, TextInput, ActivityIndicator, StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import { black, grey } from '../../../constants/colors';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../../../navigation/authProvider';

const FinderLocationSearch = () => {

    const { user } = useContext(AuthContext);

    const [location, setLocation] = useState('');
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const debounceTimeout = setTimeout(handleSearch, 3000);
        return () => clearTimeout(debounceTimeout);
    }, [location]);

    const handleSearch = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(
                `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
                    location
                )}&key=afa29dc1ab104fd1accd2929cfceb4c5`
            );
            const data = await response.json();

            if (data.results.length > 0) {
                const { lat, lng } = data.results[0].geometry;
                setLatitude(lat);
                setLongitude(lng);
                const userId = user.uid;
                await firestore().collection('StudentAddress').doc(userId).set({
                    latitude,
                    longitude,
                });
            } else {
                Alert.alert('Location not found');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleRegionChange = (region) => {
        setLatitude(region.latitude);
        setLongitude(region.longitude);
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Icon name="search" size={20} color="#333" style={styles.searchIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter location name"
                    placeholderTextColor={grey}
                    value={location}
                    onChangeText={(text) => setLocation(text)}
                />
                {isLoading && <ActivityIndicator size="small" color="#333" />}
            </View>
            {latitude && longitude && (
                <MapView
                    style={styles.map}
                    region={{
                        latitude,
                        longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    onRegionChange={handleRegionChange}
                >
                    <Marker coordinate={{ latitude, longitude }} />
                </MapView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginVertical: 16,
    },
    searchIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 4,
        paddingLeft: 10,
        color: black,
    },
    map: {
        flex: 1,
    },
});

export default FinderLocationSearch;
