import React, { useState } from 'react';
import { View, StyleSheet, useColorScheme, StatusBar} from 'react-native';
import { themes } from '../../themes/theme';
import { useRoute } from '@react-navigation/native';
import ProgressBar from '../../components/ProgressBar';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import Next from '../../components/Next';
import Input from '../../components/Input';
import Text from '../../components/Text';



const StageDocument = ({ navigation }) => {
const route = useRoute();
const { NomeParam, SobrenomeParam, DetailsParam} = route.params;
const isDarkMode = useColorScheme() === 'dark';
const backgroundStyle = {backgroundColor: isDarkMode ? themes.colors.darkgrey : themes.colors.white,};
const [progresso, setProgresso] = useState(3);
const [Documento, setDocumento] = useState('');

const handleContinuar = () => {
    navigation.navigate('StageEmail', {
        NomeParam: NomeParam,
        SobrenomeParam: SobrenomeParam,
        DetailsParam: DetailsParam,
        DocumentoParam: Documento
      });
};

  return (
    <View style={styles.container} backgroundColor={backgroundStyle.backgroundColor}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      /> 
      <View style={styles.upperContainer}  backgroundColor={backgroundStyle.backgroundColor}>
      <Logo width={45} height={45} margin={14}/>
      </View>
      <View style={styles.centerContainer} backgroundColor={backgroundStyle.backgroundColor}>
      <Text marginBottom={20} fontSize={themes.fonts.sizes.paragraph} color={themes.colors.text} texto={'Por favor, nos informe o número do seu documento.'}/>
        
        <Input 
        keyboardType = 'numeric'
        placeholder = 'Documento'
        onChangeText = {(text) => setDocumento(text)}
        value = {Documento}
        />

      </View>
      <View style={styles.lowerContainer} >
        <View style={[styles.ButtonsContainer]}>
            <Next onPress={() => 
                navigation.navigate('Details', {
                  NomeParam: NomeParam,
                  SobrenomeParam: SobrenomeParam,
                  DetailsParam: DetailsParam
                })
            } arrow={'◀'} color={themes.colors.graywhite} size={30}/>
            <View style={{width: '90%', alignItems: 'center'}}>
                <Button color={themes.colors.default} onPress={handleContinuar} title='Continuar ▶' width={'50%'} disabled={Documento.length > 6 ? false : true}/>
                <ProgressBar progresso={progresso}/>
                <Text marginBottom={0} fontSize={themes.fonts.sizes.paragraph} color={themes.colors.graywhite} texto={'Etapa '+progresso+' de 4'}/>
            </View>    
        </View>

      </View>
      
    </View>
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
});

export default StageDocument;
