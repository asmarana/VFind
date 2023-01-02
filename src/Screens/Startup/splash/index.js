import React from 'react';
import { View, Image, } from 'react-native';
import { primary } from '../../../constants/colors';

const Splash = () => {
	return (
		<View style = {{flex: 1, justifyContent: 'center', backgroundColor: primary}}>
			<View style={ { alignItems: 'center', backgroundColor: primary} } >
				<Image source={ require('../../../assets/logo/logoWhite.png') } />
			</View>
		</View>
	);
};
export default Splash;