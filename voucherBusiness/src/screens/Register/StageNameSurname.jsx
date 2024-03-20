import React, { useState } from 'react';
import { View, StyleSheet, useColorScheme, StatusBar} from 'react-native';
import { themes } from '../../themes/theme';
import ProgressBar from '../../components/ProgressBar';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import Next from '../../components/Next';
import Input from '../../components/Input';
import Text from '../../components/Text';


const StageNameSurname = ({ navigation }) => {

const isDarkMode = useColorScheme() === 'dark';
const backgroundStyle = {backgroundColor: isDarkMode ? themes.colors.darkgrey : themes.colors.white,};
const [progresso, setProgresso] = useState(1);
const [Nome, setNome] = useState('');
const [Sobrenome, setSobrenome] = useState('');


  const handleContinuar = () => {
    navigation.navigate('Details', {
      NomeParam: Nome,
      SobrenomeParam: Sobrenome
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
      <Text marginBottom={10} fontSize={themes.fonts.sizes.title} color={themes.colors.text} texto={'Boas-Vindas!'}/>
      <Text marginBottom={20} fontSize={themes.fonts.sizes.paragraph} color={themes.colors.text} texto={'Para começar qual o seu nome e sobrenome?'}/>
        <Input 
        keyboardType = 'default'
        placeholder = 'Nome'
        onChangeText = {(text) => setNome(text)}
        value = {Nome}
        />

        <Input 
        keyboardType = 'default'
        placeholder = 'Sobrenome'
        onChangeText = {(text) => setSobrenome(text)}
        value = {Sobrenome}
        />
        <Text marginBottom={20} fontSize={themes.fonts.sizes.small} color={themes.colors.text} texto={''}/>

      </View>
      <View style={styles.lowerContainer} >
        <View style={[styles.ButtonsContainer]}>
            <Next onPress={() => navigation.navigate('Login')} arrow={'◀'} color={themes.colors.graywhite} size={30}/>
            <View style={{width: '90%', alignItems: 'center'}}>
                <Button color={themes.colors.default} onPress={handleContinuar} title='Continuar ▶' width={'50%'} disabled={Nome.length > 0 && Sobrenome.length > 0 ? false : true} />
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

export default StageNameSurname;
