import React from 'react';
import LottieView from 'lottie-react-native';

const Animation = ({ animation }) => {
  return (
    <LottieView
    source={{ uri: animation }}
    autoPlay
    loop
    style={{ width: '30%', height: '30%' }} 
    />
  );
};

export default Animation;
