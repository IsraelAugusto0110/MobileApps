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
      <View style={Css.login__logoMarca}>
        <Text style={Css.textoLegenda}>Este é o componente Perfil</Text>
      </View>
    </KeyboardAvoidingView>
  );
}
