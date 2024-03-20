import React from 'react';
import { Switch, StyleSheet } from 'react-native';
import { themes } from '../themes/theme';

const ToggleSwitch = ({ isEnabled, toggleSwitch }) => {

  return (
    <Switch
    trackColor={{ false: themes.colors.graydark, true: themes.colors.default }}
    thumbColor={isEnabled ? themes.colors.silver : themes.colors.silver}
    ios_backgroundColor={themes.colors.graydark}
    onValueChange={toggleSwitch}
    value={isEnabled}
    style={styles.switchStyle}
    />
  );
};

const styles = StyleSheet.create({
    switchStyle: {
        transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],
      },
});

export default ToggleSwitch;
