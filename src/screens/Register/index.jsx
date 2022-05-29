import React, { useState } from 'react';
import auth from "@react-native-firebase/auth";
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
import { useNavigation } from '@react-navigation/core'
import firestore from '@react-native-firebase/firestore';




const Register = () => {
  //animal
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const navigation = useNavigation();
  function handleRegister() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCreated) => {
        firestore().collection('users').add({
          name,
          email,
          password,
        }).then(() => navigation.navigate("Login")).catch(err => Alert.alert("Erro ao cadastrar o usuario"))

      }).catch(err => Alert.alert(err.message));
  }
  function createUser() {
    firestore().collection('users').add({
      name,
      email,
      password,
    }).then(() => Alert.alert("user criado com sucesso !")).catch(err => console.log(err.message))
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
          <Input value={name} onChangeText={setName} sizeIcon={30} iconName="mail" sizeIcon={30} iconName="user" placeholder="Digite o nome do aluno" />
          <Input value={email} onChangeText={setEmail} sizeIcon={30} iconName="mail" placeholder="E-mail" />
          <Input value={password} onChangeText={setPassword} sizeIcon={30} iconName="lock" placeholder="Senha" />
        </Form>

        <Button title="Cadastrar aluno" onPress={handleRegister} />

      </Container>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
}

export default Register;