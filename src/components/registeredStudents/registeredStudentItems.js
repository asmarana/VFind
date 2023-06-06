import React from 'react';
import { View, Text,StyleSheet, TouchableOpacity, } from 'react-native';
import { grey, secondary, white, } from '../../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const RegisteredStudentItem = ({ email, onReject }) => {
    const handleReject = () => {
      console.log(`Removed Email: ${email}`);
      onReject(email);
    };
  
    return (
      <View style={styles.studentsContainer}>
        <Text style={styles.studentName}>{email.split('@')[0]}</Text>
        <TouchableOpacity style={styles.removeButton} onPress={handleReject}>
          <MaterialIcons name="clear" size={18} color={grey} />
        </TouchableOpacity>
      </View>
    );
  };

export default RegisteredStudentItem;

const styles = StyleSheet.create({
    studentsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        borderBottomWidth: 0.3,
        borderColor: grey,

    },
    studentName: {
        flex: 1,
        fontSize: 18,
        color: secondary
    },
    removeButton: {
        padding: 10,
        borderRadius: 30,
    },
    buttonText: {
        color: white,
        fontWeight: 'bold',
    },
});