import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { TextInput, DefaultTheme, DarkTheme} from 'react-native-paper';
import { themes } from '../themes/theme';

const Input = ({ keyboardType, secureTextEntry, placeholder, onChangeText, value, Valid }) => {

const isDarkMode = useColorScheme() === 'dark';

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'gray',
      onSurfaceVariant:  'gray',
    },
  };

  const darkTheme = {
    ...DarkTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: themes.colors.white, 
      onSurfaceVariant:  themes.colors.white,
    },
  };

  return (
    <TextInput
    style={[styles.input, isDarkMode ? styles.darkInput : null, Valid === true ? styles.borderVal : styles.borderStandard ]}
    label={placeholder}
    mode="flat"
    autoCapitalize="none"
    keyboardType={keyboardType}
    secureTextEntry={secureTextEntry}
    onChangeText={onChangeText}
    maxLength={100}
    value={value}
    theme={isDarkMode ? darkTheme : theme}
    />
  );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        width: '100%',
        marginBottom: 10,
        fontSize: themes.fonts.sizes.Input,
        borderBottomWidth: 2, 
        backgroundColor: themes.colors.white,
      },
      darkInput: {
        backgroundColor: themes.colors.greyblack,
      },
      borderVal:{
        borderBottomColor: themes.colors.green,
      },
      borderStandard:{
        borderBottomColor: themes.colors.whiteblue,
      }
  });

export default Input;
