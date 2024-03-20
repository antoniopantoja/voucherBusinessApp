import React from 'react';
import { useColorScheme, TouchableOpacity, Text, Image } from 'react-native';
import { themes } from '../themes/theme';

const Next = ({ onPress, arrow, color, size, position, left, right, top, imagem }) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <TouchableOpacity onPress={onPress}  style={{position: position, left: left, right: right, top: top}}>
      {imagem ? (
        <Image source={{ uri: imagem }} style={{ width: 50, height: 50 }} />
      ) : (
        <Text style={{ fontSize: size, color: isDarkMode ? themes.colors.white : color }}>{arrow}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Next;
