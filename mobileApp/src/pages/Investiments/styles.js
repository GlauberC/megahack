import styled from 'styled-components/native';
import {colors} from '../../styles/mainStyles';

export const Container = styled.View`
  flex: 1;
`;
export const IntroText = styled.Text`
  font-size: 16px;
  padding: 15px 10px;
`;
export const MoneyView = styled.View`
  justify-content: center;
  align-items: center;
  padding: 30px;
  background: ${colors.sec3};
`;
export const Money = styled.Text`
  font-size: 22px;
  color: ${colors.prim1};
`;
export const Income = styled.Text`
  font-size: 18px;
  color: ${colors.prim1};
  align-self: flex-end;
  margin-right: 15px;
  margin-top: 10px;
`;
export const InvestimentsView = styled.View`
  margin: 20px 0;
`;
export const TitleView = styled.View`
  flex-direction: row;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
`;
export const BtnAddInvest = styled.TouchableOpacity`
  background: ${colors.prim2};
  border-radius: 25px;
  padding: 8px;
`;
export const Title = styled.Text`
  font-size: 18px;
`;
export const InvestmentContainer = styled.View`
  background: ${colors.sec3};
  padding: 10px;
  margin: 10px;
  elevation: 4;
`;
export const InvestimentHeader = styled.View`
  flex-direction: row;
  align-items: baseline;
`;
export const ValueInvestiment = styled.Text`
  font-size: 18px;
  color: ${colors.prim1};
`;
export const Installments = styled.Text`
  margin-left: 15px;
  font-size: 12px;
`;
export const Status = styled.Text``;
export const BodyInvestment = styled.View`
  padding: 10px 0;
`;
export const ForecastIncome = styled.Text``;
export const Return = styled.Text``;
export const FooterInvestment = styled.View``;
export const Forecast = styled.Text``;
