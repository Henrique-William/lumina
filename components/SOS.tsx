import React, { useState, useEffect } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  GestureResponderEvent,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { io } from 'socket.io-client';
import AsyncStorage from "@react-native-async-storage/async-storage";

const socket = io('http://192.168.1.60:3000');

const SOS: React.FC = () => {
  const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null);

  // Função para ser chamada após 3 segundos de pressão
  // ClientScreen.tsx - Melhorias na Verificação de Erros

const handleLongPressAction = async() => {
  try {
    const userID = await AsyncStorage.getItem("user");
    if (userID) {
      socket.emit('join_client_queue', userID);
      Alert.alert('Fila', 'Você entrou na fila de atendimento.');
      console.log("SOS Enviado", "Sua solicitação foi enviada ao servidor.");
      
    } else {
      Alert.alert("Erro", "Não foi possível recuperar o ID do usuário.");
    }
  } catch (error) {
    Alert.alert("Erro", "Erro ao acessar o armazenamento local.");
    console.error("Erro ao acessar AsyncStorage:", error);
  }
};


  const handlePressIn = (event: GestureResponderEvent) => {
    const timer = setTimeout(handleLongPressAction, 3000); // 3 segundos
    setPressTimer(timer);
  };

  const handlePressOut = (event: GestureResponderEvent) => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      setPressTimer(null);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#e2e5ec", "#fff"]}
        start={{ x: 0.5, y: 0.5 }}
        end={{ x: 1, y: 1 }}
        style={{
          width: 270,
          height: 270,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 1000,
        }}
      >
        <LinearGradient
          colors={["#F0A457", "#FF6969"]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 1, y: 1 }}
        >
          <Pressable
            style={styles.sosBtn}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Text style={styles.sosText}>SOS</Text>
            <Text style={styles.sosSubtitle}>Pressione por 3 segundos</Text>
          </Pressable>
        </LinearGradient>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 320,
    width: "100%",
    marginVertical: 20,
    backgroundColor: "#F5F5FA",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  gradient: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 14,
  },
  sosBtn: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  sosText: {
    color: "#fff",
    fontFamily: "InterBold",
    fontSize: 38,
    userSelect: "none" as const,
  },
  sosSubtitle: {
    fontFamily: 'Inter',
    color: '#fff',
    userSelect: "none" as const,
  },
  btnContainer: {},
});

export default SOS;
