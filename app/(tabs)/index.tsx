import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import ClientScreen from "@/components/Client";
import ProScreen from "@/components/Pro";

function Home() {
  const typeUser: String = "Pro";

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      {typeUser === "Pro" ? <ProScreen /> : <ClientScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Home;
