import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import auth from "@react-native-firebase/auth";
import Routes from "./src/routes/index";
import Home from "./src/screens/Home/index";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function createUser() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCreated) => {
        console.log("Deu certo");
      });
  }

  return <Home />;
}
