import LottieSplashScreen from 'react-native-lottie-splash-screen';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';
import BottomTab from './src/Tab';



function App() {
  useEffect(() => {
    LottieSplashScreen.hide(); // here
  }, []);

  return (
    <NavigationContainer>
     {/*<Routes/>*/}
      <BottomTab/>
    </NavigationContainer>
  );
}

export default App;
