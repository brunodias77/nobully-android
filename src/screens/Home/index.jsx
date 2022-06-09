import React from 'react';
import { Alert, TextInput, Pressable, StatusBar, Modal, StyleSheet, View, Text } from 'react-native';
import { Container, Content, Title, SubTitle, ButtonFloating } from './styles';
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import { Feather } from "@expo/vector-icons"
import { FontAwesome } from '@expo/vector-icons';
import firestore from '@react-native-firebase/firestore';
import Card from '../../components/Card'
import { useData } from '../../hooks/useData'


const Home = () => {

  const [orderHome, setOrderHome] = React.useState(null);
  const [conflict, setConflict] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const { userAuth } = useData();
  const array = userAuth.split('@');
  const userName = array[0];

  React.useEffect(() => {
    handleOrders();
  }, [])

  async function handleOrders() {
    const orders1 = firestore().collection(`${userAuth}`)
      .orderBy("createdAt", "asc").onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return {
            "createdAt": new Date(),
            "text": `${doc.data().message}`,
            "userName": doc.data().userName,
          }
        })
        if (data.length === 0) {
          setOrderHome(null)
        } else {
          setOrderHome(data[0].text)
        }
        return () => subscriber();
      })

  }


  function handleSubmit() {
    if (conflict !== " ") {
      firestore().collection(`${userAuth}`).add({
        message: `${conflict}`,
        userName: `${userAuth}`,
        createdAt: firestore.FieldValue.serverTimestamp()

      }).then(() => {
        Alert.alert("messagem salva com sucesso !");
        setModalVisible(!modalVisible);
      }).catch(err => console.log(err.message))
    } else {
      Alert.alert("Preencha os dados corretamente")
    }

  }
  return (<Container>
    <StatusBar backgroundColor="#1B1B1F" barStyle='light-content' />
    <Header />
    <Content>
      <Title>Ola, {`${userName}`}</Title>
      {/* {orderHome && orderHome.map((element, index) => <Card key={index} message={element.text} />)} */}
      {orderHome == null ? <SubTitle>Não foi encontrado{'\n'}nenhum conflito em seu nome</SubTitle> : <Card message={orderHome} />}
    </Content>

    <ButtonFloating onPress={() => setModalVisible(!modalVisible)}>
      <Feather name="plus-circle" size={50} color="#dc1637" />
    </ButtonFloating>
    <Footer iconNameHome="home-variant" />

    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable
            style={styles.button}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <FontAwesome name="close" size={24} color="black" />
          </Pressable>
          <Text style={styles.styleText}>Qual o motivo do conflito</Text>
          <TextInput style={styles.textArea} value={conflict} onChangeText={setConflict} />
          <Pressable onPress={handleSubmit} style={styles.buttonSubmit}>
            <Text style={styles.textSubmit}>Enviar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>

  </Container >);
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    width: 300,
    height: 420,
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
  button: {
    borderRadius: 5,
    padding: 10,
  },
  buttonSubmit: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#dc1637",
    marginVertical: 10,

  },
  textSubmit: {
    color: '#fff',
  },
  buttonClose: {
    backgroundColor: "#fff",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  styleText: {
    marginTop: 10,
    textAlign: 'center',
  },
  input: {
    borderRadius: 10,
    backgroundColor: '#eee',
    width: 250,
    padding: 10,
  },
  textArea: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#eee',
    width: 250,
    height: 180,
    padding: 10,
  }
});

export default Home;