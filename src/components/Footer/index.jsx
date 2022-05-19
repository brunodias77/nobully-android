import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container } from './styles';
import { Feather } from "@expo/vector-icons"

const Footer = () => {
  return <Container>
    <TouchableOpacity>
      <Feather name="message-square" size={30} color="#ffff" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Feather name="home" size={30} color="#ffff" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Feather name="user" size={30} color="#ffff" />
    </TouchableOpacity>
  </Container>
}

export default Footer;