import { all, put, takeLatest, call } from "redux-saga/effects";
import { POKEMON_ACTION_TYPES } from "./types";
import { PokemonService } from "../../../services";
import { pokemonFactory } from "../../../factories";
import { pokemonActions } from "..";

function* getPokemonById(action) {
  try {
    const { id } = action.payload;

    const { hasError, data } = yield call(PokemonService.getPokemonById(id));

    if (!hasError && data) {
      const pokemon = pokemonFactory(data);

      yield put(pokemonActions.getPokemonByIdSuccess({ pokemon }));
      return true;
    }

    yield put(pokemonActions.getPokemonByIdFailure());
    return false;
  } catch (e) {
    yield put(pokemonActions.getPokemonByIdFailure());
    return false;
  }
}

function* getPokemonByName(action) {
  try {
    const { name } = action.payload;

    const { hasError, data } = yield call(
      PokemonService.getPokemonByName(name)
    );

    if (!hasError && data) {
      const pokemon = pokemonFactory(data);

      yield put(pokemonActions.getPokemonByNameSuccess({ pokemon }));
      return true;
    }

    yield put(pokemonActions.getPokemonByNameFailure());
    return false;
  } catch (e) {
    yield put(pokemonActions.getPokemonByNameFailure());
    return false;
  }
}

function* getPokemonListByType(action) {
  try {
    const { type } = action.payload;

    const { hasError, data } = yield call(
      PokemonService.getPokemonListByType(type)
    );

    if (!hasError && data) {
      const pokemonList = data?.pokemon?.map(pokemonFactory);

      yield put(pokemonActions.getPokemonListByTypeSuccess({ pokemonList }));
      return true;
    }

    yield put(pokemonActions.getPokemonListByTypeFailure());
    return false;
  } catch (e) {
    yield put(pokemonActions.getPokemonListByTypeFailure());
    return false;
  }
}

export default all([
  takeLatest(POKEMON_ACTION_TYPES.GET_POKEMON_BY_ID, getPokemonById),
  takeLatest(POKEMON_ACTION_TYPES.GET_POKEMON_BY_NAME, getPokemonByName),
  takeLatest(
    POKEMON_ACTION_TYPES.GET_POKEMON_LIST_BY_TYPE,
    getPokemonListByType
  ),
]);
