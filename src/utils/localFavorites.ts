const toggleFavorite = (id: number) => {
  const favorites: number[] = JSON.parse(localStorage.getItem("favorites") || "[]");
  if (favorites.includes(id)) {
    favorites.splice(favorites.indexOf(id), 1);
  } else {
    favorites.push(id);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites.sort( (a, b) => a - b)));
};

const existPokemonInFavorites = (id: number): boolean => {
  if (typeof window === "undefined") return false;
  
  const favorites: number[] = JSON.parse(localStorage.getItem("favorites") || "[]");
  return favorites.includes(id);
};

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

export { pokemons, toggleFavorite, existPokemonInFavorites };
