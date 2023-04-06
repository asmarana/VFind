import React, { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { View, Text, SafeAreaView, Keyboard, Alert } from 'react-native';
import Lottie from 'lottie-react-native';
import { primaryLight, secondary, whiteplus } from '../../../constants/colors';
import Loader from '../../../components/loader/loader';
import Button from '../../../components/button/button';
import BorderInput from '../../../components/input/borderInput';
import { AuthContext } from '../../../navigation/authProvider';

const LoginScreen = ({ }) => {
  const navigation = useNavigation();

  const [email, setEmail] = React.useState();
  const [password,setPassword] = React.useState();
  const [inputs, setInputs] = React.useState({ email: '', password: '' });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const {login} = useContext(AuthContext);

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    }else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
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
      login(inputs.email,inputs.password);
    }
  };


  const handleOnchange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };
  return (
    <SafeAreaView style={{ backgroundColor: whiteplus, flex: 1 }}>
      <Loader visible={loading} />
      <View style={{ paddingTop: 120, paddingHorizontal: 20 }}>
        <Text style={{ color: secondary, fontSize: 40, fontWeight: 'bold' }}>
          Log In
        </Text>
        <Text style={{color:primaryLight, fontSize: 18, marginVertical: 10}}>
          Enter Your Details to Login
        </Text>
        <View style={{ marginVertical: 20 }}>
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
          <Text
            onPress={() => navigation.navigate('SignupScreen')}
            style={{
              color: secondary,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Don't have account ?Register
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;