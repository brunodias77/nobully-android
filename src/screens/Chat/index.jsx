import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import Footer from '../../components/Footer/index'


const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      }, {
        "_id": "a6461a1e-9cf7-40a1-ab39-fd741325689f",
        "createdAt": new Date(),
        "text": "Gggg",
        "user": {
          "_id": 1,
        },
      },

    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
  console.log(messages);

  return (
    <>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}

      />
      <Footer />
    </>
  )
}

export default Chat;