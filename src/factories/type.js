export function pokemonTypeFactory(object) {
  if (!object) {
    return null;
  }

  const { type } = object;

  return {
    name: type?.name ?? "",
  };
}
