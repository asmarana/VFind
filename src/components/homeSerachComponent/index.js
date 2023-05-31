import React from "react";
import { View, Text, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather"
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from '@react-navigation/native';
import { primary, primaryLight, secondaryLight,grey } from "../../constants/colors";

const HomeSearch = () => {
  const navigation = useNavigation();
  return (
    <View>
      {/*  Input Box */}
      <Pressable onPress={() => navigation.navigate("Search")} style={styles.inputBox}>
        <Text style={styles.inputText}>Search</Text>

        <View style={styles.timeContainer}>
          <AntDesign name={'search1'} size={16} color={'#535353'} />
        </View>
      </Pressable>

      {/* School destination */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={'clockcircle'} size={20} color={'#ffffff'} />
        </View>
        <Text  onPress={() => navigation.navigate("FinderLocationSearch")} style={styles.destinationText}>School</Text>
        
      </View>

      {/* Home destination */}
      <View style={styles.row}>
        <View style={[styles.iconContainer, { backgroundColor: '#218cff' }]}>
          <Entypo name={'home'} size={20} color={'#ffffff'} />
        </View>
        <Text onPress={() => navigation.navigate("FinderLocationSearch")}  style={styles.destinationText}>Home</Text>
      </View>
    </View>
  )
}

export default HomeSearch

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#e7e7e7',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#434343',
  },
  timeContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    width: 38,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 80
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
  },
  iconContainer: {
    backgroundColor: '#b3b3b3',
    padding: 10,
    borderRadius: 25,
  },
  destinationText: {
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 16,
    color: '#535353'
  },
  buttonContainer: {
    backgroundColor: grey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
    height: 40,
  },
  buttonIcon: {
    marginHorizontal: 10,
  },
  buttonText: {
    color:secondaryLight,
    fontSize: 18,
    fontWeight: 'bold',
  },
})