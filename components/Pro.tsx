import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import HomeHeader from "@/components/HomeHeader";
import FilaButton from "./Filabutton";

function ProScreen() {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <View style={{ paddingHorizontal: 18 }}>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 18,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ width: "60%" }}>
            <Text style={{ fontFamily: "Inter", fontSize: 18 }}>
              Bem vindo,{" "}
              <Text style={{ fontFamily: "InterSemiBold" }}>Henrique</Text> 👋
            </Text>
          </View>
          <View style={{ width: "40%" }}>
            <FilaButton />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    position: "relative",
    height: "100%",
  },
  button: {
    width: 120,
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonEnabled: {
    backgroundColor: "#4CAF50",
  },
  buttonDisabled: {
    backgroundColor: "#f44336",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProScreen;
