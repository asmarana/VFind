import React, { useContext, useState } from 'react';
import { View, Text, SafeAreaView, Keyboard, ScrollView, Alert } from 'react-native';
import Button from '../../../components/button/button';
import BorderInput from '../../../components/input/borderInput';
import Loader from '../../../components/loader/loader';
import { secondary,primaryLight, whiteplus } from '../../../constants/colors';
import {AuthContext} from '../../../navigation/authProvider';

const SignupScreen = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({
    email: '',
    fullname: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState();
  const [password,setPassword] = useState();

  const {register} = useContext(AuthContext);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }

    if (!inputs.fullname) {
      handleError('Please input fullname', 'fullname');
      isValid = false;
    }

    if (!inputs.phone) {
      handleError('Please input phone number', 'phone');
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
      setEmail(inputs.email)
      setPassword(inputs.password)
      register(inputs.email, inputs.password)
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
      <ScrollView
        contentContainerStyle={{ paddingTop: 20, paddingHorizontal: 20 }}>
        <Text style={{ color: secondary, fontSize: 40, fontWeight: 'bold' }}>
          Signup
        </Text>
        <Text style={{ color:primaryLight, fontSize: 18, marginVertical: 10 }}>
          Enter Your Details to create an account
        </Text>
        <View style={{ marginVertical: 20 }}>
          <BorderInput
            onChangeText={text => handleOnchange(text, 'email')}
            // onChangeText={(userEmail) => setEmail(userEmail)}
            onFocus={() => handleError(null, 'email')}
            // iconName="email-outline"
            // label="Email"
            // placeholder="Enter your email address"
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
            onChangeText={text => handleOnchange(text, 'fullname')}
            onFocus={() => handleError(null, 'fullname')}
            iconName="account-outline"
            label="Full Name"
            placeholder="Enter your full name"s
            error={errors.fullname}
          />

          <BorderInput
            keyboardType="numeric"
            onChangeText={text => handleOnchange(text, 'phone')}
            onFocus={() => handleError(null, 'phone')}
            iconName="phone-outline"
            label="Phone Number"
            placeholder="Enter your phone no"
            error={errors.phone}
          />
          <BorderInput
            onChangeText={text => handleOnchange(text, 'password')}
            // onChangeText={(userPassword) => setPassword(userPassword)}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          />
          <Button label="Signup" onPress={validate} />
          <Text
            onPress={() => navigation.navigate('LoginScreen')}
            style={{
              color: secondary,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Already have account ?Login
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;