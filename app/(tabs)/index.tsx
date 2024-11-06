import { View, Image, Text, StyleSheet } from "react-native";
import HomeHeader from "../components/HomeHeader";
import { StatusBar } from "expo-status-bar";
import SOS from "../components/SOS";

function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <HomeHeader />
      <View style={{ paddingHorizontal: 18 }}>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 18,
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
              Pressione o botão SOS por 3 segundos, e o primeiro especialista do
              CVV ativo falar com você em tempo real por voz
            </Text>
          </View>
          <Image source={require("@/assets/images/sos-image.png")} />
        </View>

        <SOS />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#ffffff", flex: 1, position: "relative" },
});

export default Home;
