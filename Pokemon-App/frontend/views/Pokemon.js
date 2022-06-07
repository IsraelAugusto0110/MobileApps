import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import css from "../assets/css/Css";

export default function Pokemon({ navigation, route }) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    setPokemon(route.params.pokemon);
  });

  return (
    <View
      style={[
        css.container,
        {
          backgroundColor: pokemon.corTipo,
        },
      ]}
    >
      <View style={css.container4}>
        <TouchableOpacity onPress={() => navigation.push("Home")}>
          <Text style={css.botaoVoltar}>{`<`}</Text>
        </TouchableOpacity>
      </View>

      <View style={css.containerTelaPokemon}>
        <Text style={[css.pokemonName, css.pokemonNameGrande]}>
          {pokemon.nomePokemon}
        </Text>
      </View>
    </View>
  );
}
