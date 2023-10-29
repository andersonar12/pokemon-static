'use client';

import { Pokemon } from "../../../interfaces/pokemon";
import { Button, Card, Image, CardBody, CardFooter } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
export default function PokemonCard({ pokemon, limit }: { pokemon: Pokemon, limit: string }) {

  const router = useRouter();

  const handleClick = (pokemon: Pokemon) => {
    router.push(`/pokemon/${pokemon.id}/?limit=${limit}`);
  };

  return (
    <Card
      key={pokemon.id}
      isHoverable
      isPressable
      className="max-w-xs"
      onClick={() => handleClick(pokemon)}
    >
      <CardBody className="">
        <div className="flex items-center h-full">
          <Image
            src={pokemon.image}
            height={200}
            width={200}
            className="min-w-40 max-h-40 max-w-40"
          ></Image>
        </div>
      </CardBody>
      <CardFooter className="flex justify-between">
        <p className="text-lg">{pokemon.name}</p>
        <p className="text-lg">#{pokemon.id}</p>
      </CardFooter>
    </Card>
  );
}
