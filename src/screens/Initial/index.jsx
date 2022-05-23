import React from 'react';
import { Image, StatusBar } from "react-native";
import { useNavigation } from '@react-navigation/core'
import { Container, Header, Title, Content, Footer } from "./styles";
import logo from '../../assets/Logo.png';
import Button from '../../components/Button/index'

const Initial = () => {
  const navigation = useNavigation();

  return <Container>
    <StatusBar backgroundColor="#1B1B1F" barStyle='light-content' />
    <Image source={logo} style={{ marginBottom: 100 }}></Image>
    <Header>
      <Title>Seja{"\n"}Bem-vindo</Title>
      <Content>Clique no botão abaixo{'\n'}para fazer o login</Content>

    </Header>
    <Footer>
      <Button title="Login" color="#DC1637" onPress={() => navigation.navigate("Login")} />
      <Button title="Cadastar" color="#DC1637" onPress={() => navigation.navigate("Register")} />

    </Footer>
  </Container>
}

export default Initial;