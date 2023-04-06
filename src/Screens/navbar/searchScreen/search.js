import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, TextInput, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';
import { grey } from '../../../constants/colors';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchText.length > 0) {
      searchFirestore();
    } else {
      setSearchResults([]);
    }
  }, [searchText]);

  const searchFirestore = async () => {
    const querySnapshot = await firestore().collection('routeData')
      .where('pickupArea', '>=', searchText)
      .where('pickupArea', '<=', searchText + '\uf8ff')
      .get();

    const results = querySnapshot.docs.map(doc => doc.data());
    setSearchResults(results);
  }
  return (
    <SafeAreaView>
      <View style={{ padding: "0.5%", margin: "3%", flexDirection: 'row', alignItems: "center", justifyContent: "space-between", borderColor: "grey", borderWidth: 2, borderRadius: 7 }}>
        <TextInput
          value={searchText}
          onChangeText={text => setSearchText(text)}
          placeholderTextColor={grey}
          placeholder='Enter your Pickup Location' />
        <Feather name="search" size={22} color={grey} />
      </View>
      {searchResults.length > 0 && (
        <View>
          {searchResults.map(result => (
            <TouchableOpacity style={styles.container}>
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
  container: {
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


  }
})