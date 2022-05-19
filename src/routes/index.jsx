import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthRoutes from "./auth.routes.jsx";
import Header from '../components/Header'

const Routes = () => {
  return (
    <NavigationContainer>
      <Header />
      <AuthRoutes />
    </NavigationContainer>
  );
};

export default Routes;
