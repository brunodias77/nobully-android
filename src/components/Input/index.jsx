import React, { useState } from "react";
import { TextInputProps, Alert } from "react-native";
import { Container, InputText, IconContainer } from "./styles";
import { Feather } from '@expo/vector-icons';



const Input = ({
  iconName,
  sizeIcon,
  color,
  placeholder,
  keyboardType,
  value,
  onChangeText,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  function handleInputFocused() {
    setIsFocused(true);
  }
  function handleInputBlur() {
    setIsFocused(false);
  }
  return (
    <Container >
      <IconContainer style={{ borderBottomColor: isFocused ? '#dc1637' : 'transparent' }} >
        <Feather name={iconName} size={sizeIcon} color="#7a7a80" />
      </IconContainer>
      <InputText
        style={{ borderBottomColor: isFocused ? '#dc1637' : 'transparent' }}
        onChangeText={onChangeText}
        value={value}
        isFocused={isFocused}
        onFocus={handleInputFocused}
        onBlur={handleInputBlur}
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoCorrect={false}
        autoCapitalize="none"
      />
    </Container>
  );
};

export default Input;