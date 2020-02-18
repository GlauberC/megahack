import React from 'react';
import {FlatList} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  TotalLoanView,
  TotalLoan,
  PayNowButton,
  PayNowButtonText,
  InstallmentTitle,
  Installment,
  BtnPay,
  ValueToPay,
  DueDate,
  ViewDue,
  DueTitle,
} from './styles';
import {colors} from '../../styles/mainStyles';

const installments = {
  next: {id: '000', value: '212,00', due: '10/03'},
  after: [
    {id: '001', value: '212,00', due: '10/04'},
    {id: '002', value: '212,00', due: '10/05'},
    {id: '003', value: '212,00', due: '10/06'},
    {id: '004', value: '212,00', due: '10/07'},
  ],
};

export default function Loan() {
  return (
    <Container>
      <TotalLoanView>
        <TotalLoan>R$ 1060,00</TotalLoan>
      </TotalLoanView>
      <InstallmentTitle>Próxima prestação:</InstallmentTitle>
      <Installment>
        <BtnPay>
          <MaterialIcons name="credit-card" size={24} color={colors.sec1} />
        </BtnPay>
        <ValueToPay>R$ {installments.next.value}</ValueToPay>
        <ViewDue>
          <DueTitle>Vencimento:</DueTitle>
          <DueDate>{installments.next.due}</DueDate>
        </ViewDue>
      </Installment>

      <InstallmentTitle>Prestações futuras:</InstallmentTitle>
      <FlatList
        data={installments.after}
        keyExtractor={item => item.id}
        ListFooterComponent={() => (
          <PayNowButton>
            <PayNowButtonText>Adiantar o pagamento</PayNowButtonText>
          </PayNowButton>
        )}
        renderItem={({item}) => (
          <Installment>
            <ValueToPay>R$ {item.value}</ValueToPay>
            <ViewDue>
              <DueTitle>Vencimento:</DueTitle>
              <DueDate>{item.due}</DueDate>
            </ViewDue>
          </Installment>
        )}
      />
    </Container>
  );
}
