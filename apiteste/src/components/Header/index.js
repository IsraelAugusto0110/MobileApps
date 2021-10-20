import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Css } from "./styles";

export default function Header({ navigation }) {
  return (
    <View style={Css.header}>
      <Image source={require("../../../assets/header.png")} />
    </View>
  );
}
