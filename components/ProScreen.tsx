import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { io } from "socket.io-client";

const socket = io("http://192.168.1.60:3000");

function ProScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [clientData, setClientData] = useState<{ clientId: string; clientName: string; clientDetails: string } | null>(null);

  // ProScreen.tsx - Melhorias na Verificação de Erros

const handlePress = async () => {
  try {
    const proID = await AsyncStorage.getItem("user");
    if (proID) {
      console.log("Profissional ID:", proID);
      socket.emit("join_pro_queue", proID);
      Alert.alert("Fila", "Você entrou na fila para atender.");
      setIsEnabled(true); // Atualizar estado de habilitação aqui
    } else {
      Alert.alert("Erro", "Não foi possível recuperar o ID do profissional.");
    }
  } catch (error) {
    Alert.alert("Erro", "Erro ao acessar o armazenamento local.");
    console.error("Erro ao acessar AsyncStorage:", error);
  }
};

useEffect(() => {
  socket.on("assigned", (data) => {
    if (data) {
      console.log("Cliente atribuído:", data);
      setClientData({
        clientId: data.clientId,
        clientName: data.clientName,
        clientDetails: data.clientDetails,
      });
      Alert.alert("Atendimento", `Você está atendendo o cliente: ${data.clientName}`);
    } else {
      console.log("Dados do cliente não recebidos corretamente.");
    }
  });

  return () => {
    socket.off("assigned");
  };
}, []);



  return (
    <View style={styles.container}>
      <Text>Você está</Text>
      <Pressable onPress={handlePress}>
        <Text style={isEnabled ? styles.textPressed : styles.text}>
          {isEnabled ? "Na fila" : "Fora da Fila"}
        </Text>
      </Pressable>

      {clientData && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Cliente Atribuído:</Text>
          <Text>Nome: {clientData.clientName}</Text>
          <Text>Detalhes: {clientData.clientDetails}</Text>
          <Pressable onPress={() => Alert.alert('Iniciar Atendimento', 'Você iniciou o atendimento')}>
            <Text style={styles.cardButton}>Iniciar Atendimento</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
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
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginTop: 20,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardButton: {
    marginTop: 10,
    color: "#FF6969",
    fontWeight: "bold",
  },
});

export default ProScreen;
