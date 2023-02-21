import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button } from "../button";
import { isNumeric } from "../../utils";
import { pokemonActions } from "../../store/modules";
import mainLogo from "../../assets/pokeball.png";

import { styles } from "./styles";

export function SearchHeader() {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onClickProfile() {
    navigate("/profile");
  }

  function onChangeSearch(object) {
    const text = object.value;

    setSearch(text);

    if (text) {
      const isIdSearch = isNumeric(text);

      if (isIdSearch) {
        dispatch(pokemonActions.getPokemonById({ id: text }));
      } else {
        dispatch(pokemonActions.getPokemonByName({ name: text }));
      }
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img src={mainLogo} alt="PokeBall Icon" style={styles.logo} />
        <span style={styles.appName}>Poke Market</span>
        <input
          type="text"
          onChange={onChangeSearch}
          value={search}
          style={styles.input}
          placeholder="Digite um nome ou ID de Pokémon..."
        />
      </div>

      <Button text="Perfil" onClick={onClickProfile} />
    </div>
  );
}
