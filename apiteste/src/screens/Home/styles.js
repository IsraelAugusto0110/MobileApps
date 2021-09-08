import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  container2: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  darkbg: {
    backgroundColor: "#fff",
  },
  menu: {
    alignSelf: "center",
  },
  textoGoToLogin: {
    fontWeight: "bold",
    fontSize: 35,
    color: "blue",
  },
  textoLegenda: {
    fontSize: 22,
  },
});

export { Css };
