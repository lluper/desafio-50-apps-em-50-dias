import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Vibration,
} from "react-native";

export default function App() {
  const [countUserA, setCountUserA] = useState(0);
  const [countUserB, setCountUserB] = useState(0);
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.userPainel,
          {
            transform: [{ rotateZ: "180deg" }],
          },
        ]}
      >
        <Text style={styles.counter}>{countUserA}</Text>
        <View style={styles.counterButtonsGroup}>
          <View style={styles.counterButtons}>
            <TouchableOpacity
              onPress={() => {
                setCountUserA(countUserA <= 0 ? 0 : countUserA - 1);
                Vibration.vibrate();
              }}
              style={styles.counterButton}
            >
              <Text style={styles.counterButtonText}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.counterButtons}>
            <TouchableOpacity
              onPress={() => {
                setCountUserA(countUserA + 1);
                Vibration.vibrate();
              }}
              style={styles.counterButton}
            >
              <Text style={styles.counterButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View>
        <Text
          style={[
            styles.appName,
            {
              transform: [{ rotateZ: "180deg" }],
              borderTopWidth: 1,
            },
          ]}
        >
          Marcador de pontos p/ truco
        </Text>

        <Text style={styles.appName}>Marcador de pontos p/ truco</Text>
      </View>

      <View style={[styles.userPainel, styles.userPainelLast]}>
        <Text style={styles.counter}>{countUserB}</Text>
        <View style={styles.counterButtonsGroup}>
          <View style={styles.counterButtons}>
            <TouchableOpacity
              onPress={() => {
                setCountUserB(countUserB <= 0 ? 0 : countUserB - 1);

                Vibration.vibrate();
              }}
              style={styles.counterButton}
            >
              <Text style={styles.counterButtonText}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.counterButtons}>
            <TouchableOpacity
              onPress={() => {
                setCountUserB(countUserB + 1);
                Vibration.vibrate();
              }}
              style={styles.counterButton}
            >
              <Text style={styles.counterButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

var width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#daf1fc",
    alignItems: "center",
    justifyContent: "space-around",
  },
  userPainel: {
    alignItems: "center",
    minWidth: width / 2,
    minHeight: 30,
    backgroundColor: "#93DCFF",
  },
  appName: {
    fontSize: 20,
  },
  counter: {
    fontSize: 60,
  },
  counterButtonsGroup: {
    flexDirection: "row",
  },
  counterButtons: {
    margin: 10,
    width: width / 3,
  },
  counterButton: {
    backgroundColor: "#00ACFF",
    alignItems: "center",
    justifyContent: "center",
  },
  counterButtonText: {
    fontSize: 90,
  },
});
