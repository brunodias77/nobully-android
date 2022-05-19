import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  height: 56px;
  margin-bottom: 8px;
  justify-content: center;
  flex-direction: row;
`;

export const IconContainer = styled.View`
  width: 55px;
  justify-content: center;
  align-items: center;
  background-color: #ffff;
  margin-right: 2px;
  border-bottom-width: 1px;
  border-bottom-color: transparent;
`;

export const InputText = styled.TextInput`
  flex: 1;
  background-color: #fff;
  padding: 0 20px;
  color: #7a7a80;
  font-size: ${RFValue(15)}px;
  border-bottom-width: 1px;
  border-bottom-color: transparent;
`;
