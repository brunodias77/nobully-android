import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container } from './styles';
import { Feather } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/core'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Footer = ({ iconNameMessage = "message-reply-outline", iconNameHome = "home-variant-outline" }) => {
  const navigation = useNavigation();


  return <Container>
    <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
      <MaterialCommunityIcons name={iconNameMessage} size={30} color="#ffff" />
    </TouchableOpacity>
    <TouchableOpacity>
      <MaterialCommunityIcons onPress={() => navigation.navigate("Home")} name={iconNameHome} size={30} color="#fff" />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
      <Feather name="user" size={30} color="#ffff" />
    </TouchableOpacity>
  </Container>
}

export default Footer;