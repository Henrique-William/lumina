import { Tabs } from "expo-router";

import { useColorScheme } from "@/hooks/useColorScheme";
import { View, Text, Image, StyleSheet } from "react-native";

const home: any = require("@/assets/images/icons/home.png");
const homeActive: any = require("@/assets/images/icons/home-active.png");
const perfil: any = require("@/assets/images/icons/perfil.png");
const perfilActive: any = require("@/assets/images/icons/perfil-active.png");
const route: any = require("@/assets/images/icons/route.png");
const routeActive: any = require("@/assets/images/icons/route-active.png");

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 84,
          position: "absolute",
          marginBottom: 12,
          marginHorizontal: 12,
          bottom: 0,
          backgroundColor: "#F5F5FA",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 0,
          borderRadius: 20,
          elevation: 0,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              {focused ? (
                <Image source={homeActive} style={styles.icons} />
              ) : (
                <Image source={home} style={styles.icons} />
              )}
              <Text
                style={[
                  styles.iconText,
                  { color: focused ? "#FF6969" : "#313A51" },
                ]}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              {focused ? (
                <Image source={routeActive} style={styles.icons} />
              ) : (
                <Image source={route} style={styles.icons} />
              )}
              <Text
                style={[
                  styles.iconText,
                  { color: focused ? "#FF6969" : "#313A51" },
                ]}
              >
                Explore
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              {focused ? (
                <Image source={perfilActive} style={styles.icons} />
              ) : (
                <Image source={perfil} style={styles.icons} />
              )}
              <Text
                style={[
                  styles.iconText,
                  { color: focused ? "#FF6969" : "#313A51" },
                ]}
              >
                Perfil
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  icons: {
    width: 24,
    height: 24,
  },
  iconText: {
    fontFamily: "InterSemiBold",
    fontSize: 10,
    width: "100%",
    height: '100%',
  },
});
