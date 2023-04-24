import React, { useState, useContext, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AuthContext } from '../../../navigation/authProvider';
import auth from '@react-native-firebase/auth';

const ProfileScreen = () => {
  const { user, logout } = useContext(AuthContext);
  const [selectedMenu, setSelectedMenu] = useState('route');
  const handleMenuPress = (menu: React.SetStateAction<string>) => {
    setSelectedMenu(menu);
  }
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const [userEmail, setUserEmail] = useState(null);

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
    <ScrollView style={styles.container}>
      <View style={styles.userInfo}>
        <TouchableOpacity onPress={toggleMenu}>
          <Text style={styles.username}>Username</Text>
        </TouchableOpacity>
        {showMenu && (
          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem}>
              <Text>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => logout()} style={styles.menuItem}>
              <Text>Logout</Text>
            </TouchableOpacity>
          </View>
        )}

        <Image source={{ uri: 'https://www.shareicon.net/data/128x128/2016/08/05/806962_user_512x512.png' }}
          style={styles.profileImage} />

        <Text style={styles.bio}>
          currently your status is driving.you are on route#1
        </Text>
        <Text style={styles.email}>Welcome, {userEmail}!</Text>
      </View>
    

      <View style={styles.vehicleinfo}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => handleMenuPress('route')}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10, paddingLeft: 40, backgroundColor: 'orange', padding: 10, color: selectedMenu === 'route' ? 'red' : 'black' }}>Route</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMenuPress('vehicle')}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10, backgroundColor: 'orange', padding: 10, color: selectedMenu === 'vehicle' ? 'red' : 'black' }}>Vehicle </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMenuPress('schools')}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10, backgroundColor: 'orange', padding: 10, color: selectedMenu === 'schools' ? 'red' : 'black' }}>Schools</Text>
          </TouchableOpacity>
        </View>
        {selectedMenu === 'route' &&

          <View style={{ margin: 10, paddingLeft: 30, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>Routes' Detail:   </Text>
            <Text style={{ fontSize: 15, paddingTop: 9, color: 'black' }}>Route 1: wah cantt</Text>
            <Text style={{ fontSize: 15, paddingTop: 7, color: 'black' }}>Route 2: Basti</Text>
            <Text style={{ fontSize: 15, paddingTop: 7, color: 'black' }}>Route 3: Taxila</Text>
          </View>

        }
        {selectedMenu === 'vehicle' && <View style={{ margin: 10, paddingLeft: 30, backgroundColor: 'white' }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>Vehicle detail:   </Text>
          <Text style={{ fontSize: 15, paddingTop: 9, color: 'black' }}>vehicle id :    059</Text>
          <Text style={{ fontSize: 15, paddingTop: 7, color: 'black' }}>Vehicle number :    HR-694</Text>
          <Text style={{ fontSize: 15, paddingTop: 7, color: 'black' }}>driving license# :    6594932</Text>
        </View>
        }

        {selectedMenu === 'schools' &&
          <View style={{ margin: 10, paddingLeft: 30, backgroundColor: 'white' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}> Schools' Detail:   </Text>
            <Text style={{ fontSize: 15, paddingTop: 2, color: 'black' }}> 1.WISE school and college</Text>
            <Text style={{ fontSize: 15, paddingTop: 2, color: 'black' }}>2. POF model high school</Text>
            <Text style={{ fontSize: 15, paddingTop: 2, color: 'black' }}>3. Roots international school, Gandhara campus</Text>
          </View>

        }
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    color: "black",
    backgroundColor: 'white',

  },
  profileImage: {
    backgroundColor: 'white',
    marginTop: 150,
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  userInfo: {
    backgroundColor: 'black',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    color: "black",
    marginTop: 20,
    alignItems: 'center',
  },
  vehicleinfo: {
    margin: 10,
    backgroundColor: 'pink',
    paddingTop: 10,
    marginBottom: 1000,

  },
  username: {
    color: "white",
    marginTop: 12,
    fontSize: 24,
    fontWeight: 'bold',
  },
  menu: {

    position: 'absolute',
    top: 40,
    right: 0,
    backgroundColor: 'orange',
    borderRadius: 5,
    padding: 10,
  },
  menuItem: {

    padding: 10,
  },
  bio: {
    color: "white",
    marginVertical: 10,
    textAlign: 'center',
    fontStyle: 'italic'
  },
  VehicleDetail:
  {
    color: "black",
    marginTop: 40,

  },
  email: {
    fontSize: 16,
    color: 'lightblue',
    paddingBottom: 20
  },
});

export default ProfileScreen;