// import React, { useState, useContext, useEffect} from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
// import { AuthContext } from '../../../navigation/authProvider';
// import auth from '@react-native-firebase/auth';

// const ProfileScreen = () => {
 
//   const [selectedMenu, setSelectedMenu] = useState('route');
//   const handleMenuPress = (menu: React.SetStateAction<string>) => {
//     setSelectedMenu(menu);
//   }
//   const [showMenu, setShowMenu] = useState(false);
//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };
//   const [userEmail, setUserEmail] = useState(null);




//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.userInfo}>
//         <TouchableOpacity onPress={toggleMenu}>
//           <Text style={styles.username}>Username</Text>
//         </TouchableOpacity>
//         {showMenu && (
//           <View style={styles.menu}>
//             <TouchableOpacity style={styles.menuItem}>
//               <Text>Edit Profile</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.menuItem}>
//               <Text>Settings</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => logout()} style={styles.menuItem}>
//               <Text>Logout</Text>
//             </TouchableOpacity>
//           </View>
//         )}

//         <Image source={{ uri: 'https://www.shareicon.net/data/128x128/2016/08/05/806962_user_512x512.png' }}
//           style={styles.profileImage} />

//         <Text style={styles.bio}>
//           currently your status is driving.you are on route#1
//         </Text>
//         <Text style={styles.email}>Welcome, {userEmail}!</Text>
//       </View>
    

//       <View style={styles.vehicleinfo}>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//           <TouchableOpacity onPress={() => handleMenuPress('route')}>
//             <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10, paddingLeft: 40, backgroundColor: 'orange', padding: 10, color: selectedMenu === 'route' ? 'red' : 'black' }}>Route</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => handleMenuPress('vehicle')}>
//             <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10, backgroundColor: 'orange', padding: 10, color: selectedMenu === 'vehicle' ? 'red' : 'black' }}>Vehicle </Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => handleMenuPress('schools')}>
//             <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10, backgroundColor: 'orange', padding: 10, color: selectedMenu === 'schools' ? 'red' : 'black' }}>Schools</Text>
//           </TouchableOpacity>
//         </View>
//         {selectedMenu === 'route' &&

//           <View style={{ margin: 10, paddingLeft: 30, backgroundColor: 'white' }}>
//             <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>Routes' Detail:   </Text>
//             <Text style={{ fontSize: 15, paddingTop: 9, color: 'black' }}>Route 1: wah cantt</Text>
//             <Text style={{ fontSize: 15, paddingTop: 7, color: 'black' }}>Route 2: Basti</Text>
//             <Text style={{ fontSize: 15, paddingTop: 7, color: 'black' }}>Route 3: Taxila</Text>
//           </View>

//         }
//         {selectedMenu === 'vehicle' && <View style={{ margin: 10, paddingLeft: 30, backgroundColor: 'white' }}>
//           <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>Vehicle detail:   </Text>
//           <Text style={{ fontSize: 15, paddingTop: 9, color: 'black' }}>vehicle id :    059</Text>
//           <Text style={{ fontSize: 15, paddingTop: 7, color: 'black' }}>Vehicle number :    HR-694</Text>
//           <Text style={{ fontSize: 15, paddingTop: 7, color: 'black' }}>driving license# :    6594932</Text>
//         </View>
//         }

//         {selectedMenu === 'schools' &&
//           <View style={{ margin: 10, paddingLeft: 30, backgroundColor: 'white' }}>
//             <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}> Schools' Detail:   </Text>
//             <Text style={{ fontSize: 15, paddingTop: 2, color: 'black' }}> 1.WISE school and college</Text>
//             <Text style={{ fontSize: 15, paddingTop: 2, color: 'black' }}>2. POF model high school</Text>
//             <Text style={{ fontSize: 15, paddingTop: 2, color: 'black' }}>3. Roots international school, Gandhara campus</Text>
//           </View>

//         }
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     color: "black",
//     backgroundColor: 'white',

//   },
//   profileImage: {
//     backgroundColor: 'white',
//     marginTop: 150,
//     width: 150,
//     height: 150,
//     borderRadius: 100,
//   },
//   userInfo: {
//     backgroundColor: 'black',
//     borderBottomEndRadius: 20,
//     borderBottomStartRadius: 20,
//     color: "black",
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   vehicleinfo: {
//     margin: 10,
//     backgroundColor: 'pink',
//     paddingTop: 10,
//     marginBottom: 1000,

//   },
//   username: {
//     color: "white",
//     marginTop: 12,
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   menu: {

//     position: 'absolute',
//     top: 40,
//     right: 0,
//     backgroundColor: 'orange',
//     borderRadius: 5,
//     padding: 10,
//   },
//   menuItem: {

//     padding: 10,
//   },
//   bio: {
//     color: "white",
//     marginVertical: 10,
//     textAlign: 'center',
//     fontStyle: 'italic'
//   },
//   VehicleDetail:
//   {
//     color: "black",
//     marginTop: 40,

//   },
//   email: {
//     fontSize: 16,
//     color: 'lightblue',
//     paddingBottom: 20
//   },
// });

// export default ProfileScreen;



import React, { useState,useContext,useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { grey, primary, primaryLight, secondary, secondaryLight, white, whiteplus } from '../../../constants/colors';
import GradientButton from '../../../components/button/gradientButton';
import GradientIconButton from '../../../components/button/gradientIconButton';
import FeatherIcon from 'react-native-vector-icons/Feather';
import StarRating from '../../../components/starRating/starRating';
import MapComponent from '../../../components/map';
import { AuthContext } from '../../../navigation/authProvider';
import auth from '@react-native-firebase/auth';
import Menu from '../../../components/menu/menu';

const TABS = [
  { id: 1, title: 'Schools', icon: 'book-open', data: ['City Model School', 'Roots SChool', 'Jinnah School'] },
  { id: 2, title: 'Schedule', icon: 'clock', data: ['Morning Shift : 6:30', 'Afternoon Shift : 12:24'] },
  { id: 3, title: 'Routes', icon: 'map-pin', data: ['Opal road', 'Busti Road', 'Cantt Raod'] },
];


const ProfileScreen= () => {
  const [activeTab, setActiveTab] = useState(0);
  const { user, logout } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState(null);

  const renderTabContent = () => {
    const { title, icon, data } = TABS[activeTab];
    return (
      <View style={styles.tabContent}>
        {/* <FeatherIcon name={icon} size={24} color="#000" />
        <Text style={styles.tabTitle}>{title}</Text> */}
        <MapComponent style={{borderRadius:4}}/>
        {data.map((item, index) => (
          <View key={index} style={styles.tabDetail}>
          <FeatherIcon name="check-circle" size={16} color = {primary} />
            <Text style={styles.tabDetailText}>{item}</Text>
          </View>
        ))}
      </View>
    );
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
    <View style={styles.container}>
      <View style={styles.profileContainer}>
      <ImageBackground source={require('../../../assets/menu.png')} style={styles.orangeSection}/>
        <Menu/>
        <View style={styles.LightSection} />
        <View style={styles.centerContainer}>
          <View style={styles.whiteContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={require('../../../assets/img2.jpg')} />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.primaryText}>Sazuki Van</Text>
              <Text style={styles.secondaryText}>{userEmail}</Text>
              <Text style={styles.secondaryText}>City Model School</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10 }}>
          <GradientButton title={"Edit Profile"}/>
          <GradientIconButton iconName="account-supervisor" iconSize={20}/>
        </View>
      </View>
      <View>
      </View>
      <View style={styles.detailContainer}>
      <View style={styles.tabBar}>
        {TABS.map((tab, index) => (
          <TouchableOpacity key={tab.id} style={[styles.tab, index === activeTab && styles.activeTab]} onPress={() => setActiveTab(index)}>
            <FeatherIcon name={tab.icon} size={22} color={index === activeTab ? primary : '#000'} />
            <Text style={[styles.tabText, index === activeTab && styles.activeTabText]}>{tab.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {renderTabContent()}
      </View>
    </View >
  );
};



export default ProfileScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteplus,
  },
  profileContainer: {
    flex: 7,
  },
  orangeSection: {
    flex: 3,
    backgroundColor: primary,
    padding: 20, 
  },
  LightSection: {
    flex: 2,
    backgroundColor: whiteplus,
  },
  centerContainer: {
    position: 'absolute',
    top: '-1%',
    left: 0,
    right: 0,
    bottom: '25%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  whiteContainer: {
    position: 'absolute',
    top: '50%',
    left: '5%',
    width: '90%',
    height: '68%',
    backgroundColor: whiteplus,
    borderRadius: 16,
  },
  imageContainer: {
    backgroundColor: "black",
    position: 'absolute',
    top: '-0%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'absolute',
    top: '50%',
    left: '50%',
    borderWidth: 2,
    borderColor: white
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    top: '70%',
    left: '13%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  primaryText:{
    fontSize: 19, 
    fontWeight: 'bold', 
    color: 'black', 
    marginBottom: 1,
  },
  secondaryText:{
    fontSize: 15, 
    color: secondaryLight, 
  },
  detailContainer: {
    flex: 6,
    backgroundColor: whiteplus,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: whiteplus,
    paddingHorizontal:"6%",
    paddingVertical: 5,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#EEE',
    // borderRadius: 4,
    marginHorizontal: 0,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomColor:primary,
  },
  activeTab: {
    borderBottomColor:primary,
    // backgroundColor: primary,
    borderBottomWidth:2,
  },
  tabText: {
    marginLeft: 4,
    color: '#000',
    fontWeight: 'bold',
  },
  activeTabText: {
    color: primary
  },
  tabContent: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    margin:"4%",
    paddingHorizontal: 16,

  },
  tabTitle: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: 'bold',
    color:secondary
  },
  tabDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  tabDetailText: {
    marginLeft: 8,
    fontSize: 16,
    color:primaryLight
  },

});