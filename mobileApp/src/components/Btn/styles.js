import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {colors} from '../../styles/mainStyles';

export const Container = styled(RectButton)`
  padding: 10px 22px;
  width: 140px;
  background: ${colors.prim1};
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  elevation: 2;
`;
export const BtnText = styled.Text`
  color: ${colors.sec1};
  text-transform: uppercase;
  font-size: 16px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: colors.sec1,
})`
  margin-right: 16px;
`;
