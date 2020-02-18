import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {colors} from '../../styles/mainStyles';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;
export const Blocks = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
`;

export const Question = styled.Text`
  font-size: 18px;
  text-align: center;
  font-size: 28px;
  color: ${colors.prim1};
  align-self: flex-end;
  margin: 0 40px;
`;
export const Block = styled.View`
  border-width: 2px;
  padding: 18px;
  justify-content: center;
  align-items: center;
`;
export const InsideBlock = styled(RectButton)``;

export const BaseText = styled.Text`
  font-size: 18px;
`;

export const InvestimentBlock = styled(Block)`
  border-color: ${colors.prim1};
`;
export const InvestimentName = styled(BaseText)``;
export const LoanBlock = styled(Block)`
  border-color: ${colors.prim2};
`;
export const LoanName = styled(BaseText)``;
