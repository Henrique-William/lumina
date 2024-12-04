import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Usando a navegação
import { useRouter } from "expo-router";



const CallPage: React.FC = () => {
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const navigation = useRouter();

  // Função para alternar o estado da câmera
  const toggleCamera = () => {
    setIsCameraOn((prevState) => !prevState);
  };

  // Função para alternar o estado do microfone
  const toggleMic = () => {
    setIsMicOn((prevState) => !prevState);
  };

  // Função para desligar a chamada
  const endCall = () => {
    Alert.alert("Chamada finalizada", "Você encerrou a chamada.");
    navigation.push("/(tabs)")
    
  };

  return (
    <View style={styles.container}>
      {/* Foto da pessoa */}
      <Image
        source={{
          uri: "https://via.placeholder.com/150", // Substitua pelo URI da foto real
        }}
        style={styles.avatar}
      />

      {/* Nome da pessoa */}
      <Text style={styles.name}>João Silva</Text>
      <Text style={styles.status}>Chamada em andamento...</Text>

      {/* Botões de controle */}
      <View style={styles.controls}>
        <Pressable style={styles.button} onPress={toggleCamera}>
          <Text style={styles.buttonText}>
            {isCameraOn ? "Desligar Câmera" : "Ligar Câmera"}
          </Text>
        </Pressable>

        <Pressable style={styles.button} onPress={toggleMic}>
          <Text style={styles.buttonText}>
            {isMicOn ? "Desligar Microfone" : "Ligar Microfone"}
          </Text>
        </Pressable>

        {/* Botão para desligar a chamada */}
        <Pressable style={[styles.button, styles.endCallButton]} onPress={endCall}>
          <Text style={styles.buttonText}>Desligar Chamada</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#4CAF50",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  status: {
    fontSize: 16,
    color: "#777",
    marginBottom: 30,
  },
  controls: {
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 50,
    marginBottom: 15,
    width: 200,
    alignItems: "center",
  },
  endCallButton: {
    backgroundColor: "#FF5722", // Cor laranja para indicar a ação de finalizar
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CallPage;