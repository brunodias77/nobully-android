import React from 'react';
import { View } from 'react-native';

import { Container, TitleButton } from './styles';

const Button = ({ title, color, titleColor }) => {
  return <Container style={{ backgroundColor: color ? color : "#DC1637" }}>
    <TitleButton style={{ color: titleColor ? titleColor : "#fff" }}>{title}</TitleButton>
  </Container>
}

export default Button;