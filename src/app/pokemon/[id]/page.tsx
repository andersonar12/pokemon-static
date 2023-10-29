

import pokeApi from "../../../api/pokeApi";
import { Pokemon, PokemonDetailed } from "../../../interfaces/pokemon";
import Image from "next/image";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Head from "next/head";
import ButtonFavorite from "./ButtonFavorite";
import { useRouter } from "next/navigation";

export default async function PokemonPage({ params }: { params: { id: string, limit: number} }) {
  
  const { id } = params;
  const res = await pokeApi.get<PokemonDetailed>(`/pokemon/${id}`);
  const pokemon = res.data;

  function capitalizeString(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
      <Head>
        <title>{capitalizeString(pokemon.name)}</title>
      </Head>
      <div>
        <div className="grid grid-cols-12 gap-4">
          <Card isHoverable isPressable className="col-span-12 sm:col-span-4 p-4 ">
            <div className="flex justify-center align-center w-full h-full">
              <Image
                src={pokemon.sprites.other?.dream_world.front_default || "/no-image.png"}
                alt={pokemon.name}
                width={300}
                height={300}
              />
            </div>
          </Card>

          <Card isHoverable className="col-span-12 sm:col-span-8 ">
            <CardHeader className="flex justify-between">
              <h1 className="text-4xl font-bold">{capitalizeString(pokemon.name)}</h1>

              <ButtonFavorite id={ id }></ButtonFavorite>
            </CardHeader>
            <CardBody>
              <h1 className="text-2xl">Sprites</h1>

              <div className="grid grid-cols-4 gap-2">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={200}
                  height={200}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={200}
                  height={200}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={200}
                  height={200}
                />

                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={200}
                  height={200}
                />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}
