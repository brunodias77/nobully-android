import React from 'react';
import { Text, Image } from 'react-native'
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import { Container, ImagePerfil, ProfileText, ImagemPerfilNotPhoto } from './styles';
import { useData } from '../../hooks/useData'
import { FontAwesome } from '@expo/vector-icons';


export const Profile = () => {
  const { userAuth } = useData();
  const array = userAuth.split('@');
  const userName = array[0];

  return <>
    <Header />
    <Container>
      <ImagemPerfilNotPhoto>
        <FontAwesome name="user" size={150} color="#fff" />
      </ImagemPerfilNotPhoto>
      <ProfileText>Nome: {`${userName}`}</ProfileText>
      <ProfileText>Email: {`${userAuth}`}</ProfileText>
    </Container>
    <Footer />
  </>
};

