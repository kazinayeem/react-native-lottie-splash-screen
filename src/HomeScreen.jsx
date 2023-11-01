import React, { useEffect, useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import { Button, Image, Text, View } from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import { useInterstitialAd, TestIds, AppOpenAd } from "react-native-google-mobile-ads";
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
function HomeScreen({ navigation }) {
  const { isLoaded, isClosed, load, show } = useInterstitialAd(TestIds.INTERSTITIAL, {
    requestNonPersonalizedAdsOnly: true,
  });
  const appOpenAd = AppOpenAd.createForAdRequest(TestIds.APP_OPEN, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['fashion', 'clothing'],
  });
  useEffect(() => {
    // Start loading the interstitial straight away
    load();
  }, [load]);
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
  useEffect(() => {
    if (isClosed) {
      // Action after the ad is closed
      navigation.navigate('Notifications');
    }
  }, [isClosed, navigation]);

  const changetab = () => {
    if (isLoaded) {
      show();

    } else {
      // No advert ready to show yet
      navigation.navigate('Notifications');
    }

  };
  return (

    <View>

      <Button
        onPress={changetab}
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
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  );
}

export  default HomeScreen;
