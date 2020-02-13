import React, {forwardRef} from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Container, Input, ErrMsg, ViewErr} from './styles';
import {colors} from '../../styles/mainStyles';

function InputIcon({children, iconName, onChangeText, err, ...rest}, ref) {
  return (
    <>
      <Container err={err}>
        <MaterialIcons name={iconName} size={22} color={colors.prim2} />
        <Input
          ref={ref}
          placeholder={children}
          onChangeText={onChangeText}
          {...rest}
        />
      </Container>
      {err !== '' && (
        <ViewErr>
          <MaterialIcons name="error-outline" size={14} color={colors.err1} />
          <ErrMsg>{err}</ErrMsg>
        </ViewErr>
      )}
    </>
  );
}

export default forwardRef(InputIcon);
