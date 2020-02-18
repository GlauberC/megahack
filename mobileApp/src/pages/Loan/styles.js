import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {colors} from '../../styles/mainStyles';

export const Container = styled.View`
  flex: 1;
`;
export const TotalLoanView = styled.View`
  justify-content: center;
  align-items: center;
  padding: 30px;
  background: ${colors.sec3};
`;
export const TotalLoan = styled.Text`
  font-size: 22px;
  color: ${colors.err1};
`;
export const PayNowButton = styled(RectButton)`
  margin: 20px 0;
  padding: 10px 30px;
  align-self: center;
  background: ${colors.prim1};
  border-radius: 20px;
  elevation: 8;
`;
export const PayNowButtonText = styled.Text`
  color: ${colors.sec1};
  font-size: 14px;
  text-transform: uppercase;
`;
export const InstallmentTitle = styled.Text`
  font-size: 18px;
  padding: 10px;
`;

export const Installment = styled.View`
  background: ${colors.sec3};
  padding: 10px;
  margin: 10px;
  elevation: 4;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
export const BtnPay = styled.TouchableOpacity`
  background: ${colors.prim1};
  border-radius: 25px;
  padding: 8px;
`;

export const ValueToPay = styled.Text`
  font-size: 18px;
  color: ${colors.err1};
`;
export const ViewDue = styled.View`
  justify-content: center;
  align-items: center;
`;
export const DueDate = styled.Text`
  font-size: 14px;
  color: ${colors.sec2};
`;
export const DueTitle = styled.Text`
  font-size: 12px;
  color: ${colors.sec2};
`;
