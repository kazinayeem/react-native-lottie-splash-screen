import LottieSplashScreen from 'react-native-lottie-splash-screen';
import React, {useEffect} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import PushNotification from 'react-native-push-notification';

function App() {
  useEffect(() => {
    LottieSplashScreen.hide(); // here
  }, []);
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
    <SafeAreaView>
      <Text>Hello World</Text>
      <Button title={'Click me'} onPress={handleNotification} />
    </SafeAreaView>
  );
}

export default App;
