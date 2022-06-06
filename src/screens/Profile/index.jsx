import React from 'react';
import { Text, Image } from 'react-native'
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import { Container, ImagePerfil, ProfileText } from './styles';


export const Profile = () => {

  return <>
    <Header />
    <Container>
      <ImagePerfil source={{ uri: "https://pbs.twimg.com/profile_images/1520442359242272768/wTwWHRI9_400x400.jpg" }} />
      <ProfileText>Nome: {`Gabriele`}</ProfileText>
      <ProfileText>Email: {"gabriele@teste.com"}</ProfileText>
    </Container>
    <Footer />
  </>
};

