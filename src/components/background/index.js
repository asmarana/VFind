import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { primary, whiteplus } from '../../constants/colors';

const Background = ({ children }) => {
    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <View style={styles.backgroundCircle1}></View>
                <View style={styles.backgroundCircle2}></View>
                <View style={styles.backgroundCircle3}></View>
                <View style={styles.backgroundCircle4}></View>
            </View>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        position: 'relative',
        justifyContent:"center",
        backgroundColor: whiteplus
        // alignItems:"center"
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: -1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        opacity: 0.3,
    },
    backgroundCircle1: {
        width: 300,
        height: 300,
        borderRadius: 150,
        backgroundColor: primary,
        position: 'absolute',
        top: -100,
        left: -100,
        opacity: 0.5,
    },
    backgroundCircle2: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: primary,
        position: 'absolute',
        top: 200,
        left: 200,
        opacity: 0.5,
    },
    backgroundCircle3: {
        width: 250,
        height: 250,
        borderRadius: 125,
        backgroundColor: primary,
        position: 'absolute',
        top: 400,
        left: -50,
        opacity: 0.5,
    },
    backgroundCircle4: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: primary,
        position: 'absolute',
        top: 550,
        left: 200,
        opacity: 0.5,
    },
});

export default Background;