import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import colors from "../assets/css/Colors";
import css from "../assets/css/Css";
import Card from "./Card";

export default function Home(props) {
  const bulbasaur = {
    nomePokemon: "Bulbasaur",
    idPokemon: "#001",
    imgUrl: "bulbasaur.png",
    tipoPokemon: "planta",
    corTipo: colors.tipoPlanta,
    corTipoSecundaria: colors.tipoPlantaSecundario,
  };

  const pikachu = {
    nomePokemon: "Pikachu",
    idPokemon: "#004",
    imgUrl: "pikachu.png",
    tipoPokemon: "eletrico",
    corTipo: colors.tipoEletrico,
    corTipoSecundaria: colors.tipoEletricoSecundario,
  };

  const handleIrParaDetalhes = (dadosPokemon) => {
    props.navigation.navigate("Pokemon", {
      pokemon: { ...dadosPokemon },
    });
  };

  return (
    <View style={css.container}>
      <Text style={css.textoHome}>Qual pokémon você escolheria?</Text>

      <View style={css.containerInterno}>
        <TouchableOpacity onPress={() => handleIrParaDetalhes(bulbasaur)}>
          <Card {...bulbasaur} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleIrParaDetalhes(pikachu)}>
          <Card {...pikachu} />
        </TouchableOpacity>
      </View>

      <Image style={css.logo} source={require("../assets/img/logo.png")} />
    </View>
  );
}
