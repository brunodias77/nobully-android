import { StatusBar } from "expo-status-bar";
import Inital from "./src/screens/Initial/index";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import auth from "@react-native-firebase/auth";

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

  return (
    <Inital />
    // <View style={styles.container}>
    //   <Text>Bruno respeite</Text>
    //   <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
    //   <TextInput
    //     placeholder="Senha"
    //     value={password}
    //     onChangeText={setPassword}
    //   />
    //   <Button title="enviar" onPress={createUser} />
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
