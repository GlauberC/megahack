import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../styles/mainStyles';

import {
  Container,
  Question,
  Blocks,
  InsideBlock,
  LoanBlock,
  LoanName,
  InvestimentBlock,
  InvestimentName,
} from './styles';

export default function LoanOrInvestment({navigation}) {
  return (
    <Container>
      <Question>Qual serviço você quer usar ?</Question>
      <Blocks>
        <InsideBlock onPress={() => navigation.navigate('Investiments')}>
          <InvestimentBlock>
            <MaterialIcons name="trending-up" size={82} color={colors.prim1} />
            <InvestimentName>Investimentos</InvestimentName>
          </InvestimentBlock>
        </InsideBlock>
        <InsideBlock>
          <LoanBlock>
            <MaterialIcons
              name="compare-arrows"
              size={82}
              color={colors.prim2}
            />
            <LoanName>Emprestimos</LoanName>
          </LoanBlock>
        </InsideBlock>
      </Blocks>
    </Container>
  );
}
