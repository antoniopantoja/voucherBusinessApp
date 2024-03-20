import React from 'react';
import { View, Image, StyleSheet, useColorScheme, StatusBar, Text } from 'react-native';
import { themes } from '../../themes/theme';
import Swiper from 'react-native-swiper';
import Button from '../../components/Button';
import Title from '../../components/Text';


const SignUp = ({ navigation }) => {

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {backgroundColor: isDarkMode ? themes.colors.darkgrey : themes.colors.white,};
  const carouselData = [
    {
      title: 'Boas-Vindas',
      text: 'Bem-vindo ao Voucher Business, o seu aplicativo de resgate de prêmios e recompensas! Estamos aqui para reconhecer e recompensar o seu empenho e dedicação.',
      image: require('../../assets/background-SignUp-1.jpg'),
    },
    {
      title: 'Incentivo e Metas',
      text: 'Seja proativo, alcance suas metas e conquiste recompensas incríveis! O Voucher Business é o seu parceiro na jornada para o sucesso.',
      image: require('../../assets/background-SignUp-2.jpg'),
    },
    {
      title: 'Registre-se para Ganhar',
      text: 'Registre-se no Voucher Business e comece a ganhar recompensas exclusivas.',
      image: require('../../assets/background-SignUp-3.jpg'),
    },
  ];

  return (
    <>      
    <StatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      backgroundColor={backgroundStyle.backgroundColor}
    /> 
    <Swiper style={styles.wrapper} showsButtons={false} loop={false} backgroundColor={backgroundStyle.backgroundColor}>
      {carouselData.map((item, index) => (
        <View key={index} style={styles.slide}>
          <Image source={item.image} style={styles.image} />
          <Title marginBottom={10} fontSize={themes.fonts.sizes.title} color={themes.colors.text} texto={item.title}/>
          <Text style={[styles.text, { color: isDarkMode ? themes.colors.white : themes.colors.text }]}>{item.text}</Text>
          {index === carouselData.length - 1 && (
            <Button color={themes.colors.default} onPress={() => navigation.navigate('PrivacyPolicies')} title='Registrar' width={'50%'} />
          )}
        </View>
      ))}
    </Swiper>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 370,
    height: 370,
    marginBottom: 20,
    borderRadius: 250,
  },
  text: {
    fontSize: themes.fonts.sizes.paragraph,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default SignUp;
