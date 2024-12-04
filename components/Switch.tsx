import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ToggleOptionExample = () => {
  const [selectedOption, setSelectedOption] = useState<"Client" | "Pro">(
    "Client"
  );

  const handleOptionChange = (option: "Client" | "Pro") => {
    setSelectedOption(option);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        gap: 12,
      }}
    >
      <TouchableOpacity
        onPress={() => handleOptionChange("Client")}
        style={styles.button}
      >
        {selectedOption === "Client" ? (
          <View
            style={{
              backgroundColor: "#FF6969",
              height: 10,
              width: 10,
              borderRadius: 100,
            }}
          ></View>
        ) : (
          <View></View>
        )}
      </TouchableOpacity>
      <Text>Client</Text>

      <TouchableOpacity
        onPress={() => handleOptionChange("Pro")}
        style={styles.button}
      >
        {selectedOption === "Pro" ? (
          <View
            style={{
              backgroundColor: "#FF6969",
              height: 10,
              width: 10,
              borderRadius: 100,
            }}
          ></View>
        ) : (
          <View></View>
        )}
      </TouchableOpacity>
      <Text>Pro</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 20,
    width: 20,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default ToggleOptionExample;
