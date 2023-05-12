import React, { useContext, useState, useEffect } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { primary, secondary, secondaryLight } from '../../constants/colors';
import { AuthContext } from '../../navigation/authProvider';
import auth from '@react-native-firebase/auth';

const CustomDrawer = props => {
  const {logout } = useContext(AuthContext);
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
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: primary }}>
        <ImageBackground
          source={require('../../assets/menu.png')}
          style={{ padding: 20 }}>
          <Image
            source={require('../../assets/img3.jpg')}
            style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
          />
          <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Roboto-Medium', marginBottom: 5, }}>Welcome</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: '#fff', fontFamily: 'Roboto-Regular', marginRight: 5, }}>{userEmail}</Text>
            <FontAwesome5 name="search-location" size={14} color="#fff" />
          </View>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
        <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="share-social-outline" size={22} color={secondary} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
                color:secondary
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => logout()} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="exit-outline" size={22} color={secondary}/>
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
                color:secondary
              }}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;