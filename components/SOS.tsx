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
import socket from "@/services/socket";


const SOS: React.FC = () => {
  const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null);

  // useEffect(() => {
  //   socket.on('connect', () => {
  //     console.log('Conectado ao servidor Socket.io');
  //   });

  //   // Limpar conexões ao desmontar o componente
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  // Função para ser chamada após 3 segundos de pressão
  const handleLongPressAction = () => {
    // socket.emit('queue', { message: 'Você entrou na fila' });
    Alert.alert("SOS Enviado", "Sua solicitação foi enviada ao servidor.");
    console.log("SOS Enviado", "Sua solicitação foi enviada ao servidor.");
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
