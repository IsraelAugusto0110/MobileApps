import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Image,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TouchableOpacity } from "react-native-gesture-handler";
import { Css } from "./styles";

export default function Menu({ navigation }) {
  return (
    <View style={Css.menu}>
      <TouchableOpacity
        style={Css.itemMenu}
        onPress={() => navigation.navigate("Perfil")}
      >
        <Image
          style={Css.icone}
          source={require("../../../assets/searchicon.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={Css.itemMenu}
        onPress={() => navigation.navigate("Perfil")}
      >
        <Image
          style={Css.icone}
          source={require("../../../assets/usericon.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={Css.itemMenu}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={Css.icone}
          source={require("../../../assets/houseicon.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={Css.itemMenu}
        onPress={() => navigation.navigate("Perfil")}
      >
        <Image
          style={Css.icone}
          source={require("../../../assets/caricon.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={Css.itemMenu}
        onPress={() => navigation.navigate("Perfil")}
      >
        <Image
          style={Css.icone}
          source={require("../../../assets/chaticon.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
