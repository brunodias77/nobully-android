import React, { useEffect, useState } from 'react';
import {
  Button, View, Text, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Footer from '../../components/Footer';
import { useData } from '../../hooks/useData'

const NewChat = () => {
  const { userAuth } = useData();
  const [messages, setMessages] = useState(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    const orders1 = firestore().collection(`${userAuth}`)
      .orderBy("createdAt", "asc").onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return {
            "createdAt": new Date(),
            "text": `${doc.data().message}`,
            "userName": doc.data().userName,
          }
        })
        console.log(data);
        setMessages(data)
        return () => subscriber();
      })
  }, [])



  function createNewMessage() {
    firestore()
      .collection(`${userAuth}`)
      .add({
        message: input,
        userName: `${userAuth}`,
        createdAt: firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        console.log('User added!');
      });
    setMessages([...messages, input]);
    setInput("");

  }

  return <View style={styles.container}>
    <ScrollView style={styles.containerScrollView}>
      <View>
        {messages && messages.map((element, index) => <Text style={element.userName === userAuth ? styles.myMessage : styles.nobullyMessage} key={index}>{element.text}</Text>)}
      </View>
    </ScrollView>
    <View style={styles.input}>
      <TextInput onChangeText={setInput} value={input} style={styles.inputStyle} placeholder="Digite sua mensagem" />
      <Button onPress={createNewMessage} title="Enviar"></Button>
    </View>
    <Footer />
  </View >

}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff"
  },
  containerScrollView: {
    height: 300,
    flexDirection: 'column',
    marginTop: 20,
  },
  myMessage: {
    backgroundColor: "#1E90FF",
    padding: 10,
    marginVertical: 10,
    marginRight: 1,
    marginLeft: 110,
    borderRadius: 20,
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  nobullyMessage: {
    backgroundColor: "#dc1637",
    padding: 10,
    marginVertical: 10,
    marginRight: 110,
    marginLeft: 10,
    borderRadius: 20,
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  input: {
    flexDirection: 'row',
    justifyContent: "space-between",
    backgroundColor: "#A9A9A9",
    paddingHorizontal: 40,
    paddingVertical: 2,
  },
  inputStyle: {
    fontSize: 20,
  }
})

export default NewChat;


