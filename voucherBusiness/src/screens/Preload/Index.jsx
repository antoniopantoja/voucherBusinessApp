import React, {useEffect} from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import { themes } from '../../themes/theme';

const Preload = () => {
const navigation = useNavigation();


const route = async () => {
  var remember = await AsyncStorage.getItem('remember');

  if (remember === 'true') {
    navigation.dispatch(
      StackActions.replace('Home')
    );
  } else {
    navigation.dispatch(
      StackActions.replace('Login')
    );
  }
}

useEffect(() => {
  setTimeout(() => {
    route();
  }, 3500)
}, [navigation]);

  return (
    <View style={styles.container} >
      <StatusBar
        backgroundColor={themes.colors.default}
      /> 
      <View style={styles.modalContainer}>
        <LottieView
          source={{ uri: themes.animation.logo }}
          autoPlay
          loop
          style={{ width: '65%', height: '65%' }} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: themes.colors.default,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Preload;
