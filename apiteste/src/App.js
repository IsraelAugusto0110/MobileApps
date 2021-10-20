import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../src/screens/Home/index";
import LoginEmail from "../src/screens/LoginEmail/index";
import LoginSenha from "../src/screens/LoginSenha/index";
import Perfil from "../src/screens/Perfil/index";
import Menu from "../src/components/Menu/index";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="LoginEmail"
          component={LoginEmail}
        />
        <Stack.Screen
          name="LoginSenha"
          options={{ headerShown: false }}
          component={LoginSenha}
        />
        <Stack.Screen
          name="Perfil"
          options={{ headerShown: false }}
          component={Perfil}
        />
        <Stack.Screen
          name="Menu"
          options={{ headerShown: false }}
          component={Menu}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
