import { POKEMON_ACTION_TYPES } from "./types";
import { pokemonFactory } from "../../../factories";

const INITIAL_STATE = {
  isGettingPokemon: false,
  hasErrorGettingPokemon: false,
  pokemonDetail: pokemonFactory,
  isGettingPokemonList: false,
  hasErrorGettingPokemonList: false,
  pokemonList: [],
};

export default function pokemonReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case (POKEMON_ACTION_TYPES.GET_POKEMON_BY_ID,
    POKEMON_ACTION_TYPES.GET_POKEMON_BY_NAME): {
      return {
        ...state,
        isGettingPokemon: true,
        hasErrorGettingPokemon: false,
      };
    }
    case (POKEMON_ACTION_TYPES.GET_POKEMON_BY_ID_SUCCESS,
    POKEMON_ACTION_TYPES.GET_POKEMON_BY_NAME_SUCCESS): {
      const { pokemon } = action.payload;
      return {
        ...state,
        pokemonDetail: pokemon,
        isGettingPokemon: false,
        hasErrorGettingPokemon: false,
      };
    }
    case (POKEMON_ACTION_TYPES.GET_POKEMON_BY_ID_FAILURE,
    POKEMON_ACTION_TYPES.GET_POKEMON_BY_NAME_FAILURE): {
      return {
        ...state,
        pokemon: INITIAL_STATE.pokemonDetail,
        isGettingPokemon: false,
        hasErrorGettingPokemon: false,
      };
    }
    case POKEMON_ACTION_TYPES.GET_POKEMON_LIST_BY_TYPE: {
      return {
        ...state,
        isGettingPokemonList: true,
        hasErrorGettingPokemonList: false,
      };
    }
    case POKEMON_ACTION_TYPES.GET_POKEMON_LIST_BY_TYPE_SUCCESS: {
      const { pokemonList } = action.payload;
      return {
        ...state,
        pokemonList,
        isGettingPokemonList: false,
        hasErrorGettingPokemonList: false,
      };
    }
    case POKEMON_ACTION_TYPES.GET_POKEMON_LIST_BY_TYPE_FAILURE: {
      return {
        ...state,
        pokemon: INITIAL_STATE.pokemonList,
        isGettingPokemonList: false,
        hasErrorGettingPokemonList: false,
      };
    }
    default:
      return state;
  }
}
