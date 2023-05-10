import React, { useState, useEffect } from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons'
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { grey, whiteplus, white, primary, secondary, secondaryLight } from '../../../constants/colors';

const Search = ({ searchResult, index }) => {
  const [searchSchool, setSearchSchool] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isRequested, setIsRequested] = useState(false);
  const [requestSent, setRequestSent] = useState(false);

  const navigation = useNavigation();



  const handleSendRequest = () => {
    setRequestSent(true);
  }

  const handleResetRequest = () => {
    setRequestSent(false);
  }


  useEffect(() => {
    if (searchSchool.length > 0) {
      searchFirestore();
    } else {
      setSearchResults([]);
    }
  }, [searchSchool]);

  const searchFirestore = async () => {
    setLoading(true);
    try {
      const querySnapshot = await firestore()
        .collection('driverData')
        .where('school', '>=', searchSchool)
        .where('school', '<=', searchSchool + '\uf8ff')
        .get();

      const results = querySnapshot.docs.map((doc) => doc.data());
      setSearchResults(results);
    } catch (e) {
      setError('Error fetching data. Please try again later.');
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <Feather name="search" size={20} color="#999" />
          <TextInput
            value={searchSchool}
            onChangeText={setSearchSchool}
            style={styles.textInput}
            placeholder="Search for school..."
            placeholderTextColor="#999"
          />
        </View>
      </View>

      {loading && <ActivityIndicator style={styles.loader} />}
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        searchResults.length > 0 && (
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.resultContainer}>
              {searchResults.map((result) => (
                <View style={styles.searchResultContainer}>
                  <TouchableOpacity key={result.driverId}
                    onPress={() => navigation.navigate('DriverProfile')}>
                    <View style={styles.searchResultItem}>
                      <Image style={styles.resultImage} source={{ uri: result.PhotoURL }} />
                      <View style={styles.resultTextContainer}>
                        <Text style={styles.resultTopText} >{result.fullName}</Text>
                        <Text style={styles.resultBottomText}>{result.school}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.messageButton}>
                      <Text style={styles.buttonText}>Message</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={requestSent ? styles.requestedButton : styles.sendRequestButton}
                      onPress={requestSent ? handleResetRequest : handleSendRequest}>
                      {requestSent ? (
                        <View style={styles.row}>
                          <Text style={styles.buttonText}>Request Sent</Text>
                          <Ionicons name="checkmark-sharp" size={20} color="white" style={styles.icon} />
                        </View>
                      ) : (
                        <Text style={styles.buttonText}>Send Request</Text>
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        )
      )}
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteplus,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    paddingHorizontal: 8,
    flex: 1,
    marginRight: 16,
  },
  textInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  loader: {
    marginTop: 50,
  },
  error: {
    marginTop: 50,
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },

  text: {
    color: 'black',
    fontSize: 16,
  },
  resultContainer: {
    flex: 1,
    backgroundColor: whiteplus,
  },

  searchResultContainer: {
    // backgroundColor: grey,
    padding: 10,
    borderRadius: 5,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    margin: 10,
    borderRadius: 5,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.84,
    elevation: 5,
  },
  searchResultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    borderRadius: 10,
    padding: 10,
  },
  resultImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
    backgroundColor: secondary,
  },
  resultTextContainer: {
    flex: 1,
  },
  resultTopText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "black"
  },
  resultBottomText: {
    fontSize: 16,
    color: '#808080',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messageButton: {
    backgroundColor: secondaryLight,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    marginRight: 10,
  },
  sendRequestButton: {
    backgroundColor: primary,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    marginLeft: 10,
  },
  // buttonText: {
  //   color: '#ffffff',
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  button: {
    backgroundColor: 'orange',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  requestedButton: {
    backgroundColor: 'green',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    marginLeft: 10
  },
  icon: {
    marginLeft: 5,
  },
  requestedText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});