import React from 'react';
import { View, StatusBar, Text } from 'react-native';

import { Container, Content, Title, SubTitle } from './styles';
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'

const Home = () => {
  return (<Container>
    <StatusBar backgroundColor="#1B1B1F" barStyle='light-content' />
    <Header />
    <Content>
      <Title>Ola, Bruno Dias</Title>
      <SubTitle>Não foi encontrado{"\n"}nenhum conflito em seu nome</SubTitle>
    </Content>
    <Footer />

  </Container>);
}

export default Home;