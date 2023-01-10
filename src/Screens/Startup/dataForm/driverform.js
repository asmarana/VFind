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
    firstname: '',
    lastname: '',
    phone: '',
    cnic: '',
  });
  const [errors, setErrors] = useState({});
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [cnic, setCnic] = useState(null);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.firstname) {
      handleError('Please input first name', 'firstname');
      isValid = false;
    }
    if (!inputs.lastname) {
      handleError('Please input last name', 'lastname');
      isValid = false;
    }

    if (!inputs.phone) {
      handleError('Please input phone number', 'phone');
      isValid = false;
    }
    if (!inputs.cnic) {
      handleError('Please input CNIC number', 'cnic');
      isValid = false;
    }

    if (isValid) {
      navigation.navigate('VehicleInfoScreen');

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
        firstName: firstName,
        lastName: lastName,
        PhoneNumber: phoneNumber,
        CNIC: cnic,
      })
      .then(() => {
        console.log('Driver Personal data added!');
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
            // onChangeText={text => handleOnchange(text, 'firstname')}
            onChangeText={(content) => setFirstName(content)}
            onFocus={() => handleError(null, 'firstname')}
            iconName="account-outline"
            label="First Name"
            placeholder="Enter your first name"
            error={errors.firstname}
          />
          <BorderInput
            onChangeText={(content) => setLastName(content)}
            // onChangeText={text => handleOnchange(text, 'lastname')}
            onFocus={() => handleError(null, 'lastname')}
            iconName="account-outline"
            label="Last Name"
            placeholder="Enter your last name"
            error={errors.lastname}
          />
          <BorderInput
            keyboardType="numeric"
            onChangeText={(content) => setPhoneNumber(content)}
            // onChangeText={text => handleOnchange(text, 'phone')}
            onFocus={() => handleError(null, 'phone')}
            iconName="phone-outline"
            label="Phone Number"
            placeholder="Enter your phone number"
            error={errors.phone}
          />
          <BorderInput
            keyboardType="numeric"
            onChangeText={(content) => setCnic(content)}
            // onChangeText={text => handleOnchange(text, 'cnic')}
            onFocus={() => handleError(null, 'cnic')}
            iconName="id-card"
            label="CNIC"
            placeholder="Enter your CNIC"
            error={errors.cnic}
          />
          <Button label="Next" onPress={submitData} />
          {/* <Button label="Submit" onPress={} /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DriverForm;