"use client";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { useRouter } from "next/navigation";
export default function Navbar() {

  const router = useRouter();


  return (
    <nav className={styles.navbar + " bg-gray-900 pr-8 py-1"}>
      <div className="flex items-center">
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="icon"
          width={70}
          height={70}
        />
        <h2 className={"text-4xl cursor-pointer"} onClick={() => router.push("/")}>
          <span className="text-5xl">P</span>okemon
        </h2>
      </div>
      <p className={"cursor-pointer"} onClick={() => router.push("/favorites")}>Favoritos</p>
    </nav>
  );
}
