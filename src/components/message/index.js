import { ImageBackground, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { primary, whiteplus } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';

const Message = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/menu.png')}
        style = {{padding:15}}>
      <Text style={styles.title}>How VFind works?</Text>
      <Text style={styles.text}>
      VFind is a solution to parents to create a safe and efficient school transportation system. We provide GPS tracking solutions to ensure student safety to and from their schools. VFind provides real-time location of the School Cab to parents.
      </Text>
      <Text style={styles.learnMore} onPress={() => navigation.navigate("AboutScreen")}>Learn more</Text>
      </ImageBackground>
    </View>

  )
}

export default Message

const styles = StyleSheet.create({
  container: {
    backgroundColor: primary,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: whiteplus,
    fontSize: 15,
    marginBottom: 10,
  },
  learnMore: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  }
})