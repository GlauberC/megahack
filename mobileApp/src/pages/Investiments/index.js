import React from 'react';

import {FlatList} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  IntroText,
  MoneyView,
  Money,
  Income,
  TitleView,
  Title,
  BtnAddInvest,
  InvestmentContainer,
  ValueInvestiment,
  InvestimentHeader,
  Status,
  ForecastIncome,
  Installments,
  Return,
  BodyInvestment,
  FooterInvestment,
  Forecast,
} from './styles';
import {colors} from '../../styles/mainStyles';

const data = [
  {
    id: '001',
    amount: 100.0,
    installments: 10,
    status: 'Emprestado',
    return: 10,
    forecastIncome: 2,
    totalForecast: 120.0,
  },
  {
    id: '002',
    amount: 50.0,
    installments: 10,
    status: 'Emprestado',
    return: 5,
    forecastIncome: 1,
    totalForecast: 110.0,
  },
  {
    id: '003',
    amount: 50.0,
    installments: 10,
    status: 'Emprestado',
    return: 5,
    forecastIncome: 1,
    totalForecast: 110.0,
  },
];

export default function Investiments() {
  return (
    <Container>
      <IntroText>Você possui na sua Carteira: </IntroText>
      <MoneyView>
        <Money>R$ 100,00</Money>
      </MoneyView>
      <Income>+ R$ 0,28 ao mês</Income>
      <TitleView>
        <Title>Investimentos</Title>
        <BtnAddInvest>
          <MaterialIcons name="add" size={24} color={colors.sec1} />
        </BtnAddInvest>
      </TitleView>
      <FlatList
        data={data}
        keyExtractor={invest => invest.id}
        renderItem={({item}) => (
          <InvestmentContainer>
            <InvestimentHeader>
              <ValueInvestiment>R$ {item.amount},00</ValueInvestiment>
              <Installments>{item.installments}x</Installments>
            </InvestimentHeader>
            <BodyInvestment>
              <Status>Status: {item.status}</Status>
              <Return>Retorno: R$ {item.return} mês</Return>
              <ForecastIncome>
                Rendimento: R$ {item.forecastIncome},00 mês
              </ForecastIncome>
            </BodyInvestment>
            <FooterInvestment>
              <Forecast>Total previsto: R$ {item.totalForecast},00 </Forecast>
            </FooterInvestment>
          </InvestmentContainer>
        )}
      />
    </Container>
  );
}
