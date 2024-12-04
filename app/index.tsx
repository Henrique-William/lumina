import { Link } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import SubmitButton from "@/components/SubmitButton";
import Fields from "@/components/Fields";
import { Login } from "@/services/userServices";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await Login(email, password);

      if (response.token) {
        // Armazenar o token no AsyncStorage
        await AsyncStorage.setItem("token", response.token);
        await AsyncStorage.setItem("email", email);
        router.push("/(tabs)");
      } else {
        alert("Token não retornado pelo servidor.");
      }
    } catch (error: any) {
      console.error("Erro no Login:", error);
      alert(error.message || "Credenciais inválidas :(");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.imageHeader}
          source={require("../assets/images/header.png")}
        />
      </View>

      <View style={styles.form}>
        <Text style={styles.title}>Login</Text>

        <Fields
          placeholder="Email"
          value={email}
          onChanged={setEmail}
          secure={false}
        />

        <Fields
          placeholder="Password"
          value={password}
          onChanged={setPassword}
          secure={true}
        />

        <Text style={styles.forgotPass}>
          <Link href="/forgotPassword">Esqueçeu a senha?</Link>
        </Text>

        <SubmitButton name="Login" onPress={handleLogin} />

        <Text style={styles.or}>OU</Text>

        <TouchableOpacity style={styles.googleBtn}>
          <Image
            style={styles.googleLogo}
            source={require("../assets/images/googleLogo.png")}
          />
          <Text style={styles.googleTxt}>Login com Google</Text>
        </TouchableOpacity>

        <Text style={styles.linkSignUp}>
          Ainda não tem uma conta?{" "}
          <Link href="/signup" style={styles.link}>
            Cadastre-se
          </Link>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageHeader: {
    height: 250,
    width: 250,
    aspectRatio: 1 / 1,
    objectFit: "contain",
  },
  title: {
    fontSize: 32,
    fontFamily: "InterBold",
    marginBottom: 16,
    textAlign: "left",
    color: "#3C3D37",
  },
  form: {
    // height: '70%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  forgotPass: {
    color: "#FF6969",
    fontWeight: 600,
    paddingBottom: 20,
    textAlign: "right",
  },

  or: {
    textAlign: "center",
    padding: 24,
    color: "#ccc",
    fontWeight: 700,
  },
  googleBtn: {
    backgroundColor: "#EDF3FF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 10,
  },
  googleTxt: {
    color: "#515357",
    fontFamily: "InterMedium",
  },
  googleLogo: {
    width: 20,
    height: 20,
    position: "absolute",
    left: 24,
    alignItems: "center",
  },
  linkSignUp: {
    paddingTop: 48,
    textAlign: "center",
  },
  link: {
    color: "#FF6969",
    fontWeight: "bold",
  },
});
