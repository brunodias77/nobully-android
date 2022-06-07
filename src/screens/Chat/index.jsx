import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import Footer from '../../components/Footer/index'
import firestore from '@react-native-firebase/firestore';
import { useData } from '../../hooks/useData'

const Chat = () => {
  const { message } = useData();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const orders1 = firestore().collection("bruno@teste.com").onSnapshot(querySnapshot => {
      const data = querySnapshot.docs.map(doc => {
        if (doc.data().userName === 'bruno@teste.com') {
          return {
            "_id": 2,
            "createdAt": new Date(),
            "text": `${doc.data().message}`,
            "user": {
              "_id": 1,
            },
          }
        }

      })
      console.log(data);
      setMessages([
        ...data,
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
        // {
        //   "_id": 2,
        //   "createdAt": new Date(),
        //   "text": `${message}`,
        //   "user": {
        //     "_id": 1,
        //   },
        // },
      ])
      return () => subscriber();
    })


  }, [])

  const onSend = useCallback((messages = []) => {
    console.log(messages)
    firestore()
      .collection('bruno@teste.com')
      .add({
        message: messages[0].text,
        userName: 'bruno@teste.com',
        createdAt: firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        console.log('User added!');
      });
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