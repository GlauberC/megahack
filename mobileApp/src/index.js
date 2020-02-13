import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from './pages/SignInScreen';
import SignUpScreen from './pages/SignUpScreen';
import {colors} from './styles/mainStyles';

import './config/ReactotronConfig';
// import { Container } from './styles';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            title: 'Cadastro',
            headerStyle: {
              backgroundColor: colors.prim1,
            },
            headerTintColor: colors.sec1,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
