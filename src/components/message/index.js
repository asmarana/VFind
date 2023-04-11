import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Message = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How VFind works?</Text>
      <Text style={styles.text}>
      VFind is a solution to parents to create a safe and efficient school transportation system. We provide GPS tracking solutions to ensure student safety to and from their schools. VFind provides real-time location of the School Cab to parents.
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1065e9',
        padding: 15,
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
        color: '#bed9ff',
        fontSize: 15,
        marginBottom: 10,
      },
      learnMore: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
      }
})