import React, { useContext, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, Keyboard } from 'react-native';
import { primaryLight, secondary, whiteplus } from '../../../constants/colors';
import BorderInput from '../../../components/input/borderInput';
import Button from '../../../components/button/button';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../../../navigation/authProvider';

const DriverForm = () => {
  const navigation = useNavigation();

  const { user } = useContext(AuthContext);

  const [inputs, setInputs] = useState({
    fullname: '',
    phone: '',
    school: '',
    cnic: '',
  });
  const [errors, setErrors] = useState({});
  const [fullName, setFullName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [school, setSchool] = useState(null);
  const [cnic, setCnic] = useState(null);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.fullname) {
      handleError('Please input full name', 'fullname');
      isValid = false;
    }

    if (!inputs.phone) {
      handleError('Please input phone number', 'phone');
      isValid = false;
    }else if (inputs.phone.length !== 11) {
      handleError('Invalid Phone Number', 'phone');
      isValid = false;
    }else if (/[^0-9-]/.test(inputs.phone)) {
      handleError('Invalid Phone number. Special characters are not allowed', 'phone');
      isValid = false;
    }else if (!inputs.phone.startsWith('03')) {
      handleError('Invalid Phone number. First two digits should be "03"', 'phone');
      isValid = false;
    }

    if (!inputs.school) {
      handleError('Please input school', 'school');
      isValid = false;
    }
    if (!inputs.cnic) {
      handleError('Please input CNIC number', 'cnic');
      isValid = false;
    }else if (/[a-zA-Z]/.test(inputs.cnic)) {
      handleError('Invalid CNIC number. Alphabets are not allowed', 'cnic');
      isValid = false;
    }  
     else if (inputs.cnic.length !== 13) {
      handleError('Invalid CNIC number. CNIC should be 13 characters long', 'cnic');
      isValid = false;
    } else if (/[^0-9-]/.test(inputs.cnic)) {
      handleError('Invalid CNIC number. Special characters are not allowed', 'cnic');
      isValid = false;
    }

    if (isValid) {
      setFullName(inputs.fullname)
      setPhoneNumber(inputs.phone)
      setSchool(inputs.school)
      setCnic(inputs.cnic)
      submitData();

    }
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };


  const submitData = async () => {
    firestore()
      .collection('driverData')
      .add({
        driverId: user.uid,
        fullName: fullName,
        PhoneNumber: phoneNumber,
        school: school,
        CNIC: cnic,
      })
      .then(() => {
        console.log('Driver Personal data added!');
        // navigation.navigate('DriverRegistration');
        navigation.navigate('VehicleInfoScreen');
      })
      .catch((error) => {
        console.log('Something went wrong');
      });

  }

  return (
    <SafeAreaView style={{ backgroundColor: whiteplus, flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ paddingTop: 30, paddingHorizontal: 20 }}>
        <View style={{ alignItems: 'center' }} >
          <Image source={require('../../../assets/logo/greenLogo.png')}
            style={{ height: 45, width: 87, }} />
        </View>
        <Text style={{ color: secondary, fontSize: 28, fontWeight: 'bold' }}>
          Hey there!
        </Text>
        <Text style={{ color: primaryLight, fontSize: 18, marginVertical: 3 }}>
          Let's get to know you
        </Text>
        <View style={{ marginVertical: 10 }}>
          <BorderInput
            onChangeText={text => handleOnchange(text, 'fullname')}
            onFocus={() => handleError(null, 'fullname')}
            iconName="account-outline"
            label="Full Name"
            placeholder="Enter your full name"
            error={errors.fullname}
          />
          <BorderInput
            keyboardType="numeric"
            onChangeText={text => handleOnchange(text, 'phone')}
            onFocus={() => handleError(null, 'phone')}
            iconName="phone-outline"
            label="Phone Number"
            placeholder="Enter your phone number"
            error={errors.phone}
          />
          <BorderInput
            onChangeText={text => handleOnchange(text, 'school')}
            onFocus={() => handleError(null, 'school')}
            iconName="map-outline"
            label="School"
            placeholder="Enter School"
            error={errors.school}
          />

          <BorderInput
            keyboardType="numeric"
            onChangeText={text => handleOnchange(text, 'cnic')}
            onFocus={() => handleError(null, 'cnic')}
            iconName="id-card"
            label="CNIC"
            placeholder="e.g. 3640712345671"
            error={errors.cnic}
          />
          <Button label="Submit" onPress={validate} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DriverForm;