import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthRoutes from "./auth.routes.jsx";

const Routes = () => {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
};

export default Routes;
