import React, { useState } from 'react';
import { View, StyleSheet, useColorScheme, StatusBar, Image} from 'react-native';
import { themes } from '../../themes/theme';
import { useRoute } from '@react-navigation/native';
import ProgressBar from '../../components/ProgressBar';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import Next from '../../components/Next';
import Text from '../../components/Text';


const Detail = ({ navigation }) => {

const route = useRoute();
const { NomeParam, SobrenomeParam} = route.params;
const isDarkMode = useColorScheme() === 'dark';
const backgroundStyle = {backgroundColor: isDarkMode ? themes.colors.darkgrey : themes.colors.white,};
const [progresso, setProgresso] = useState(2);

  const handleContinuar = () => {
    navigation.navigate('StageDocument', {
        NomeParam: NomeParam,
        SobrenomeParam: SobrenomeParam,
        DetailsParam: true
      });
  };

  const DescriptionBold = ({ children }) => (
    <Text marginBottom={0} fontSize={themes.fonts.sizes.paragraph} color={themes.colors.text} texto={children} rest={{fontWeight: 'bold'}}/>
  );

  const Description = ({ children, textAlign, mBottom }) => (
    <Text marginBottom={0} fontSize={themes.fonts.sizes.paragraph} color={themes.colors.text} texto={children} rest={{ textAlign, marginBottom: mBottom }}/>
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
        <View style={{width: '100%', alignItems: 'center'}}>
            <Text marginBottom={10} fontSize={themes.fonts.sizes.extra} color={themes.colors.text} texto={'Olá '+NomeParam}  />
            <Image
            source={require('../../assets/doc.png')}
            style={styles.image}
            />
            <Description textAlign='center' mBottom={32}>
            Ao longo deste cadastro vamos precisar de alguns documentos e dados.
            Por isso, tenha por perto o seu{' '}
            <DescriptionBold>RG, CNH</DescriptionBold> ou sua carteirinha da{' '}
            <DescriptionBold>OAB</DescriptionBold>.
            </Description> 
        </View>         
      </View>
      <View style={styles.lowerContainer} >
        <View style={[styles.ButtonsContainer]}>
            <Next onPress={() => navigation.navigate('StageNameSurname')} arrow={'◀'} color={themes.colors.graywhite} size={30}/>
            <View style={{width: '90%', alignItems: 'center'}}>
                <Button color={themes.colors.default} onPress={handleContinuar} title='Continuar ▶' width={'50%'}/>
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
  image: {
    width: '85%',
    height: '45%',
    margin: '15%',
    borderRadius: 250,
  },
});

export default Detail;
