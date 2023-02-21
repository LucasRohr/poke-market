import { pokemonTypeFactory } from "./type";

export function pokemonFactory(object) {
  if (!object) {
    return null;
  }

  const { id, name, types, abilities, moves, sprites } = object;

  const parsedAbilities = abilities.map((ability) => ability.ability.name);
  const parsedMoves = moves.map((move) => move.move.name);

  return {
    id: id ?? "",
    name: name ?? "",
    image: sprites?.front_default || "",
    type: types.map(pokemonTypeFactory),
    abilities: parsedAbilities,
    moves: parsedMoves,
  };
}
