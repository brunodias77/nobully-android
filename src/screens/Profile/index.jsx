import React from 'react';
import { Text, Image } from 'react-native'
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import { Container, ImagePerfil, ProfileText } from './styles';
import { useData } from '../../hooks/useData'


export const Profile = () => {
  const { userAuth } = useData();

  return <>
    <Header />
    <Container>
      <ImagePerfil source={{ uri: "https://pbs.twimg.com/profile_images/1520442359242272768/wTwWHRI9_400x400.jpg" }} />
      <ProfileText>Nome: {`${userAuth}`}</ProfileText>
      <ProfileText>Email: {`${userAuth}`}</ProfileText>
    </Container>
    <Footer />
  </>
};

