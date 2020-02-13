import React, {useState, useRef} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {ErrGlobalMsg, ViewErrGlobalMsg} from '../../components/ErrMsg';

import {
  Container,
  Header,
  TitleView,
  TitleUp,
  TitleDown,
  SubTitle,
  InputsView,
  Footer,
  ViewBtn,
  BtnCadastro,
  BtnCadastroText,
} from './styles';
import Btn from '../../components/Btn';
import {colors} from '../../styles/mainStyles';
import InputIcon from '../../components/InputIcon';

export default function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errEmail, setErrEmail] = useState('');
  const [errPassword, setErrPassword] = useState('');
  const [errGlobal, setErrGlobal] = useState('');
  const [loading] = useState(false);

  const passwordRef = useRef();

  function handleRegister() {
    navigation.navigate('SignUp');
  }

  function setErrNull() {
    setErrEmail('');
    setErrPassword('');
    setErrGlobal('');
  }
  async function handleSubmit() {
    setErrNull();
    if (email === '') {
      setErrEmail('Esse campo é obrigatório');
    }
    if (password === '') {
      setErrPassword('Esse campo é obrigatório');
    } else if (password.length < 6) {
      setErrPassword('O campo password requer no mínimo 6 caracteres');
    }
    if (!email.match(/\w+@\w+/gi)) {
      setErrEmail('Digite um email válido');
    } else if (password.length >= 6) {
      navigation.navigate('LoanOrInvestment');
    }
  }
  return (
    <Container>
      <Header>
        <TitleView>
          <TitleUp>Nome do</TitleUp>
          <TitleDown>App</TitleDown>
        </TitleView>
        <SubTitle>O investimento de um é a esperança do outro</SubTitle>
      </Header>
      <InputsView>
        <InputIcon
          iconName="email"
          keyboardType="email-address"
          err={errEmail}
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}>
          Digite seu email
        </InputIcon>
        <InputIcon
          iconName="lock-outline"
          secureTextEntry
          err={errPassword}
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}>
          Digite sua senha
        </InputIcon>
      </InputsView>
      <Footer>
        {errGlobal !== '' && (
          <ViewErrGlobalMsg>
            <MaterialIcons
              name="error-outline"
              size={18}
              color={colors.prim2}
            />
            <ErrGlobalMsg>{errGlobal}</ErrGlobalMsg>
          </ViewErrGlobalMsg>
        )}
        <ViewBtn>
          <BtnCadastro onPress={handleRegister}>
            <BtnCadastroText>Não tenho conta</BtnCadastroText>
          </BtnCadastro>
          <Btn loading={loading} onPress={handleSubmit}>
            Entrar
          </Btn>
        </ViewBtn>
      </Footer>
    </Container>
  );
}
