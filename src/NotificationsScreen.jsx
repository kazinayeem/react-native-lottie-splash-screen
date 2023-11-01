import { Button, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { Chip } from 'react-native-paper';

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Icon name="rocket" size={30} color="#900" />
      <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
    </View>
  );
}

export default NotificationsScreen;
