"use client";

import { useEffect, useState } from "react";
import NoFavorites from "./NoFavorites";
import { pokemons } from "@/utils/localFavorites";
import DisplayFavoritePokemons from "./DisplayFavoritePokemons";

export default function FavoritesPage() {
  const [favPokemons, setPokemons] = useState<number[]>([]);

  useEffect(() => {
    setPokemons(pokemons());
  }, []);

  // useEffect(() => {
  //   console.log(favPokemons)
  // } , [favPokemons])

  return (
    <>
      {favPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <DisplayFavoritePokemons favPokemons={favPokemons} />
      )}
    </>
  );
}
