import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { lightPrimary, primary, whiteplus } from '../../../constants/colors';

const GetStarted = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={[lightPrimary,primary]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.content}>
        <Image source={require('../../../assets/startup/schoolBus.webp')} style={styles.img} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignupScreen')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Already have an account?{' '}
          <Text style={styles.loginText} onPress={() => navigation.navigate('LoginScreen')}>Login</Text>
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '36%',
    marginTop:'44%',
    marginBottom:'40%',
  },
  button: {
    backgroundColor: whiteplus,
    paddingVertical: '4.3%',
    paddingHorizontal: '25%',
    borderRadius:30,
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f4730b',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  loginText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default GetStarted;