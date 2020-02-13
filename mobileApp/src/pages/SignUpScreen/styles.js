import styled from 'styled-components/native';
import {colors} from '../../styles/mainStyles';

export const Container = styled.View`
  flex: 1;
`;

export const InputsView = styled.View`
  flex: 9;
  justify-content: center;
  margin-top: 42px;
`;
export const Footer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 3;
`;
export const ViewBtn = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 22px;
  align-self: stretch;
`;
export const BtnCadastro = styled.TouchableOpacity``;
export const BtnCadastroText = styled.Text`
  font-size: 16px;
  text-decoration: underline;
  color: ${colors.prim1};
`;
