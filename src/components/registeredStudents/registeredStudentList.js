import React, { useState, useEffect } from 'react';
import {FlatList } from 'react-native';
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/firestore';
import RegisteredStudentItem from './registeredStudentItems';

const RegisteredStudentList = ({ data }) => {
    const [students, setStudents] = useState(data);
  
    const handleReject = (email) => {
      setStudents(students.filter((student) => student.email !== email));
      removeStudent(email);
    };

    const removeStudent = async (driverEmail, studentId, studentEmail) => {
        try {
            const collectionRef = firebase.firestore().collection('RegisteredStudents');
            const querySnapshot = await collectionRef.where('driverEmail', '==', driverEmail).get();

            if (!querySnapshot.empty) {
                const documentRef = querySnapshot.docs[0].ref;

                const documentSnapshot = await documentRef.get();
                const data = documentSnapshot.data();

                const updatedStudents = data.students.filter(student => student.id !== studentId && student.email !== studentEmail);

                await documentRef.update({ students: updatedStudents });
                console.log('Student data deleted successfully.');
            } else {
                console.log('No document found for the given driver email.');
            }
        } catch (error) {
            console.error('Error deleting student data:', error);
        }
    };


    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(user => {
            if (user) {
                setUserEmail(user.email);
            } else {
                setUserEmail(null);
            }
        });
        return unsubscribe;
    }, []);


    return (
        <FlatList
          data={students}
          keyExtractor={(item) => item.email}
          renderItem={({ item }) => (
            <RegisteredStudentItem email={item.email} onReject={handleReject} />
          )}
        />
      );
};

export default RegisteredStudentList;