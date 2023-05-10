import { StyleSheet, Text, View,} from 'react-native'
import React from 'react'
import { primary, whiteplus } from '../../constants/colors'

const FullMessage = () => {
  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={require('../../assets/slider/bImg.jpg')}
        style={{ padding: 10, borderTopLeftRadius: 10, }}
        borderTopLeftRadius={10}
        borderTopRightRadius={10}> */}
      <Text style={styles.title}>How VFind works?</Text>
      <Text style={styles.text}>
      VFind is a solution to parents to create a safe and efficient school transportation system. We provide GPS tracking solutions to ensure student safety to and from their schools. VFind provides real-time location of the School Cab to parents.
      </Text>
      {/* </ImageBackground> */}
    </View>

  )
}

export default FullMessage

const styles = StyleSheet.create({
  container: {
    // backgroundColor: primary,
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: 'black',
    fontSize: 15,
    marginBottom: 10,
  },
  learnMore: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  }
})