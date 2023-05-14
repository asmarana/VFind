import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { primaryLight, secondaryLight } from '../../../constants/colors';
import Background from '../../../components/background';
import GradientButton from '../../../components/button/gradientButton';
import Logo from '../../../components/logo';

const FeedbackScreen = () => {
  const [isSent, setIsSent] = useState(false);
  const handlePress = () => {
    setIsSent(true);
  };
  return (
    <Background>
      <View style={{ marginTop: "20%" }}><Logo /></View>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          {/* <Ionicons name="notifications" size={24} color={primaryLight} /> */}
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 10, color: primaryLight }}>Share Your Feedback</Text>
        </View>
        <View>
          <TextInput
            style={{ marginTop: 20, padding: 10, fontSize: 16, borderColor: secondaryLight, borderWidth: 1, marginBottom: 20, color: 'black' }}
            placeholder="Help us improve by sharing your feedback..."
            placeholderTextColor={secondaryLight}
            multiline={true}
            numberOfLines={6}
          />
          <GradientButton
            style={{ padding: 10, borderRadius: 5, marginTop: 20 }}
            onPress={handlePress}
            title={isSent ? 'Sent' : 'Send'} />
        </View>
      </View>
    </Background>
  );
};

export default FeedbackScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // padding: 20,
  },
  paragraph: {
    textAlign: "center",
    fontSize: 22,
    color: "black",
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sentText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})