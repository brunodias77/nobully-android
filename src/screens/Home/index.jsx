import React from 'react';
import { TextInput, Pressable, StatusBar, Modal, StyleSheet, View, Text } from 'react-native';
import { ModalHeader, Container, Content, Title, SubTitle, ButtonFloating } from './styles';
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import { Feather } from "@expo/vector-icons"
import { FontAwesome } from '@expo/vector-icons';

const Home = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  // React.useEffect(() => {
  //   handlePosts();
  // }, []);

  // async function handlePosts() {
  //   const posts = await firestore().collection("posts").get();
  //   console.log(posts);
  // }

  return (<Container>
    <StatusBar backgroundColor="#1B1B1F" barStyle='light-content' />
    <Header />
    <Content>
      <Title>Ola, Bruno Dias</Title>
      <SubTitle>Não foi encontrado{"\n"}nenhum conflito em seu nome</SubTitle>
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
          <ModalHeader>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <FontAwesome name="close" size={24} color="black" />
            </Pressable>
            <View>
              <Text>Titulo</Text>
              <TextInput style={styles.input} />
            </View>

          </ModalHeader>



          <Text>Qual o motivo do conflito</Text>
          <TextInput style={styles.textArea} />

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
    height: 400,
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
    borderRadius: 20,
    padding: 10,
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
  input: {
    borderRadius: 10,
    backgroundColor: '#eee',
    width: 100,
    padding: 10,
  },
  textArea: {
    borderRadius: 10,
    backgroundColor: '#eee',
    width: 100,
    height: 220,
    padding: 10,
  }
});

export default Home;