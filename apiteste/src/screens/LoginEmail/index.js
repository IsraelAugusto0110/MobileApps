import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Css } from "./styles";
import Header from "../../components/Header/index";

export default function LoginEmail({ navigation }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[Css.container, Css.darkbg]}
    >
      <Header />
      <View style={Css.login__logoMarca}>
        <Text style={Css.textoLegenda}>LOGIN</Text>
      </View>
      <View style={Css.login__form}>
        <Text>Insira seu E-mail</Text>
        <TextInput style={Css.login__input} />
      </View>
      <TouchableOpacity
        style={Css.buttonAvancar}
        onPress={() =>
          navigation.navigate("LoginSenha", {
            id: 30,
          })
        }
      >
        <Text style={Css.textoGoToLogin}>{">>"}</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
