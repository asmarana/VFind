import React, { useContext, useState } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../../navigation/authProvider';

const Menu = () => {
  const {logout } = useContext(AuthContext);

  const [showMenu, setShowMenu] = useState(false);

  const handleMenuPress = () => {
    setShowMenu(!showMenu);
  };

  const handleOption1Press = () => {
    // handle option 1 press logic here
  };

  const handleOption2Press = () => {
    // handle option 2 press logic here
  };

  const handleOption3Press = () => {
    // handle option 3 press logic here
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleMenuPress}>
        <MaterialIcons name="menu" size={24} color="white" />
      </TouchableOpacity>
      {showMenu && (
        <View style={styles.menu}>
          {/* <TouchableOpacity onPress={handleOption1Press}>
            <View style={styles.menuItem}>
              <MaterialIcons name="settings" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption2Press}>
            <View style={styles.menuItem}>
              <MaterialIcons name="help" size={24} color="black" />
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity onPress={() => logout()}>
            <View style={styles.menuItem}>
              <MaterialIcons name="logout" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 16,
  },
  menu: {
    position: 'absolute',
    top: 50,
    right: 0,
    height:100,
    width: 60,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    color:"black"
  },
});

export default Menu;