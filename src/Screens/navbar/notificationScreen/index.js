// import React from 'react';
// import { View, StyleSheet, Text, Image } from 'react-native';
// import { primary, secondary, whiteplus } from '../../../constants/colors';
// import Icon from 'react-native-vector-icons/Feather';

// const Card = ({ image, title, subtitle }) => {
//   return (
//     <View style={styles.card}>
//       <Icon style={styles.card}
//         name={'bell'}
//       />
//       <View style={styles.textContainer}>
//         <Icon/>
//         <Text style={styles.title}>{title}</Text>
//         <Text style={styles.subtitle}>{subtitle}</Text>
//       </View>
//     </View>
//   );
// };


// const NotificationScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Card
//         title="New Request"
//         subtitle="Ali Ahmed requested for a ride"
//       />
//             <Card
//         title="New Request"
//         subtitle="Ali Ahmed requested for a ride"
//       />
//             <Card
//         title="New Request"
//         subtitle="Ali Ahmed requested for a ride"
//       />
//             <Card
//         title="New Request"
//         subtitle="Ali Ahmed requested for a ride"
//       />
//             <Card
//         title="New Request"
//         subtitle="Ali Ahmed requested for a ride"
//       />
//             <Card
//         title="New Request"
//         subtitle="Ali Ahmed requested for a ride"
//       />
//     </View>
//   );
// };

// export default NotificationScreen;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: whiteplus,
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 1,
//   },
//   text: {
//     fontSize: 20,
//     color: secondary,
//   },
//   card: {
//     flexDirection: 'row',
//     backgroundColor: '#ffffff',
//     borderRadius: 4,
//     shadowColor: '#000000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 1,
//     margin: 1,
//   },
//   icon: {
//     width: 50,
//     height: 50,
//     color: primary, fontSize: 22,
//     // borderTopLeftRadius: 10,
//     // borderBottomLeftRadius: 10,
//     borderRadius: 50,

//   },
//   textContainer: {
//     flex: 1,
//     padding: 10,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     color: 'black'
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666666',
//   },
// });



import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { grey, primary, secondary, white, whiteplus } from '../../../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NotificationScreen = () => {
  const [requests, setRequests] = useState([
    { id: 1, name: 'Umer Khan' },
    { id: 2, name: 'Abdullah ' },
    { id: 3, name: 'Ahmed Sajjad' },
  ]);

  const handleAccept = (id) => {
    setRequests(requests.filter(request => request.id !== id));
    // Call API to accept request with ID 'id'
  }

  const handleDecline = (id) => {
    setRequests(requests.filter(request => request.id !== id));
    // Call API to decline request with ID 'id'
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Students Requests</Text>
      {requests.map(request => (
        <View key={request.id} style={styles.requestContainer}>
          <Text style={styles.requestName}>{request.name}</Text>
          <TouchableOpacity
            style={[styles.requestButton, styles.acceptButton]}
            onPress={() => handleAccept(request.id)}
          >
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.declineButton}
            onPress={() => handleDecline(request.id)}
          >
            <MaterialIcons name="clear" size={22} color={grey} />
          </TouchableOpacity>
        </View>
      ))}
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
    color:secondary
  },
  requestContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: white,
    padding: 10,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderColor: grey,

  },
  requestName: {
    flex: 1,
    fontSize: 18,
    color: secondary
  },
  requestButton: {
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginLeft: 10,
  },
  acceptButton: {
    backgroundColor: primary,
  },
  declineButton: {
    // backgroundColor: 'red',
    padding: 10,
    borderRadius: 30,
  },
  buttonText: {
    color: white,
    fontWeight: 'bold',
  },
});

export default NotificationScreen;
