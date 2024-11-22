import { View, StyleSheet } from "react-native";
import SOS from "@/components/SOS";

function ClientScreen() {
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 18 }}>
        <SOS />
      </View>
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

export default ClientScreen;
