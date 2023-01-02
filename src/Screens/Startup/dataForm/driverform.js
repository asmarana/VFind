import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import Input from '../../../components/input/formInput';
import FormButton from '../../../components/button/button';
import { primary } from '../../../constants/colors';
// import { useNavigation } from '@react-navigation/native';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor:primary,
    paddingVertical: 17,
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 10,
  },
  bottomButton: {
    marginVertical: 24,
  }
};

const DriverForm = () => {
//   const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, alignSelf: "center" }}>
          <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'black', textAlign: "center" }}>Hey there! Let's get to know you</Text>
        </View>
        <Input label={'First Name'} placeholderText={'Ali'} />
        <Input label={'Last Name'} placeholderText={'Ahmed'} />
        <Input label={'Phone Number'} placeholderText={'0312 3456789'} />
        <Input label={'CNIC'} placeholderText={'315718717251725'} />
        <View style={{ paddingHorizontal: 34 }}>
          <View style={[styles.bottomButton]}>
            <FormButton label = 'Next'/>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DriverForm;