import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/firestore';
import StudentItem from './studentItem';

const StudentList = ({ data }) => {
    const [userEmail, setUserEmail] = useState(null);
    const [students, setStudents] = useState(data);

    const handleAccept = async (id, email) => {
        setStudents(students.filter((student) => student.id !== id));
        RegisteredStudent(userEmail, id, email);
        console.log("driverEmail:", userEmail, "id:", id, "email:", email)
        removeStudent(userEmail, id, email);
    };

    const handleReject = async (id, email) => {
        setStudents(students.filter((student) => student.id !== id));
        removeStudent(userEmail, id, email);
    };


    const RegisteredStudent = (driverEmail, studentId, studentEmail) => {
        const RegisteredStudentsRef = firestore().collection('RegisteredStudents').doc(driverEmail);

        RegisteredStudentsRef
            .get()
            .then((doc) => {
                if (doc.exists) {
                    const existingData = doc.data();
                    const students = existingData.students || [];

                    const isDuplicate = students.some((student) => student.id === studentId);

                    if (isDuplicate) {
                        console.log('StudentId already exists in the driver request.');
                    } else {
                        students.push({ id: studentId, email: studentEmail });

                        RegisteredStudentsRef
                            .update({
                                students: students,
                            })
                            .then(() => {
                                console.log('Registered Student data updated!');
                            })
                            .catch((error) => {
                                console.log('Something went wrong', error);
                            });
                    }
                } else {
                    RegisteredStudentsRef
                        .set({
                            driverEmail: driverEmail,
                            students: [{ id: studentId, email: studentEmail }],
                        })
                        .then(() => {
                            console.log('Driver request data added!');
                        })
                        .catch((error) => {
                            console.log('Something went wrong', error);
                        });
                }
            })
            .catch((error) => {
                console.log('Something went wrong', error);
            });
    };

    const removeStudent = async (driverEmail, studentId, studentEmail) => {
        try {
            const collectionRef = firebase.firestore().collection('driverRequest');
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
        <View>
            {students.map((student) => (
                <StudentItem
                    key={student.id}
                    email={student.email}
                    id={student.id}
                    onAccept={(id, email) => handleAccept(student.id, student.email)}
                    // onAccept={handleAccept}
                    onReject={handleReject}
                />
            ))}
        </View>
    );
};

export default StudentList;