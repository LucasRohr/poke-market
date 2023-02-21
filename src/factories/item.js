export function itemFactory(object) {
  if (!object) {
    return null;
  }

  const { id, name, sprites, cost } = object;

  return {
    id: id ?? "",
    name: name ?? "",
    image: sprites?.default || "",
    cost: cost ?? "",
  };
}
