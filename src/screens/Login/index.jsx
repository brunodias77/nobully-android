import React from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Input from '../../components/Input/index'
import Button from '../../components/Button/index'
import { Container, Title, Header, SubTitle, Form } from "./styles";



const Login = () => {
  return <KeyboardAvoidingView behavior="position" enabled>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Estamos{"\n"}quase lá.</Title>
          <SubTitle>
            Faça seu login para tornar{"\n"}a escola um lugar melhor.
          </SubTitle>
        </Header>

        <Form>
          <Input sizeIcon={30} iconName="mail" placeholder="E-mail" />
          <Input sizeIcon={30} iconName="lock" placeholder="Senha" />
        </Form>

        <Button title="Login" onPress={() => { }} />
        <Button
          titleColor="#7A7A80"
          color=" #F4F5F6"
          title="Esqueci minha senha"
          onPress={() => { }}
        />
      </Container>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
}

export default Login;