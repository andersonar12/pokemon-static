
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DisplayFavoritePokemons({favPokemons}: {favPokemons: number[]}) {

  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/pokemon/${id}`);
  }

  return (
    <div>
          <h1 className="text-4xl font-bold">Favoritos</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-4 justify-items-center pt-4">
            {favPokemons.map((id) => (
              <Card isHoverable isPressable onClick={() => handleClick(id)}>
                <CardBody>
                  <h1> {id}</h1>
                  <Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    alt="icon"
                    width={200}
                    height={200}
                  />
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
  )
}
