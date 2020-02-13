import styled from 'styled-components/native';
import {colors} from '../../styles/mainStyles';

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
export const ErrGlobalMsg = styled(ErrMsg)`
  font-size: 16px;
`;
export const ViewErrGlobalMsg = styled(ViewErr)`
  margin: -8px 22px 20px 36px;
`;
