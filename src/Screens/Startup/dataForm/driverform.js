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
      setFirstName(inputs.firstname)
      setLastName(inputs.lastname)
      setPhoneNumber(inputs.phone)
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
            onChangeText={text => handleOnchange(text, 'firstname')}
            onFocus={() => handleError(null, 'firstname')}
            iconName="account-outline"
            label="First Name"
            placeholder="Enter your first name"
            error={errors.firstname}
          />
          <BorderInput
            onChangeText={text => handleOnchange(text, 'lastname')}
            onFocus={() => handleError(null, 'lastname')}
            iconName="account-outline"
            label="Last Name"
            placeholder="Enter your last name"
            error={errors.lastname}
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
            keyboardType="numeric"
            onChangeText={text => handleOnchange(text, 'cnic')}
            onFocus={() => handleError(null, 'cnic')}
            iconName="id-card"
            label="CNIC"
            placeholder="Enter your CNIC"
            error={errors.cnic}
          />
          <Button label="Submit" onPress={validate} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DriverForm;


// import React from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { primary } from '../../../constants/colors';

// const Button = ({ title, onPress }) => (
//   <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
//     <View style={styles.button}>
//       <Text style={styles.buttonText}>{title}</Text>
//       <View style={styles.arrow} />
//     </View>
//   </TouchableOpacity>
// );

// const DriverForm= () => (
//   <View style={styles.container}>
//      <Text style={styles.text}>Driver Registration</Text>
//      <Text style={styles.text}>اپنے آپ کو رجسٹر کروائیں</Text>
//     <Button title="Basic Info" onPress={() => console.log("Button 1 pressed")} />
//     <Button title="CNIC" onPress={() => console.log("Button 2 pressed")} />
//     <Button title="License" onPress={() => console.log("Button 3 pressed")} />
//     <Button title="Vehicle" onPress={() => console.log("Button 4 pressed")} />
//     <TouchableOpacity style={styles.doneButton} onPress={() => console.log("Done pressed")}>
//       <Text style={styles.doneButtonText}>Done</Text>
//     </TouchableOpacity>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonContainer: {
//     marginVertical: 10,
//     width: '80%',
//   },
//   button: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//     backgroundColor: 'gray',
//     borderRadius: 10,
//   },
//   buttonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   arrow: {
//     width: 10,
//     height: 10,
//     borderTopWidth: 2,
//     borderRightWidth: 2,
//     borderColor: '#fff',
//     transform: [{ rotate: '45deg' }],
//   },
//   doneButton: {
//     marginTop: 20,
//     padding: 15,
//     backgroundColor: primary,
//     borderRadius: 5,
//     width:200,
//     alignItems:'center',
//     justifyContent:"center"

//   },
//   doneButtonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//   },
// });

// export default DriverForm;