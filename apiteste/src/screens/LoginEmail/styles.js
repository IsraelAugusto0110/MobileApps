import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Css = StyleSheet.create({
  buttonAvancar: {
    backgroundColor: "#3F37C9",
    borderRadius: 150,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  button_home: {
    marginRight: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
  header: {
    marginTop: -100,
  },
  login__button: {
    padding: 12,
    backgroundColor: "#3F37C9",
    alignSelf: "center",
    borderRadius: 10,
    width: "100%",
  },
  login__buttonText: {
    fontWeight: "normal",
    fontSize: 22,
    color: "#fff",
    alignSelf: "center",
  },
  login__form: {
    width: "80%",
  },
  login__input: {
    backgroundColor: "white",
    fontSize: 19,
    padding: 7,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#3F37C9",
  },
  login__logoMarca: {
    marginBottom: 10,
  },
  textoGoToLogin: {
    fontWeight: "bold",
    fontSize: 35,
    color: "#fff",
  },
  textoLegenda: {
    fontSize: 22,
  },
});

export { Css };
