import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { secondary, whiteplus } from '../../../constants/colors';
import Lottie from 'lottie-react-native';
import Button from '../../../components/button/button';


const UserTypeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ backgroundColor: whiteplus, flex: 1 }}>
                <View style={{ paddingTop: 50, paddingHorizontal: 20 , alignItems : 'center',}}>
                    <Text style={{ color: secondary, fontSize: 40, fontWeight: 'bold', }}>
                        You are a ?
                    </Text>
                    <View>
                        <View style={styles.card}>
                            <Lottie source={require('../../../assets/driver.json')} autoPlay speed={1} style={{ width: 150, height: 150 }} />
                            <Button label=" Driver" onPress={() => navigation.navigate('DriverInfoForm')} />
                        </View>
                        <View style={styles.card}>
                            <View style = {{ alignItems : 'center'}}>
                                <Lottie source={require('../../../assets/finder.json')} autoPlay speed={1} style={{ width: 150, height: 150, }} />
                            </View>
                            <Button label=" Finder"  onPress={() => navigation.navigate('AppStack')}/>
                        </View>
                    </View>
                </View>
            </SafeAreaView >
        </View >
    );
};

export default UserTypeScreen;

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: whiteplus,
        justifyContent: 'center',
        alignItems : 'center',
    },
    card:{
        justifyContent: 'center',
        width: 270,
        height:250,
        margin :10,
        padding :10,
        borderRadius : 3,
        elevation : 0.9,
        }
})