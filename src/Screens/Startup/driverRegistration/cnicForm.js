import { StyleSheet, Text, TouchableOpacity, View, PermissionsAndroid, Image } from 'react-native'
import React from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import GradientButton from '../../../components/button/gradientButton';
import { useState } from 'react';
import storage from '@react-native-firebase/storage';


const CnicForm = () => {
    const [imageData, setImageData] = useState(null);
    const openCamera = async () => {
        const result = await launchCamera({ mediaType: 'photo' })
        setImageData(result)
        console.log(result)
    }

    const requestPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA, {
                title: ' VFind Camera Request',
                message:
                    'VFind needs to access your camera',
                  buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'Ok'

            },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                openCamera();
            } else {
                console.log('Camera Permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    }

    const uploadImage = async () => {
        const reference = storage().ref(imageData.assets[0].fileName);
        const pathToFile = imageData.assets[0].fileName
        await reference.putFile(pathToFile);

    }


    return (
        <View>
            {imageData !== null ? (
                <Image
                    source={{ uri: imageData.assets[0].uri }}
                    style={{ width: 200, height: 200 }}
                />
            ) : null}
            <GradientButton
                onPress={requestPermission}
                title={"Open Camera"} />
            <GradientButton
                onPress={uploadImage()}
                title={"Upload Image"} />
        </View>
    )
}

export default CnicForm

const styles = StyleSheet.create({})