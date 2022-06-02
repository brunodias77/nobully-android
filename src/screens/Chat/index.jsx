import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import Footer from '../../components/Footer/index'
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';
import { useData } from '../../hooks/useData'

const Chat = () => {
  const { message } = useData();
  const [messages, setMessages] = useState([]);
  console.log(message)
  useEffect(() => {
    setMessages([

      {
        _id: 1,
        text: 'Olá, recebemos sua reclamação e logo resolveremos esse conflito',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        "_id": "a6461a1e-9cf7-40a1-ab39-fd741325689f",
        "createdAt": new Date(),
        "text": `${message}`,
        "user": {
          "_id": 1,
        },
      },


    ])

  }, [])

  const onSend = useCallback((messages = []) => {
    console.log(messages)
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}

      />
      <Footer iconNameMessage="message-reply" />
    </>
  )
}

export default Chat;