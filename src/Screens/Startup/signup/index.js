import React, { useContext, useState } from 'react';
import { View, Text, SafeAreaView, Keyboard, ScrollView, Alert, StyleSheet ,TouchableOpacity} from 'react-native';
import Button from '../../../components/button/button';
import BorderInput from '../../../components/input/borderInput';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Lottie from 'lottie-react-native';
// import Loader from '../../../components/loader/loader';
import { secondary, primaryLight, whiteplus, secondaryLight } from '../../../constants/colors';
import { AuthContext } from '../../../navigation/authProvider';
import Logo from '../../../components/logo';
import Background from '../../../components/background';
import CustomLoader from '../../../components/loader/customLoader';

const SignupScreen = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({
    email: '',
    // fullname: '',
    // phone: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState();
  const [password, setPassword] = useState();

  const { register , googleLogin } = useContext(AuthContext);

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
      register(inputs.email, inputs.password,setLoading)
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
      <ScrollView
        contentContainerStyle={{ paddingTop: "1%", paddingHorizontal: 0 }}>
          <View style = {{marginTop:30}}>
          <Logo/>
          </View>
          {/* <Lottie source={require('../../../assets/schoolBus1.json')} autoPlay speed={1} style={{ width: 150, height: 150 }} /> */}
        <Text style={{ color: secondary, fontSize: 40, fontWeight: 'bold' }}>
          Signup
        </Text>
        <Text style={{ color: primaryLight, fontSize: 18, marginVertical: 10 }}>
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
          {loading && <CustomLoader/>}
          <View style={styles.lineContainer}>
            <View style={styles.line} />
            <Text style={styles.orLoginWithText}>Or Signup With</Text>
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
                paddingHorizontal: 12,
                borderRadius: 3,
                marginRight: 10,
              }}
            >
              <Icon name="google" color="#fff" size={20} style={{ marginRight: 10 }} />
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Signup with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#82ca9d',
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 12,
                borderRadius: 3,
              }}
            >
              <Icon name="phone" color="#fff" size={20} style={{ marginRight: 10 }} />
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Signup with Phone</Text>
            </TouchableOpacity>
          </View>
          <Text
            onPress={() => navigation.navigate('LoginScreen')}
            style={{
              color: secondary,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
              marginTop : 20,
            }}>
            Already have account ?Login
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
    </Background>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
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