import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { primary, white } from '../../constants/colors'; 
import { windowHeight } from '../../../utils/dimensions';
const Button = ({label, onPress = () => {}}) => {
   return(
     <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <View style = {styles.button}>
            <Text style = {styles.buttonText}>{label}</Text>
        </View>
     </TouchableOpacity>
   )
};

const styles = StyleSheet.create({
    button: {
        height : windowHeight/13.5,
        borderRadius : 2.9,
        marginVertical : 20,
        paddingHorizontal : 10,
        backgroundColor : primary,
        justifyContent : 'center'

    },
    buttonText : {
        color : white,
        fontWeight : 'bold',
        textTransform : 'uppercase',
        fontSize : 16,
        textAlign : 'center'
    }
})

export default Button;