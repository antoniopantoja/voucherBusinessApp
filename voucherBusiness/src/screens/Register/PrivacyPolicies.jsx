import React from 'react';
import { View, StyleSheet, useColorScheme, StatusBar, ScrollView} from 'react-native';
import { themes } from '../../themes/theme';
import Button from '../../components/Button';
import Next from '../../components/Next';
import Logo from '../../components/Logo';
import Text from '../../components/Text';


const PrivacyPolicies = ({ navigation }) => {

const isDarkMode = useColorScheme() === 'dark';
const backgroundStyle = {backgroundColor: isDarkMode ? themes.colors.darkgrey : themes.colors.white,};


  const handleConcordar = () => {
    navigation.navigate('StageNameSurname');
  };

  const DescriptionBold = ({ children }) => (
    <Text marginBottom={10} fontSize={themes.fonts.sizes.paragraph} color={themes.colors.lightblue} texto={children} rest={{fontWeight: 'bold'}}/>
  );

  const Description = ({ children, textAlign, mBottom }) => (
    <Text marginBottom={0} fontSize={themes.fonts.sizes.small} color={themes.colors.text} texto={children} rest={{ textAlign, marginBottom: mBottom }}/>
  );

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
        <View style={{width: '100%'}}>
            <Text marginBottom={0} fontSize={24} color={themes.colors.text} texto={'Política de Privacidade'} />
            <Text marginBottom={0} fontSize={19} color={themes.colors.lightblue} texto={'\nTodas os seus dados e\ndocumentos estão super\nprotegidos conosco.'} />
            <View>
              <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.term} backgroundColor={isDarkMode ? themes.colors.darkgreytrans2 : themes.colors.silver}>
                <DescriptionBold>
                  POLÍTICA DE {'\n'}PRIVACIDADE:
                </DescriptionBold>
                <Description>
                  A privacidade e segurança são prioridade e nos comprometemos
                  com a transparência do tratamento de dados pessoais dos nossos
                  usuários/clientes.
                </Description>
                <Description>
                  Por isso, está presente Política de Privacidade estabelece como
                  é feita a coleta, uso e transferência de informações de clientes
                  ou outras pessoas que acessam ou usam nosso aplicativo.
                </Description>
                <Description>
                  Ao utilizar nossos serviços, você entende que coletamos e usamos suas
                  informações pessoais nas formas descritas nesta Política, sob as normas
                  de Proteção de Dados
                </Description>
                <Description>
                  LGPD, Lei Federal 13.709/2018
                </Description>
                <Description>
                  das disposições consumeristas da Lei Federal 8078/1990 e as demais normas
                  do ordenamento jurídico brasileiro aplicáveis. Dessa forma,
                </Description>
                <Description>
                  no papel de Controladora de Dados, obriga-se ao disposto
                  na presente Política de Privacidade.
                </Description>
                <Description>
                </Description>
              </ScrollView>
            </View>
        </View>         

      </View>
      <View style={styles.lowerContainer} >
        <View style={[styles.ButtonsContainer]}>
        <Next onPress={() => navigation.navigate('Login')} arrow={'◀'} color={themes.colors.graywhite} size={30}/>
            <View style={{width: '90%', alignItems: 'center'}}>
                <Button color={themes.colors.default} onPress={handleConcordar} title='Concordar' width={'50%'}/>
                <Text marginBottom={10} fontSize={themes.fonts.sizes.paragraph} color={themes.colors.graywhite} texto={''}/>
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
    marginLeft: '14%', 
    marginRight: '14%',
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
  term: {
    width: '95%', 
    height: '68%',
    marginTop: '10%',
    borderRadius: 20,
    padding: 15,
  }
});

export default PrivacyPolicies;
