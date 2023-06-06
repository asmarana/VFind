import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, } from 'react-native';
import { black, grey, primary, secondary, white, } from '../../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const StudentItem = ({ email, id, onAccept, onReject }) => {

    const handleAccept = () => {
        console.log(`Accepted ID: ${id}`);
        onAccept(id);
    };

    const handleReject = () => {
        console.log(`Rejected ID: ${id}`);
        onReject(id);
    };

    return (
        <View style={styles.requestContainer}>
            <Text style={styles.requestName}>{email.split('@')[0]}</Text>
            <TouchableOpacity
                style={[styles.requestButton, styles.acceptButton]}
                onPress={handleAccept}>
                <Text style={styles.buttonText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.declineButton}
            onPress={handleReject}>
                <MaterialIcons name="clear" size={22} color={grey} />
            </TouchableOpacity>
        </View>
    );
};

export default StudentItem;

const styles = StyleSheet.create({
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
        padding: 10,
        borderRadius: 30,
    },
    buttonText: {
        color: white,
        fontWeight: 'bold',
    },
});