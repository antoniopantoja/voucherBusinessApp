import React, { useState } from 'react';
import { View, StyleSheet, useColorScheme, StatusBar, Modal } from 'react-native';
import { themes } from '../../themes/theme';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import signInService from '../../api/signInService';
import AsyncStorage from '@react-native-community/async-storage';
import ToggleSwitch from '../../components/ToggleSwitch';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import Next from '../../components/Next';
import Input from '../../components/Input';
import Text from '../../components/Text';
import Functions from '../../components/Functions';
import Animation from '../../components/Animation';

const SignIn = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [senha, setSenha] = useState('');
  const { handleLogin, validateEmail, email, isValidEmail } = Functions();
  const backgroundStyle = {backgroundColor: isDarkMode ? themes.colors.darkgrey : themes.colors.white,};
  const [visibleModelCarrega, setvisibleModelCarrega] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
  const [isAlertMessage, setisAlertMessage] = useState("");

  const login = async () => {

    try {
      let json = await signInService.signIn(email,senha);
      setvisibleModelCarrega(true);
      if (json && json.hasOwnProperty('id')) {
          const sessionString = JSON.stringify(json);
          await AsyncStorage.setItem('session', sessionString);
          await AsyncStorage.setItem('remember', isEnabled.toString());

          setTimeout(() => {
            setIsConnected(true);
            navigation.dispatch(
              StackActions.replace('Home')
            );
          }, 2000); 
      } else {
        setTimeout(() => {
          setvisibleModelCarrega(false);
          setIsConnected(false);
          setisAlertMessage('⚠️ ' + json.error);
          setTimeout(() => {
            setIsConnected(true);
          }, 2000); 
        }, 2800); 
      }
    } catch (error) {
      setvisibleModelCarrega(true);
      setTimeout(() => {
        setvisibleModelCarrega(false);
        setIsConnected(false);
        setisAlertMessage('⚠️ Erro ao conectar com o servidor. Verifique sua conexão com a internet e tente novamente.');
        setTimeout(() => {
          setIsConnected(true);
        }, 3000); 
      }, 2800);
    }
  }

  return (
    <>
    <View style={styles.container} backgroundColor={backgroundStyle.backgroundColor}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={themes.colors.default}
      /> 
      <View style={styles.upperContainer} >
      <Logo width={'20%'} height={'38%'} margin={0}/>
      </View>
      <View style={styles.centerContainer} backgroundColor={backgroundStyle.backgroundColor}>
        <View style={styles.containerMargin}>
          <View style={styles.ContentCenter} backgroundColor={backgroundStyle.backgroundColor}>
          <View style={styles.rowContainer}>
          </View>
              <Input 
              keyboardType = 'email-address'
              placeholder = 'E-mail'
              onChangeText = {(text) => validateEmail(text)}
              value = {email}
              Valid = {isValidEmail}
              />
              <Input 
              secureTextEntry
              placeholder = 'Password'
              onChangeText = {(text) => setSenha(text)}
              value = {senha}
              />
          </View>
          <View style={styles.rowContainer}>
            <ToggleSwitch isEnabled={isEnabled} toggleSwitch={toggleSwitch}/>
            <Text marginBottom={0} fontSize={themes.fonts.sizes.xSmall} color={themes.colors.graywhite} texto={' Lembre-me'}/>
          </View>
          <Button color={themes.colors.default} onPress={login} title='Login' width={'100%'} disabled={isValidEmail == true && senha.length > 0 ? false : true} />
          <View style={[styles.ContentCenter, styles.rowContainer, {marginTop: '5%'}]}>
            <Text marginBottom={0} fontSize={themes.fonts.sizes.xSmall} color={themes.colors.graywhite} texto={'Não tem uma conta? '}/>
            <Next onPress={() => navigation.navigate('SignUp')} arrow={'Inscrever-se'} color={themes.colors.text} size={themes.fonts.sizes.xSmall}/>
          </View>
        </View>
      </View>
      <View style={styles.lowerContainer} ></View>
    </View>
    <Modal
      animationType="slide"
      transparent={true}
      visible={visibleModelCarrega}
      onRequestClose={() => {
        setvisibleModelCarrega(!visibleModelCarrega);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <Animation animation={themes.animation.logo}/>
        </View>
      </View>
    </Modal>
      <View style={styles.footer}>
      {!isConnected && (
        <View style={styles.alert} backgroundColor={isDarkMode ? themes.colors.darkgreytrans2 : themes.colors.alert}>
          <Text marginBottom={0} fontSize={themes.fonts.sizes.Small} color={themes.colors.text} rest={styles.alertText} texto={isAlertMessage} />
        </View>
      )}
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  upperContainer: {
    flex: 1,
    backgroundColor: themes.colors.default,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContainer: {
    flex: 3,
  },
  lowerContainer: {
    flex: 0,
  },
  containerMargin: {
    marginHorizontal: 28,
    top: '5%', 
  },
  ContentCenter: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    marginBottom: '12%',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
    backgroundColor: themes.colors.lightorange,
  },
  modalView: {
    margin: '0%',
    borderRadius: 20,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: themes.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    padding: 10,
  },
  alert: {
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  alertText: {
    marginBottom: 5,
    textAlign: 'center',
  },
});

export default SignIn;
