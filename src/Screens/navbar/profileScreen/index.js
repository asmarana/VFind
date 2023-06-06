import React, { useState, useContext, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { primary, primaryLight, secondary, secondaryLight, white, whiteplus } from '../../../constants/colors';
import GradientButton from '../../../components/button/gradientButton';
import GradientIconButton from '../../../components/button/gradientIconButton';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MapComponent from '../../../components/map';
import { AuthContext } from '../../../navigation/authProvider';
import auth from '@react-native-firebase/auth';
import Menu from '../../../components/menu/menu';
import messaging from '@react-native-firebase/messaging';
import ModalStudentList from '../../../components/list/studentList';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import CustomLoader from '../../../components/loader/customLoader';
import RegisteredStudentList from '../../../components/registeredStudents/registeredStudentList';

let token = '';

const TABS = [
  { id: 1, title: 'Schools', icon: 'book-open', data: ['City Model School', 'Roots SChool', 'Jinnah School'] },
  { id: 2, title: 'Schedule', icon: 'clock', data: ['Morning Shift : 6:30', 'Afternoon Shift : 12:24'] },
  { id: 3, title: 'Routes', icon: 'map-pin', data: ['Opal road', 'Busti Road', 'Cantt Raod'] },
];


const ProfileScreen = () => {
  const navigation = useNavigation();

  const { user } = useContext(AuthContext);


  const [activeTab, setActiveTab] = useState(0);
  const [userEmail, setUserEmail] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [registeredStudents, setRegisteredStudents] = useState([]);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderTabContent = () => {
    const { data } = TABS[activeTab];
    return (
      <View style={styles.tabContent}>
        {/* <FeatherIcon name={icon} size={24} color="#000" />
        <Text style={styles.tabTitle}>{title}</Text> */}
        <MapComponent style={{ borderRadius: 4 }} />
        {data.map((item, index) => (
          <View key={index} style={styles.tabDetail}>
            <FeatherIcon name="check-circle" size={16} color={primary} />
            <Text style={styles.tabDetailText}>{item}</Text>
          </View>
        ))}
      </View>
    );
  };

  const getFcmToken = async () => {
    token = await messaging().getToken();
  }

  const getRegisteredStudents = async () => {
    try {
      console.log("Get registered students function called")
      setLoading(true);
      await firestore()
        .collection('RegisteredStudents')
        .where('driverEmail', '==', user.email)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            setRegisteredStudents(data.students)
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
    getRegisteredStudents();
    getFcmToken();
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <ImageBackground source={require('../../../assets/menu.png')} style={styles.orangeSection} />
        <Menu />
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
          <GradientButton title={"Registered Students"} onPress={openModal}/>
          {/* <GradientIconButton  iconName="account-supervisor" iconSize={20} onPress={openModal} /> */}
          <ModalStudentList
            visible={modalVisible}
            closeModal={closeModal}
            studentList={loading ? (
              <CustomLoader />
            ) : (
              <RegisteredStudentList data={registeredStudents} />
            )}
          />
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
  primaryText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 1,
  },
  secondaryText: {
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
    paddingHorizontal: "6%",
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
    borderBottomColor: primary,
  },
  activeTab: {
    borderBottomColor: primary,
    // backgroundColor: primary,
    borderBottomWidth: 2,
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
    margin: "4%",
    paddingHorizontal: 16,

  },
  tabTitle: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: 'bold',
    color: secondary
  },
  tabDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  tabDetailText: {
    marginLeft: 8,
    fontSize: 16,
    color: primaryLight
  },

});