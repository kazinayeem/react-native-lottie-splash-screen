import React, {useEffect, useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {Button, Image, Text, View} from 'react-native';
import PushNotification from 'react-native-push-notification';
import {useInterstitialAd, TestIds} from 'react-native-google-mobile-ads';
import {BannerAd, BannerAdSize} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__
  ? TestIds.BANNER
  : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

function HomeScreen({navigation}) {
  const {isLoaded, isClosed, load, show} = useInterstitialAd(
    TestIds.INTERSTITIAL,
    {
      requestNonPersonalizedAdsOnly: true,
    },
  );

  useEffect(() => {
    load();
  }, [load]);
  useEffect(() => {
    if (isClosed) {
      navigation.navigate('Notifications');
    }
  }, [isClosed, navigation]);
  const [img, setimg] = useState('');
  const handleNotification = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      console.log(image);
      setimg(image);
    });
  };
  const camera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      console.log(image);
      setimg(image);
    });
  };

  const changetab = () => {
    if (isLoaded) {
      show();
    } else {
      // No advert ready to show yet
      navigation.navigate('Notifications');
    }
  };

  const showNotification = () => {
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
    <View>
      <Button onPress={changetab} title="Go to notifications" />

      <Text>Hello World</Text>
      <Button
        color={'green'}
        title={'Show Notification'}
        onPress={showNotification}
      />
      <Button
        color={'orange'}
        title={'File upload'}
        onPress={handleNotification}
      />
      <Button color={'tomato'} title={'open camera'} onPress={camera} />

      {img && (
        <Image
          width={300}
          height={300}
          source={{uri: `data:${img.mime};base64,${img.data}`}}
        />
      )}
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

export default HomeScreen;
