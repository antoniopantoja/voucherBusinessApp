import React from 'react';
import { useColorScheme, Text, StyleSheet  } from 'react-native';
import { themes } from '../themes/theme';

const Texto = ({ marginBottom, texto, fontSize, color, rest }) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Text style={{ 
        marginBottom: marginBottom, 
        fontSize: fontSize, 
        color: isDarkMode ? themes.colors.white : color,
        ...StyleSheet.flatten(rest)
      }}>{texto}</Text>
  );
};

export default Texto;
