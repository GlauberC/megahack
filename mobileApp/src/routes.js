import React from 'react';
import styled from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from './styles/mainStyles';

import SignInScreen from './pages/SignInScreen';
import SignUpScreen from './pages/SignUpScreen';
import LoanOrInvestment from './pages/LoanOrInvestment';
import Investiments from './pages/Investiments';

const Stack = createStackNavigator();

export default function Route() {
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
        <Stack.Screen
          name="LoanOrInvestment"
          component={LoanOrInvestment}
          options={{
            headerLeft: null,
            headerRight: () => (
              <PersonImage>
                <MaterialIcons name="person" size={28} color={colors.prim1} />
              </PersonImage>
            ),
            title: 'Fulano da Silva',
            headerStyle: {
              backgroundColor: colors.prim1,
            },
            headerTintColor: colors.sec1,
          }}
        />
        <Stack.Screen
          name="Investiments"
          component={Investiments}
          options={{
            headerRight: () => (
              <PersonImage>
                <MaterialIcons name="person" size={28} color={colors.prim1} />
              </PersonImage>
            ),
            title: 'Fulano da Silva',
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

export const PersonImage = styled.View`
  padding: 5px;
  background: ${colors.sec1};
  margin-right: 20px;
  border-radius: 50px;
`;
