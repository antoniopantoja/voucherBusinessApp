import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { themes } from '../themes/theme';

const Button = ({ color, onPress, title, width, disabled }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color, width: width}, disabled && styles.disabledButton]} onPress={onPress} disabled={disabled}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 5,
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: themes.colors.white, 
    textAlign: 'center',
    fontSize: themes.fonts.sizes.button, 
  },
});

export default Button;
