import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { primary, secondary, whiteplus } from '../../../constants/colors';
import Icon from 'react-native-vector-icons/Feather';

const Card = ({ image, title, subtitle }) => {
  return (
    <View style={styles.card}>
      <Icon style={styles.card}
        name={'bell'}
      />
      <View style={styles.textContainer}>
        <Icon/>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};


const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Card
        title="New Request"
        subtitle="Ali Ahmed requested for a ride"
      />
            <Card
        title="New Request"
        subtitle="Ali Ahmed requested for a ride"
      />
            <Card
        title="New Request"
        subtitle="Ali Ahmed requested for a ride"
      />
            <Card
        title="New Request"
        subtitle="Ali Ahmed requested for a ride"
      />
            <Card
        title="New Request"
        subtitle="Ali Ahmed requested for a ride"
      />
            <Card
        title="New Request"
        subtitle="Ali Ahmed requested for a ride"
      />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: whiteplus,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
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
  icon: {
    width: 50,
    height: 50,
    color: primary, fontSize: 22,
    // borderTopLeftRadius: 10,
    // borderBottomLeftRadius: 10,
    borderRadius: 50,

  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black'
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
  },
});