import LottieSplashScreen from 'react-native-lottie-splash-screen';
import React, {useEffect} from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import PushNotification from 'react-native-push-notification';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
function HomeScreen({ navigation }) {
  const handleNotification = () => {
    PushNotification.cancelAllLocalNotifications();
    PushNotification.localNotification({
      channelId: 'test-channel',
      title: 'You clicked on ',
      message: 'hello',
      bigText: ' is one of the largest and most beautiful cities in ',
      color: 'red',
      id: '2323',
    });
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      <SafeAreaView>
        <Text>Hello World</Text>
        <Button title={'Click me'} onPress={handleNotification} />
      </SafeAreaView>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function App() {
  useEffect(() => {
    LottieSplashScreen.hide(); // here
  }, []);
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Home" screenOptions={{ drawerActiveBackgroundColor : 'orange' }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
