import HomeScreen from './HomeScreen';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from "./Routes";


export default function BottomTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown : false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notifications" component={Routes} />
    </Tab.Navigator>
  );
}
