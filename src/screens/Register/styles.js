import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  height: 100%;
  padding: 0 24px;
  background-color: #f4f5f6;
`;

export const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + 116}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(40)}px;
  color: #47474d;
`;
export const SubTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  color: #7a7a80;
  line-height: ${RFValue(25)}px;
  margin-top: 16px;
`;
export const Footer = styled.View``;
export const Form = styled.View`
  width: 100%;
  margin: 64px 0;
`;
