import { View , Image} from 'react-native'
import React from 'react'

const Logo = () => {
    return (
        <View style={{ alignItems: 'center' }} >
            <Image source={require('../../assets/logo/greenLogo.png')}
                style={{ height: 52, width: 100,top:-20 }} />
        </View>
    )
}

export default Logo
