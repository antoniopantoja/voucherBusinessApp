import React from 'react';
import { StyleSheet, View } from 'react-native';
import { themes } from '../themes/theme';

const Modal = ({ background, value, rest, boolVisible }) => {
  const modalStyle = boolVisible ? {} : { display: 'none' };

  return (
    <View style={[styles.modalContainer, modalStyle, {...StyleSheet.flatten(rest)}]} 
    backgroundColor={background}>
    {value}
    </View>
  );
};

const styles = StyleSheet.create({
    modalContainer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: themes.colors.white, 
        ...Platform.select({
          ios: {
            shadowColor: themes.colors.black,
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 5,
          },
          android: {
            elevation: 5,
          },
        }),
      },
});

export default Modal;
