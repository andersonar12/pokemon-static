"use client";

import { useState } from "react";
import { toggleFavorite, existPokemonInFavorites } from "../../../utils/localFavorites";
import { Button } from "@nextui-org/react";
import shootConfetti from "@/utils/confetti";
export default function ButtonFavourite({ id }: { id: string }) {
  const [pokemonExists, setPokemonExists] = useState(existPokemonInFavorites(+id));

  const onToggleFavorite = () => {
    toggleFavorite(+id);
    setPokemonExists(existPokemonInFavorites(+id));

    if (!pokemonExists) {
      shootConfetti()
    }
  };

  return (
    <Button
      color="primary"
      className="text-white"
      variant={pokemonExists ? "solid" : "ghost"}
      onClick={onToggleFavorite}
    >
      {pokemonExists ? "En favoritos" : "Guardar en favoritos"}
    </Button>
  );
}
