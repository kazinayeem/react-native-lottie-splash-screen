import LottieSplashScreen from 'react-native-lottie-splash-screen';
import React, { useEffect, useState } from 'react';
import { Button, Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar, Card, Chip } from 'react-native-paper';



const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
function HomeScreen({ navigation }) {
  const [img , setimg] = useState('');
  const handleNotification = () => {
    // PushNotification.cancelAllLocalNotifications();
    // PushNotification.localNotification({
    //   channelId: 'test-channel',
    //   title: 'You clicked on ',
    //   message: 'hello',
    //   bigText: ' is one of the largest and most beautiful cities in ',
    //   color: 'red',
    //   id: '2323',
    // });
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,  includeBase64 : true,
    }).then(image => {
      console.log(image); setimg(image);
    });
  };
  const camera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64 : true,
    }).then(image => {
      console.log(image);
      setimg(image);
    });
  };

  return (

    <View>

      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />

        <Text>Hello World</Text>
        <Button color={'orange'} title={'File upload'} onPress={handleNotification} />
        <Button color={'tomato'} title={'open camera'} onPress={camera} />
      <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions />
      </Card>
      { img &&   <Image width={300} height={300} source={{uri: `data:${img.mime};base64,${img.data}`}} />}
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Icon name="rocket" size={30} color="#900" />
      <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
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
