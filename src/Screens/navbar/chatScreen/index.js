import React from 'react';
import { View, StyleSheet, Text,Image } from 'react-native';
import { secondary, whiteplus } from '../../../constants/colors';
const Card = ({ image, title, subtitle }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};



const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Card
        image={require('../../../assets/imgg.jpg')}
        title="Sara Ahmed"
        subtitle="What will be the new timmimg"
      />
            <Card
        image={require('../../../assets/imgg.jpg')}
        title="Sara Ahmed"
        subtitle="What will be the new timmimg"
      />
            <Card
        image={require('../../../assets/imgg.jpg')}
        title="Sara Ahmed"
        subtitle="What will be the new timmimg"
      />
            <Card
        image={require('../../../assets/imgg.jpg')}
        title="Sara Ahmed"
        subtitle="What will be the new timmimg"
      />
            <Card
        image={require('../../../assets/imgg.jpg')}
        title="Sara Ahmed"
        subtitle="What will be the new timmimg"
      />
            <Card
        image={require('../../../assets/imgg.jpg')}
        title="Sara Ahmed"
        subtitle="What will be the new timmimg"
      />
            <Card
        image={require('../../../assets/imgg.jpg')}
        title="Sara Ahmed"
        subtitle="What will be the new timmimg"
      />
                  <Card
        image={require('../../../assets/imgg.jpg')}
        title="Sara Ahmed"
        subtitle="What will be the new timmimg"
      />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: whiteplus,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:1,
  },
  text: {
    fontSize: 20,
    color: secondary,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 4,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    margin: 1,
  },
  image: {
    width: 50,
    height: 50,
    // borderTopLeftRadius: 10,
    // borderBottomLeftRadius: 10,
    borderRadius : 50,

  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'black'
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
  },
});