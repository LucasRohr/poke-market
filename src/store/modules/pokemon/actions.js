import { POKEMON_ACTION_TYPES } from "./types";

// getPokemonById

export function getPokemonById(id) {
  return {
    type: POKEMON_ACTION_TYPES.GET_GIFT_DETAIL,
    payload: { id },
  };
}

export function getPokemonByIdSuccess() {
  return {
    type: POKEMON_ACTION_TYPES.GET_POKEMON_BY_ID_SUCCESS,
  };
}

export function getPokemonByIdFailure() {
  return {
    type: POKEMON_ACTION_TYPES.GET_POKEMON_BY_ID_FAILURE,
  };
}

// getPokemonByName

export function getPokemonByName(name) {
  return {
    type: POKEMON_ACTION_TYPES.GET_POKEMON_BY_NAME,
    payload: { name },
  };
}

export function getPokemonByNameSuccess() {
  return {
    type: POKEMON_ACTION_TYPES.GET_POKEMON_BY_NAME_SUCCESS,
  };
}

export function getPokemonByNameFailure() {
  return {
    type: POKEMON_ACTION_TYPES.GET_POKEMON_BY_NAME_FAILURE,
  };
}

// getPokemonListByType

export function getPokemonListByType(type) {
  return {
    type: POKEMON_ACTION_TYPES.GET_POKEMON_LIST_BY_TYPE,
    payload: { type },
  };
}

export function getPokemonListByTypeSuccess() {
  return {
    type: POKEMON_ACTION_TYPES.GET_POKEMON_LIST_BY_TYPE_SUCCESS,
  };
}

export function getPokemonListByTypeFailure() {
  return {
    type: POKEMON_ACTION_TYPES.GET_POKEMON_LIST_BY_TYPE_FAILURE,
  };
}
