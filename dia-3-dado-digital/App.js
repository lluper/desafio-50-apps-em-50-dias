import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Vibration,
} from "react-native";

export default function App() {
  const [stateDado, setStateDado] = useState({
    one: false,
    two: false,
    tree: false,
    four: false,
    five: false,
    six: false,
    seven: false,
  });

  function jogarDado() {
    const randomNumber = Math.floor(Math.random() * 5);
    console.log("randomNumber", randomNumber);

    setDado(randomNumber);
    Vibration.vibrate();
  }

  function setDado(randomNumber) {
    const modelo = [
      {
        one: false,
        two: false,
        tree: false,
        four: true,
        five: false,
        six: false,
        seven: false,
      },
      {
        one: true,
        two: false,
        tree: false,
        four: false,
        five: false,
        six: false,
        seven: true,
      },
      {
        one: true,
        two: false,
        tree: false,
        four: true,
        five: false,
        six: false,
        seven: true,
      },
      {
        one: true,
        two: true,
        tree: false,
        four: false,
        five: false,
        six: true,
        seven: true,
      },
      {
        one: true,
        two: true,
        tree: false,
        four: true,
        five: false,
        six: true,
        seven: true,
      },
      {
        one: true,
        two: true,
        tree: true,
        four: false,
        five: true,
        six: true,
        seven: true,
      },
    ];

    setStateDado({ ...stateDado, ...modelo[randomNumber] });
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.dadoContainer}>
        <View style={styles.dadoLine}>
          <View style={styles.dadoItem}>
            <Text
              style={[
                styles.dadoItemText,
                stateDado.one ? styles.active : null,
              ]}
            ></Text>
          </View>
          <View style={styles.dadoItem}>
            <Text style={[styles.dadoItemText]}></Text>
          </View>
          <View style={styles.dadoItem}>
            <Text
              style={[
                styles.dadoItemText,
                stateDado.two ? styles.active : null,
              ]}
            ></Text>
          </View>
        </View>

        <View style={styles.dadoLine}>
          <View style={styles.dadoItem}>
            <Text
              style={[
                styles.dadoItemText,
                stateDado.tree ? styles.active : null,
              ]}
            ></Text>
          </View>
          <View style={styles.dadoItem}>
            <Text
              style={[
                styles.dadoItemText,
                stateDado.four ? styles.active : null,
              ]}
            ></Text>
          </View>
          <View style={styles.dadoItem}>
            <Text
              style={[
                styles.dadoItemText,
                stateDado.five ? styles.active : null,
              ]}
            ></Text>
          </View>
        </View>

        <View style={styles.dadoLine}>
          <View style={styles.dadoItem}>
            <Text
              style={[
                styles.dadoItemText,
                stateDado.six ? styles.active : null,
              ]}
            ></Text>
          </View>
          <View style={styles.dadoItem}>
            <Text style={[styles.dadoItemText]}></Text>
          </View>
          <View style={styles.dadoItem}>
            <Text
              style={[
                styles.dadoItemText,
                stateDado.seven ? styles.active : null,
              ]}
            ></Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonJogarContainer}>
        <TouchableOpacity
          style={styles.buttonJogarContainerOpacity}
          onPress={jogarDado}
        >
          <Text style={styles.buttonJogar}>Jogar o dado</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

var width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: width,
  },
  dadoContainer: {
    borderWidth: 1,
    width: width - 20,
    height: 300,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
  },
  dadoLine: {
    flexDirection: "row",
  },
  dadoItem: {
    width: width / 3,
    backgroundColor: "#f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  dadoItemText: {
    backgroundColor: "#fff",
    width: 200 / 3,
    height: 200 / 3,
    margin: 5,
    borderRadius: 100,
  },
  active: {
    backgroundColor: "#000",
  },
  buttonJogarContainer: {
    marginTop: 100,
    backgroundColor: "#000",
  },
  buttonJogarContainerOpacity: {
    width: width - 30,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonJogar: {
    color: "#fff",
    fontSize: 20,
    opacity: 1,
  },
});
