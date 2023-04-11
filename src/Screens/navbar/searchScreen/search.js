import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, TextInput, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';
import { grey, whiteplus } from '../../../constants/colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Search = () => {
  const [searchSchool, setSearchSchool] = useState('');
  const [searchHome, setSearchHome] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchSchool.length > 0) {
      searchFirestore();
    } else {
      setSearchResults([]);
    }
  }, [searchSchool]);

  const searchFirestore = async () => {
    const querySnapshot = await firestore().collection('routeData')
      .where('pickupArea', '>=', searchSchool)
      .where('pickupArea', '<=', searchSchool + '\uf8ff')
      .get();

    const results = querySnapshot.docs.map(doc => doc.data());
    setSearchResults(results);
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          value={searchSchool}
          onChangeText={text => setSearchSchool(text)}
          style={styles.textInput}
          placeholder='School'
          placeholderTextColor="#999" />
        <TextInput
          value={searchHome}
          onChangeText={text => setSearchHome(text)}
          style={styles.textInput}
          placeholder='Home'
          placeholderTextColor="#999" />

        {/* <GooglePlacesAutocomplete
          placeholder='Search'
          placeholderTextColor="#999"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyB1KoK7KQe0YzwScTNjC&lHRSi7my056bk',
            language: 'en',
          }}
        /> */}
      </View>
      {searchResults.length > 0 && (
        <View>
          {searchResults.map(result => (
            <TouchableOpacity style={styles.results}>
              <Image style={styles.image} key={result.driverId} uri={{ uri: result.PhotoURL }} />
              <Text style={styles.text} key={result.driverId}>{result.route}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </SafeAreaView>
  )
}

export default Search;

const styles = StyleSheet.create({
  results: {
    // flex: 1,
    flexDirection: "row",
    backgroundColor: 'white',
    padding: 10,
    alignItems: "center"
  },
  image: {
    backgroundColor: "gray",
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  text: {
    color: 'black',
    // flex: 1,
    fontSize: 16,
  },
  container: {
    padding: "1%",
  },
  textInput: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
    marginLeft: 20,
    color: 'black',

  },

  separator: {
    backgroundColor: '#efefef',
    height: 1,
  },
  listView: {
    position: 'absolute',
    top: 105,
  },
  autocompleteContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor: '#a2a2a2',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: {

  },

  circle: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 20,
    left: 15,
    borderRadius: 5,
  },
  line: {
    width: 1,
    height: 50,
    backgroundColor: '#c4c4c4',
    position: 'absolute',
    top: 28,
    left: 17,
  },
  square: {
    width: 5,
    height: 5,
    backgroundColor: 'black',
    position: 'absolute',
    top: 80,
    left: 15,
  },
})