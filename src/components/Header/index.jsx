import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, Date } from './styles';
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return <Container>
    <TouchableOpacity >
      <Ionicons name="arrow-back-outline" size={30} color="#dc1634" />
    </TouchableOpacity>
    <Date>19 de maio de 2022</Date>
  </Container>

}
export default Header;