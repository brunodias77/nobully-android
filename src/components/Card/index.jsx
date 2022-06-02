import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core'
import { useData } from '../../hooks/useData'

const Card = ({ message }) => {
  const navigation = useNavigation();
  const { setMessage } = useData();


  function handleChat() {
    setMessage(message);
    navigation.navigate("Chat");
  }
  return <TouchableOpacity onPress={handleChat}>
    <View style={styles.card}>
      <Text style={styles.text}>{message}</Text>
    </View>
  </TouchableOpacity>


}

export default Card;

const styles = StyleSheet.create({
  card: {
    margin: 20,
    width: 300,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  text: {
    fontSize: 20,
  }
})