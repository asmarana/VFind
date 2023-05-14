import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import { primary, secondaryLight, whiteplus } from '../../../constants/colors';
import { lightPrimary } from '../../../constants/colors';

function SettingsScreen() {
  const [isNotificationsEnabled, setNotificationsEnabled] = useState(false);
  const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleNotificationsToggle = () => {
    setNotificationsEnabled(!isNotificationsEnabled);
  };

  const handleDarkModeToggle = () => {
    setDarkModeEnabled(!isDarkModeEnabled);
  };

  return (
    <View style={{ flex: 1, padding: 16 ,backgroundColor:whiteplus}}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16,color:'black' }}>Settings</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
        <Text style={{ fontSize: 18, flex: 1,color:'black' }}>Notifications</Text>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={handleNotificationsToggle}
          trackColor={{ false: secondaryLight, true:lightPrimary }}
          thumbColor={isNotificationsEnabled ? primary : whiteplus}
        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, flex: 1,color:'black' }}>Dark Mode</Text>
        <Switch
          value={isDarkModeEnabled}
          onValueChange={handleDarkModeToggle}
          trackColor={{ false: secondaryLight, true: lightPrimary }}
          thumbColor={isDarkModeEnabled ? primary : whiteplus}
        />
      </View>
    </View>
  );
}

export default SettingsScreen;