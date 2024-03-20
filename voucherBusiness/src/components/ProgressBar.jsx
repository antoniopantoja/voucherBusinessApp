import React from 'react';
import { useColorScheme} from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import { themes } from '../themes/theme';

const Progress = ({ progresso }) => {

const isDarkMode = useColorScheme() === 'dark';

  return (
    <ProgressBar
    styleAttr='Horizontal'
    indeterminate={false}
    progress={progresso/4}
    width={'50%'}
    style={[{marginTop:'2%'},{ color: isDarkMode ? themes.colors.white : themes.colors.brown }]}
    />
  );
};

export default Progress;
