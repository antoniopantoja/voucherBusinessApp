import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { themes } from '../themes/theme';
import Text from '../components/Text';
import Next from '../components/Next';

const Error404 = ({onPress}) => {
  return (
    <View style={[
      styles.carregaComponete,
      {width:'65%'}]}>
    <Image source={require('../assets/error-network.jpg')} style={styles.errorimage} />
    <Text fontSize={18} color={themes.colors.text} texto={'Tivemos um problema por aqui'} margin={0}/>
    <Text fontSize={18} color={themes.colors.text} texto={' Por favor, tente outra vez\n'} margin={0}/>
    <Next onPress={onPress} arrow={'Tente novamente'} color={themes.colors.default} size={18} right={0} top={0}/>
    </View>
  );
};

const styles = StyleSheet.create({
    errorimage: {
        width: 310,
        height: 310,
        borderRadius: 250,
      },
    carregaComponete: {
        borderRadius: 10, 
        justifyContent: 'center',
        alignItems: 'center',
      }
  });

export default Error404;
