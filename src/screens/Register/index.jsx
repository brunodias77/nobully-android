import React from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  StatusBar,
} from "react-native";
import Input from '../../components/Input/index'
import Button from '../../components/Button/index'
import { Container, Title, Header, SubTitle, Form } from "./styles";



const Register = () => {
  function handleRegister(){
    
  }
  return <KeyboardAvoidingView behavior="position" enabled>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar backgroundColor="#f4f5f6" barStyle="dark-content"
        />

        <Header>
          <Title>Crie sua{"\n"}conta.</Title>
          <SubTitle>
            Faça seu cadastro de{"\n"}forma ráppida e fácil.
          </SubTitle>
        </Header>

        <Form>
          <Input sizeIcon={30} iconName="user" placeholder="Digite o nome do aluno" />
          <Input sizeIcon={30} iconName="mail" placeholder="E-mail" />
          <Input sizeIcon={30} iconName="lock" placeholder="Senha" />
        </Form>

        <Button title="Cadastrar aluno" onPress={() => { }} />

      </Container>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
}

export default Register;