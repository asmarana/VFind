import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Button from '../../../components/button/button';
import { secondary, whiteplus } from '../../../constants/colors';
import { AuthContext } from '../../../navigation/authProvider';

const ProfileScreen = () => {
  const {user , logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Hey {user.uid} </Text>
      <Button label="Log out" onPress={() => logout()}/> 
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: whiteplus,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    color:secondary,
  }
})