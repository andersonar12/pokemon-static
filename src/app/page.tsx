import pokeApi from "../api/pokeApi";
import { PokemonListResp } from "../interfaces/pokemon";
import PokemonCard from "./components/pokemon/PokemonCard";

async function getData(): Promise<PokemonListResp> {
  const res = await pokeApi.get("/pokemon", {
    params: {
      limit: 151,
    },
  });

  // console.log(res);
  if (res.status == 404) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.data;
}

export default async function Home() {
  function capitalizeString(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const data = await getData();
  const pokemons = data.results.map((pokemon, index) => {
    pokemon.name = capitalizeString(pokemon.name);
    pokemon.id = index + 1;
    pokemon.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`;

    return pokemon;
  });

  // console.log(pokemons);

  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-4 justify-items-center">
          {pokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} limit={pokemons.length.toString()} />
          ))}
        </div>
      </div>
    </>
  );
}
