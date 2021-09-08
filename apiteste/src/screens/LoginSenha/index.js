import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  Platform,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Css } from "./styles";
import Header from "../../components/Header/index";

export default function LoginSenha({ route }) {
  const [display, setDisplay] = useState("none");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[Css.container, Css.darkbg]}
    >
      <Header />
      <View style={Css.login__logoMarca}>
        <Text style={Css.textoLegenda}>LOGIN</Text>
      </View>
      <View>
        <Text style={Css.login__msg(display)}>Usuário ou senha invalidos</Text>
      </View>
      <View style={Css.login__form}>
        <Text>Insira sua Senha</Text>
        <TextInput style={Css.login__input} secureTextEntry={true} />
        <TouchableOpacity
          style={Css.login__button}
          onPress={() => setDisplay("flex")}
        >
          <Text style={Css.login__buttonText}>ENTRAR</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            style={Css.buttonForgetPass}
            onPress={() => setDisplay("none")}
          >
            <Text style={Css.textForgetPass}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
