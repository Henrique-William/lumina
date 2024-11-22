import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import socket from "@/services/socket";

function ProScreen() {
  const [isEnabled, setIsEnabled] = useState(false);

  const handlePress = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <View>
        <Text></Text>
      <View style={styles.container}>
        <Text>Você está</Text>
        <Pressable onPress={handlePress}>
          <Text style={isEnabled ? styles.textPressed : styles.text}>
            {isEnabled ? "Na fila" : "Fora da Fila"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 140,
    marginVertical: 20,
    marginHorizontal: 18,
    backgroundColor: "#F5F5FA",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    borderRadius: 20,
  },
  textPressed: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "#FF6969",
    color: "#fff",
    borderRadius: 4,
    fontFamily: "InterSemiBold",
  },
  text: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "#828282",
    color: "#fff",
    borderRadius: 4,
    fontFamily: "InterSemiBold",
  },
});

export default ProScreen;
