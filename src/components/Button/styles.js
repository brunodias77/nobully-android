import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex: 1;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;
export const TitleButton = styled.Text`
  font-size: ${RFValue(18)}px;
`;
