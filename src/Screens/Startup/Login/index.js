import React, { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { View, Text, SafeAreaView, Keyboard, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { primaryLight, secondary, secondaryLight, whiteplus } from '../../../constants/colors';
// import Loader from '../../../components/loader/loader';
import Button from '../../../components/button/button';
import BorderInput from '../../../components/input/borderInput';
import { AuthContext } from '../../../navigation/authProvider';
import Logo from '../../../components/logo';
import Background from '../../../components/background';
import CustomLoader from '../../../components/loader/customLoader';

const LoginScreen = ({ }) => {
  const navigation = useNavigation();

  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [inputs, setInputs] = React.useState({ email: '', password: '' });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const { login, googleLogin } = useContext(AuthContext);

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length <= 5) {
      handleError('Minimum password length should be 6', 'password');
      isValid = false;
    }
    if (isValid) {
      login(inputs.email, inputs.password , setLoading);
    }
  };


  const handleOnchange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };
  return (
    <Background>
    <SafeAreaView style={{flex: 1 }}>
      {/* <Loader visible={loading} /> */}
      <View style={{ marginTop: '10%' }}>
        <Logo />
      </View>
      <View style={{ paddingHorizontal: "1%" }}>
        <Text style={{ color: secondary, fontSize: 40, fontWeight: 'bold' }}>
          Log In
        </Text>
        <Text style={{ color: primaryLight, fontSize: 18, marginVertical: 10 }}>
          Enter Your Details to Login
        </Text>
        <View style={{ marginVertical:"3%" }}>
          <BorderInput
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            error={errors.email}
            label="Email"
            // onChangeText={(userEmail) => setEmail(userEmail)}
            placeholder="Enter your email"
            iconName="email-outline"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <BorderInput
            // onChangeText={(userPassword) => setPassword(userPassword)}
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          />
          <Button label=" Log in" onPress={validate} />
          {loading && <CustomLoader />}
          <View style={styles.lineContainer}>
            <View style={styles.line} />
            <Text style={styles.orLoginWithText}>Or Login With</Text>
            <View style={styles.line} />
          </View>
          <View style={{ flexDirection: 'row' , alignItems:'center', justifyContent:'center'}}>
            <TouchableOpacity
              onPress={() => googleLogin()}
              style={{
                backgroundColor: '#4d9dff',
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 2.9,
                marginRight: 10,
              }}
            >
              <Icon name="google" color="#fff" size={20} style={{ marginRight: 10 }} />
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Login with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#82ca9d',
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 2.9,
              }}
            >
              <Icon name="phone" color="#fff" size={20} style={{ marginRight: 10 }} />
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Login with Phone</Text>
            </TouchableOpacity>
          </View>
          <Text
            onPress={() => navigation.navigate('SignupScreen')}
            style={{
              color: secondary,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
              marginTop: 30,
            }}>
            Don't have account ?Register
          </Text>
        </View>
      </View>
    </SafeAreaView>
    </Background>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom:10,
  },
  line: {
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flex: 1,
  },
  orLoginWithText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: secondaryLight
  },

});