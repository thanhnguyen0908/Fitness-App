import React from 'react';
import { ImageBackground } from 'react-native';
import { splash } from '../../assets/image';

function SplashScreen({ navigation }) {
    setTimeout(() => { navigation.navigate('Login'), 3000})
    return (
      <ImageBackground 
      source={splash}
      style={{flex:1}}>
      </ImageBackground>
    );
  }
export default SplashScreen