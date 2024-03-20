import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// componentes de tela
import Preload from '../screens/Preload/Index';
import SignIn from '../screens/SignIn/Index';
import SignUp from '../screens/SignUp/Index';
import StageNameSurname from '../screens/Register/StageNameSurname';
import StageEmail from '../screens/Register/StageEmail';
import StageDocument from '../screens/Register/StageDocument';
import Details from '../screens/Register/Details';
import PrivacyPolicies from '../screens/Register/PrivacyPolicies';
import AllReady from '../screens/Register/AllReady';
import Profile from '../screens/Profile/Index';
import Home from '../screens/Home/Index';

const Stack = createStackNavigator();

const MainNavigator = () => (
    <Stack.Navigator
      initialRouteName="Preload"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Preload" component={Preload} />
      <Stack.Screen name="Login" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="StageNameSurname" component={StageNameSurname} />
      <Stack.Screen name="StageEmail" component={StageEmail} />
      <Stack.Screen name="StageDocument" component={StageDocument} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="PrivacyPolicies" component={PrivacyPolicies} />
      <Stack.Screen name="AllReady" component={AllReady} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
);

export default MainNavigator;
