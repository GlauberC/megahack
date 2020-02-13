import React from 'react';

import {Container, BtnText, Loading} from './styles';

export default function Btn({children, loading, onPress}) {
  return (
    <Container onPress={onPress}>
      {loading ? <Loading /> : <BtnText>{children}</BtnText>}
    </Container>
  );
}
