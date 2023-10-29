import Image from "next/image";

export default function NoFavorites() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl">No hay Favoritos</h1>
        <Image
          src="/images/no-favorites.png"
          alt="icon"
          width={300}
          height={300}
          style={{ opacity: 0.2 }}
        />
      </div>
    </div>
  );
}
