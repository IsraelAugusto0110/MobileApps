import { StyleSheet } from "react-native";
import colors from "./Colors";

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 25,
    margin: 5,
  },
  textoHome: {
    fontWeight: "600",
    fontSize: 25,
    alignSelf: "center",
    marginBottom: 15,
  },
  logo: {
    width: 150,
    height: 100,
    alignContent: "center",
    resizeMode: "contain",
  },
  card: {
    width: 150,
    height: 30,
    padding: 5,
    borderRadius: 15,
    flex: 1,
    margin: 5,
  },
  pokemonName: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  textoTipo: {
    color: "#fcfcfc",
    fontWeight: "bold",
    fontSize: 10,
  },
  textoTipoContainer: {
    borderRadius: 15,
    padding: 3,
    marginTop: 5,
    alignItems: "center",
    width: 50
  },
  textoIdPokemon: {
    color: "#fcfcfc",
    fontWeight: "bold",
    fontSize: 15,
    alignSelf: "flex-end",
    marginRight:5
  },
  pokemon: {
    width: 75,
    height: 75,
    alignSelf: "flex-end",
    resizeMode: "contain",
    marginLeft: 15
  },
  containerInterno: {
    flexDirection: "row",
    margin: 5,
  },
  container2: {
    flexDirection: "row",
  },
  container3: {
    flexDirection: "column",
    width: 40,
  },
  /// Tela Pokemon
  containerTelaPokemon: {
    flexDirection: "row",
    width: 150,
    height: 50,
    alignSelf: 'flex-start'
  },
  pokemonNameGrande: {
    fontSize: 35,
    fontWeight: "400",
  },
  botaoVoltar: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  container4: {
    flexDirection: "column",
    width: "100%",
  },
});

export default css;
