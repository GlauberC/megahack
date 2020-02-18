import styled from 'styled-components/native';
import {colors} from '../../styles/mainStyles';

export const Container = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  flex: 5;
  background: ${colors.prim1};
  justify-content: space-around;
  align-items: center;
  elevation: 6;
  padding-bottom: 32px;
`;
export const TitleView = styled.View`
  justify-content: center;
  align-items: center;
`;
export const TitleUp = styled.Text`
  font-size: 42px;
  color: ${colors.sec1};
  text-transform: uppercase;
  font-weight: bold;
`;
export const SubTitle = styled.Text`
  font-size: 18px;
  color: ${colors.sec1};
  width: 240px;
  text-align: center;
`;
export const InputsView = styled.View`
  flex: 4;
  justify-content: center;
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
