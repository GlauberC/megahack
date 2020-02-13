import React, {useState, useRef} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {ErrGlobalMsg, ViewErrGlobalMsg} from '../../components/ErrMsg';

import {
  Container,
  InputsView,
  Footer,
  ViewBtn,
  BtnCadastro,
  BtnCadastroText,
} from './styles';
import Btn from '../../components/Btn';
import {colors} from '../../styles/mainStyles';

import InputIcon from '../../components/InputIcon';

export default function SignUp({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errName, setErrName] = useState('');
  const [errEmail, setErrEmail] = useState('');
  const [errPassword, setErrPassword] = useState('');
  const [errConfirmPassword, setErrConfirmPassword] = useState('');
  const [errGlobal, setErrGlobal] = useState('');
  const [loading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  function handleLogin() {
    navigation.navigate('SignIn');
  }

  function setErrNull() {
    setErrName('');
    setErrEmail('');
    setErrPassword('');
    setErrConfirmPassword('');
    setErrGlobal('');
  }
  async function handleSubmit() {
    setErrNull();
    if (name === '') {
      setErrName('Esse campo é obrigatório');
    } else if (name.length < 6) {
      setErrName('Digite um nome válido');
    }
    if (email === '') {
      setErrEmail('Esse campo é obrigatório');
    }
    if (password === '') {
      setErrPassword('Esse campo é obrigatório');
    } else if (password.length < 6) {
      setErrPassword('O campo password requer no mínimo 6 caracteres');
    }
    if (confirmPassword === '') {
      setErrConfirmPassword('Esse campo é obrigatório');
    }
    if (confirmPassword && password !== confirmPassword) {
      setErrConfirmPassword('As senhas não batem, digite novamente');
    } else if (!email.match(/\w+@\w+/gi)) {
      setErrEmail('Digite um email válido');
    }
  }
  return (
    <Container>
      <InputsView>
        <InputIcon
          iconName="person"
          err={errName}
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
          value={name}
          onChangeText={setName}>
          Digite seu nome
        </InputIcon>
        <InputIcon
          iconName="email"
          keyboardType="email-address"
          err={errEmail}
          autoCorrect={false}
          ref={emailRef}
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
          returnKeyType="next"
          onSubmitEditing={() => confirmPasswordRef.current.focus()}
          value={password}
          onChangeText={setPassword}>
          Digite sua senha
        </InputIcon>
        <InputIcon
          iconName="verified-user"
          secureTextEntry
          err={errConfirmPassword}
          ref={confirmPasswordRef}
          value={confirmPassword}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          onChangeText={setConfirmPassword}>
          Repita a sua senha
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
          <BtnCadastro onPress={handleLogin}>
            <BtnCadastroText>Já tenho uma conta</BtnCadastroText>
          </BtnCadastro>
          <Btn loading={loading} onPress={handleSubmit}>
            Cadastrar
          </Btn>
        </ViewBtn>
      </Footer>
    </Container>
  );
}
