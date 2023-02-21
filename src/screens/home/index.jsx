import React from "react";
import { useSelector } from "react-redux";

import { SearchHeader } from "../../components";

import { styles } from "./styles";

function HomeScreen() {
  const { isGettingPokemon, hasErrorGettingPokemon, pokemonDetail } =
    useSelector((state) => state.pokemon);

  function renderContent() {
    if (isGettingPokemon) {
      return (
        <div style={styles.loaderContainer}>
          <span>Carregando...</span>
        </div>
      );
    }

    if (hasErrorGettingPokemon) {
      return (
        <div style={styles.errorContainer}>
          <span>Erro ao buscar Pokemon</span>
        </div>
      );
    }

    if (pokemonDetail?.id) {
      return <div>{pokemonDetail?.name}</div>;
    }

    return null;
  }

  return (
    <div style={styles.container}>
      <SearchHeader />
      <div style={styles.content}>{renderContent()}</div>
    </div>
  );
}

export { HomeScreen };
