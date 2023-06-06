import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { secondary, whiteplus } from '../../../constants/colors';
import CustomLoader from '../../../components/loader/customLoader';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import StudentsList from '../../../components/studentRequests/studentList';
import GradientButton from '../../../components/button/gradientButton';


const NotificationScreen = () => {

  const [userEmail, setUserEmail] = useState(null);
  const [studentsData, setStudentsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRequests = async () => {
    try {
      console.log("Get Request Function Called")
      setLoading(true);
      await firestore()
        .collection('driverRequest')
        .where('driverEmail', '==', userEmail)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            setStudentsData(data.students)
            console.log("Requests Data :", data)
          });
        })
    } catch (e) {
      console.log('Error fetching data. Please try again later.');
    } finally {
      setLoading(false);
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
    // const interval = setInterval(() => {
      getRequests()
    // }, 5000);

    console.log("notification Screen Clicked")
    return unsubscribe;
    // () => clearInterval(interval),
    
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Students Requests</Text>
      <GradientButton title={"Show Requests"} onPress={getRequests}/>
      {loading ? (
        <CustomLoader />
      ) : (
        <StudentsList data={studentsData} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: whiteplus
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: secondary
  },
});

export default NotificationScreen;
