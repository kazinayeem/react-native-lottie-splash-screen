import LottieSplashScreen from 'react-native-lottie-splash-screen';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './src/Tab';



function App() {
  useEffect(() => {
    LottieSplashScreen.hide();

  }, []);

  return (
    <NavigationContainer>
      <BottomTab/>
    </NavigationContainer>
  );
}

export default App;
