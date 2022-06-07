import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import css from "../assets/css/Css";

export default function Card(props) {
  return (
    <View>
      <View style={[css.card, {
        backgroundColor: props.corTipo
      }]}>
        <Text style={css.textoIdPokemon}>{props.idPokemon}</Text>
        <Text style={css.pokemonName}>{props.nomePokemon}</Text>

        <View style={css.container2}>
          <View style={css.container3}>
             <View style={[css.textoTipoContainer, {
               backgroundColor: props.corTipoSecundaria
             }]}>
              <Text style={css.textoTipo}>{props.tipoPokemon}</Text>
            </View>
          </View>

          <Image
            style={css.pokemon}
            source={require(`../assets/img/pokemons/${props.imgUrl}`)}
          />
        </View>
      </View>
    </View>
  );
}
