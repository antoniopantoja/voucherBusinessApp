import React, {useEffect} from 'react';
import { View, StyleSheet, Image, useColorScheme, StatusBar } from 'react-native';
import { themes } from '../../themes/theme';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import Text from '../../components/Text';
import LottieView from 'lottie-react-native';

const AllReady = () => {
  const navigation = useNavigation();
  
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
        StackActions.replace('Login')
      );
    }, 2500); 
  }, []);

const isDarkMode = useColorScheme() === 'dark';
const backgroundStyle = {backgroundColor: isDarkMode ? themes.colors.darkgrey : themes.colors.white,};

  return (
    <View style={styles.container} backgroundColor={backgroundStyle.backgroundColor}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      /> 
      <View style={styles.upperContainer} backgroundColor={backgroundStyle.backgroundColor}></View>
      <View style={styles.lowerContainer} backgroundColor={backgroundStyle.backgroundColor}>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Text marginBottom={0} fontSize={themes.fonts.sizes.title} color={themes.colors.text} texto={'\n ✨PARABÉNS!✨'} rest={{fontWeight: 'bold'}}/>
        <Text marginBottom={'5%'} fontSize={themes.fonts.sizes.title} color={themes.colors.text} texto={'TUDO PRONTO'} rest={{fontWeight: 'bold'}}/>
        <Image
        source={{uri: themes.imagensUrl.tudoPronto}}
        style={styles.image}
        />
        <LottieView
          source={{ uri: themes.animation.confete }}
          autoPlay
          loop
          style={{ width: '65%', height: '65%', position: 'absolute' }} 
        />
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: themes.colors.whitebluetwo,
  },
  upperContainer: {
    flex: 0,
    backgroundColor: themes.colors.default, 
    borderBottomRightRadius: 60,
  },
  lowerContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  image: {
    width: '95%',
    height: '62%',
    borderRadius: 250,
  },
});

export default AllReady;
