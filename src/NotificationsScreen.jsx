/* eslint-disable react-native/no-inline-styles */
import {Button, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useEffect} from 'react';
import {Chip} from 'react-native-paper';
import {RewardedAd, TestIds} from 'react-native-google-mobile-ads';

function NotificationsScreen({navigation}) {
  const rewarded = RewardedAd.createForAdRequest(TestIds.GAM_REWARDED, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['fashion', 'clothing'],
  });
  useEffect(() => {
    rewarded.load();
  }, [rewarded]);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => rewarded.show()} title="Display Rewarded Ads" />
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Icon name="rocket" size={30} color="#900" />
      <Chip icon="information" onPress={() => console.log('Pressed')}>
        Example Chip
      </Chip>
    </View>
  );
}

export default NotificationsScreen;
