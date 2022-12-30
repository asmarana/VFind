import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from 'lottie-react-native';

// const Done = ({ ...props }) => (
//     <TouchableOpacity
//         style={{
//             marginHorizontal : 8,
//         }}
//         {...props}
//     >
//         <Text style={{ fontSize: 16 }}>Done</Text>
//     </TouchableOpacity>
// );

const Onboard = () => {
    return (
        <Onboarding
            // DoneButtonComponent={Done}
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

export default Onboard;