import React from 'react';
import { Image } from 'react-native';

const Logo = ({ width , height, margin, position, left, right, top }) => {
  return (
    <Image
    source={require('../assets/logo@x1.png')} 
    style={{ width: width, height: height, margin: margin, position: position, left: left, right: right, top: top}}
  />
  );
};

export default Logo;
