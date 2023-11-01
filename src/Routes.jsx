import HomeScreen from './HomeScreen';
import NotificationsScreen from './NotificationsScreen';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';


export default function Routes() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{ drawerActiveBackgroundColor : 'orange' }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );

}
