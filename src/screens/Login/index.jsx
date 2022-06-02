import React, { useState } from 'react';
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
import auth from '@react-native-firebase/auth';
import { useData } from '../../hooks/useData'

const Login = () => {
  const { numero } = useData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleLogin() {
    if (email && password !== " ") {
      auth().signInWithEmailAndPassword(email, password).then(() => {
        Alert.alert("Logado com sucesso")
        navigation.navigate("Home")
      }).catch(err => console.log(err))
    } else {
      Alert.alert("Preencha os campo corretamente")
    }


  }
  const navigation = useNavigation();
  return <KeyboardAvoidingView behavior="position" enabled>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar backgroundColor="#f4f5f6" barStyle="dark-content"
        />

        <Header>
          <Title>Estamos{"\n"}quase lá.</Title>
          <SubTitle>
            Faça seu login para tornar{"\n"}a escola um lugar melhor.
          </SubTitle>
        </Header>

        <Form>
          <Input value={email} onChangeText={setEmail} sizeIcon={30} iconName="mail" placeholder="E-mail" />
          <Input value={password} onChangeText={setPassword} sizeIcon={30} iconName="lock" placeholder="Senha" />
        </Form>

        <Button title="Login" onPress={handleLogin} />
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