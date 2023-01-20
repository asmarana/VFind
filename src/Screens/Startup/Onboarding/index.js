import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import { TouchableOpacity, Text } from 'react-native';

const Done = ({ ...props }) => (
    <TouchableOpacity
        style={{
            marginHorizontal : 16,
        }}
        {...props}
    >
        <Text style={{ fontSize: 16 , color:'black' }}>Done</Text>
    </TouchableOpacity>
);
 
const OnboardingScreen = () => {
  const navigation = useNavigation();

    return (
        <Onboarding
        onSkip={() => navigation.replace("LoginScreen")}
        onDone={() => navigation.navigate("LoginScreen")}
    
        DoneButtonComponent={Done}
            pages={[
                {
                    backgroundColor: '#fff',
                    image:<Lottie source={require('../../../assets/schoolBus.json')} autoPlay speed={1} style={{ width: 350, height: 350 }} />,
                    title: 'Book Pre-scheduled Rides',
                    subtitle: 'Book pre-scheduled rides for students to and from schools',
                },
                {
                    backgroundColor: '#fff',
                    image: <Lottie source={require('../../../assets/tracking.json')} autoPlay speed={1} style={{ width: 350, height: 350 }} />,
                    title: 'Live Tracking',
                    subtitle: 'Keep track of the ride with live map tracking ',
                },
                {
                    backgroundColor: '#fff',
                    image: <Lottie source={require('../../../assets/notifications.json')} autoPlay speed={1} style={{ width: 350, height: 350 }} />,
                    title: 'Get Notified',
                    subtitle: 'Stay in the loop with instant notifications, and alerts on any device',
                }
            ]} />
    );
};

export default OnboardingScreen;