import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
} from "react-native";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);
  const [message, setMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function calculation() {
    const calc = peso / ((altura / 100) ^ 2);
    setImc(calc);
    showImc(calc);
  }

  function showImc(imc) {
    switch (true) {
      case imc <= 18.5:
        setMessage(" MENOR QUE 18,5	MAGREZA	0");
        break;
      case imc > 18.5 && imc <= 24.9:
        setMessage("ENTRE 18,5 E 24,9	NORMAL	0");
        break;
      case imc > 25.0 && imc <= 29.9:
        setMessage(" ENTRE 25,0 E 29,9	SOBREPESO	I");
        break;
      case imc > 30.0 && imc <= 39.9:
        setMessage("ENTRE 30,0 E 39,9	OBESIDADE	II");
        break;
      case imc >= 40:
        setMessage(" MAIOR QUE 40,0	OBESIDADE GRAVE	III");
        break;
    }
  }

  return (
    <>
     
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
       
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}> MENOR QUE 18,5	MAGREZA	0</Text>
            <Text style={styles.modalText}>ENTRE 18,5 E 24,9	NORMAL	0</Text>
            <Text style={styles.modalText}>ENTRE 25,0 E 29,9	SOBREPESO	I</Text>
            <Text style={styles.modalText}> ENTRE 30,0 E 39,9	OBESIDADE	II</Text>
            <Text style={styles.modalText}> MAIOR QUE 40,0	OBESIDADE GRAVE	III</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
     

      <SafeAreaView style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.appName}>App para calcular seu IMC</Text>

          <View style={styles.helper}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              style={styles.helperButton}
            >
              <Text style={styles.helperButtonText}>?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Peso</Text>
          <TextInput
            onChangeText={(peso) => setPeso(peso)}
            keyboardType="number-pad"
            value={peso}
            style={styles.input}
            placeholder="Entre com o peso"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Altura</Text>
          <TextInput
            onChangeText={(altura) => setAltura(altura)}
            keyboardType="number-pad"
            value={altura}
            style={styles.input}
            placeholder="Entre com a altura em  centimetros"
          />
        </View>

        <View style={styles.buttonCalculation}>
          <Button
            style={styles.calculation}
            title="Calcular"
            onPress={calculation}
          />
        </View>

        {imc ? (
          <View style={styles.result}>
            <Text style={styles.resultText}> Seu IMC é : {imc.toFixed(2)}</Text>
            <Text style={styles.resultText}>{message}</Text>
          </View>
        ) : null}
      </SafeAreaView>
    </>
  );
}

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: width-20,
    height: height-200,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 4,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: width,
    paddingTop: 22,
  },
  topBar: {
    height: 60,
    width: width,
    backgroundColor: "#b7d3e9",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    marginBottom: 20,
  },
  appName: {
    fontSize: 17,
  },
  helper: {
    width: 40,
  },
  helperButton: {
    borderRadius: 50,
    width: 40,
    height: 40,
    backgroundColor: "#3b99e3",
    alignItems: "center",
    justifyContent: "center",
  },
  helperButtonText: {
    fontSize: 20,
  },
  inputGroup: {
    width: width - 40,
    height: 100,
  },
  inputLabel: {
    fontSize: 25,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#696969",
    paddingLeft: 20,
  },
  buttonCalculation: {
    width: width - 40,
  },
  calculation: {},
  result: {
    width: width - 40,
    minHeight: 70,
    padding: 20,
    margin: 20,
    borderWidth: 1,
    borderColor: "#696969",
  },
  resultText: {
    fontSize: 15,
  },
});
