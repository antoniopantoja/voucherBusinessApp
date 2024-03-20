import React, { useState } from 'react';
import { View, StyleSheet, useColorScheme, StatusBar, Modal} from 'react-native';
import { themes } from '../../themes/theme';
import { useRoute } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import signupService from '../../api/signupService';
import ProgressBar from '../../components/ProgressBar';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import Next from '../../components/Next';
import Input from '../../components/Input';
import Text from '../../components/Text';
import Functions from '../../components/Functions';
import Animation from '../../components/Animation';


const StageNameSurname = ({ navigation }) => {
const route = useRoute();
const { NomeParam, SobrenomeParam, DetailsParam, DocumentoParam} = route.params;
const isDarkMode = useColorScheme() === 'dark';
const backgroundStyle = {backgroundColor: isDarkMode ? themes.colors.darkgrey : themes.colors.white,};
const [progresso, setProgresso] = useState(4);
const { handleLogin, validateEmail, email, isValidEmail } = Functions();
const [visibleModelCarrega, setvisibleModelCarrega] = useState(false);
const [isConnected, setIsConnected] = useState(true);
const [isAlertMessage, setisAlertMessage] = useState("");

const NewRegister = async () => {

  try {
    const NomeSobrenomeParam = `${NomeParam} ${SobrenomeParam}`;
    let json = await signupService.NewRegister(DocumentoParam, email, NomeSobrenomeParam);
    setvisibleModelCarrega(true);
    if (json && json.hasOwnProperty('id')) {
        setTimeout(() => {
          setIsConnected(true);
          navigation.dispatch(
            StackActions.replace('AllReady')
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
        backgroundColor={backgroundStyle.backgroundColor}
      /> 
      <View style={styles.upperContainer}  backgroundColor={backgroundStyle.backgroundColor}>
      <Logo width={45} height={45} margin={14}/>
      </View>
      <View style={styles.centerContainer} backgroundColor={backgroundStyle.backgroundColor}>
      <Text marginBottom={20} fontSize={themes.fonts.sizes.paragraph} color={themes.colors.text} texto={'Por favor, nos informe o seu E-MAIL Corporativo.'}/>
        
        <Input 
        keyboardType = 'default'
        placeholder = 'E-mail'
        onChangeText = {(text) => validateEmail(text)}
        value = {email}
        Valid = {isValidEmail}
        />

      </View>
      <View style={styles.lowerContainer} >
        <View style={[styles.ButtonsContainer]}>
            <Next onPress={() => 
                navigation.navigate('StageDocument', {
                  NomeParam: NomeParam,
                  SobrenomeParam: SobrenomeParam,
                  DetailsParam: DetailsParam,
                  DocumentoParam: DocumentoParam
                })
            } arrow={'◀'} color={themes.colors.graywhite} size={30}/>
            <View style={{width: '90%', alignItems: 'center'}}>
                <Button color={themes.colors.default} onPress={NewRegister} title='Concluir' width={'50%'} disabled={isValidEmail == true ? false : true}/>
                <ProgressBar progresso={progresso}/>
                <Text marginBottom={0} fontSize={themes.fonts.sizes.paragraph} color={themes.colors.graywhite} texto={'Etapa '+progresso+' de 4'}/>
            </View>    
        </View>

      </View>
    </View>
        <Modal
        animationType="slide"
        transparent={true}
        visible={visibleModelCarrega}
        onRequestClose={() => {
          setvisibleModelCarrega(!visibleModelCarrega);
        }}
      >
        <View style={styles.centeredView} backgroundColor={isDarkMode ? themes.colors.darkgreyTransparent : themes.colors.whiteTransparent}>
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
    flex: 0.3,
    borderBottomRightRadius: 60,
  },
  centerContainer: {
    flex: 2,
    marginTop: '2%', 
    marginLeft: '15%', 
    marginRight: '15%',
  },
  lowerContainer: {
    flex: 0.8,
    backgroundColor: themes.colors.lightorange,
    borderTopRightRadius: 200,
    borderTopLeftRadius: 0,
    justifyContent: 'center',
  },
  ButtonsContainer: {
    flexDirection: 'row',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
    // backgroundColor: '#ffffffb5',
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

export default StageNameSurname;
