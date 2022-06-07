import { StyleSheet } from "react-native";
import colors from "./Colors";

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "25px",
    margin: 5,
  },
  textoHome: {
    fontWeight: "600",
    fontSize: "25px",
    alignSelf: "flex-start",
    marginBottom: 15,
  },
  logo: {
    width: "50%",
    height: "10%",
    alignContent: "center",
    resizeMode: "contain",
  },
  card: {
    width: "150px",
    height: "50px",
    padding: 5,
    borderRadius: 15,
    flex: 1,
    margin: 5,
  },
  pokemonName: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "15px",
  },
  textoTipo: {
    color: "#fcfcfc",
    fontWeight: "bold",
    fontSize: "10px",
  },
  textoTipoContainer: {
    borderRadius: 15,
    padding: 2,
    marginTop: 5,
    alignItems: "center",
  },
  textoIdPokemon: {
    color: "#fcfcfc",
    fontWeight: "bold",
    fontSize: "15px",
    alignSelf: "flex-end",
    opacity: "75%",
  },
  pokemon: {
    width: 75,
    height: 75,
    alignSelf: "flex-end",
    resizeMode: "contain",
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
    width: "40%",
  },
  /// Tela Pokemon
  containerTelaPokemon: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
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
