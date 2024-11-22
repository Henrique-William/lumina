import { View, Image, Text, StyleSheet } from "react-native";
import HomeHeader from "@/components/HomeHeader";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import ClientScreen from "@/components/ClientScreen";
import ProScreen from "@/components/ProScreen";

const typeUser: "Pro" | "Client" = "Client";

function Home() {
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
      {typeUser === "Pro" ? <ProScreen/> : <ClientScreen />}
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
