import { StyleSheet, View, Text, Image, ActivityIndicator  } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import ClientScreen from "@/components/ClientScreen";
import ProScreen from "@/components/ProScreen";
import HomeHeader from "@/components/HomeHeader";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

let typeUser: "Pro" | "Client" = "Client";

function Home() {
  const [email, setEmail] = useState<string | null>(null);
  const [userData, setUserData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Função para recuperar o email do AsyncStorage
  const loadEmail = async () => {
    try {
      const storedEmail = await AsyncStorage.getItem("email");
      if (storedEmail) {
        setEmail(storedEmail); // Salva o email no estado
        fetchUserData(storedEmail); // Busca os dados do usuário com o email
      } else {
        console.log("Email não encontrado.");
        setLoading(false);
      }
    } catch (error) {
      console.error("Erro ao recuperar o email:", error);
      setLoading(false);
    }
  };

  // Função para buscar os dados do usuário no backend
  const fetchUserData = async (email: string) => {
    try {
      const response = await axios.get(`http://192.168.1.60:8000/api/auth/user`, {
        params: { email },
      });
      setUserData(response.data); // Salva os dados do usuário no estado
      await AsyncStorage.setItem("user", response.data._id);
    } catch (error) {
      console.error("Erro ao buscar os dados do usuário:", error);
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  // Recuperar o email e os dados do usuário ao carregar a tela
  useEffect(() => {
    loadEmail();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const typeUser: String = userData.userType;
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <HomeHeader />
      <View
        style={{
          flexDirection: "row",
          padding: 18,
          justifyContent: "space-between",
        }}
      >
        <View style={{ width: "60%" }}>
          <Text style={{ fontFamily: "InterSemiBold", fontSize: 24 }}>
            Você precisa{"\n"}de ajuda?
          </Text>
          <Text
            style={{
              fontFamily: "Inter",
              fontSize: 16,
              textAlign: "justify",
            }}
          >
            O Lumina é uma ferramenta de suporte emocional, criada para conectar
            pessoas em momentos difíceis e promover acolhimento e empatia.
          </Text>
        </View>
        <Image source={require("@/assets/images/sos-image.png")} />
      </View>
      <Text>
      </Text>
      {typeUser === "Pro" ? <ProScreen /> : <ClientScreen />}
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
});

export default Home;
