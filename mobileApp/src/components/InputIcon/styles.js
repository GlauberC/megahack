import styled from 'styled-components/native';
import {colors} from '../../styles/mainStyles';

export const Container = styled.View`
  background: ${colors.sec3};
  align-self: stretch;
  margin: 10px 22px;
  padding: 6px 10px;
  align-items: center;
  border-radius: 18px;
  border-width: ${props => (props.err ? '2px' : '1px')};
  border-color: ${props => (props.err ? colors.err1 : colors.prim1)};
  flex-direction: row;
  elevation: 6;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.sec2,
})`
  font-size: 16px;
  padding: 0 6px;
  margin-left: 10px;
  color: ${colors.tert1};
  flex: 1;
`;

export const ErrMsg = styled.Text`
  color: ${colors.err1};
  font-size: 12px;
  margin-left: 10px;
`;
export const ViewErr = styled.View`
  margin: -8px 22px 0px 36px;
  flex-direction: row;
  align-items: center;
`;
