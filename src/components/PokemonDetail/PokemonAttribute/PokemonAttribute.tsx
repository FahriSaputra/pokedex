import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IPokemonAttribute {
  pokemonWeight: number;
  pokemonHeight: number;
  move: string;
}
const PokemonAttribute = (props: IPokemonAttribute) => {
  const { pokemonWeight, pokemonHeight, move } = props;

  return (
    <div className="flex">
      <div className="flex-1">
        <div className="flex justify-center py-2">
          <Image src={"/weight.svg"} alt="weight" width={16} height={16} />
          <p className="pl-2 text-xs">{pokemonWeight} kg</p>
        </div>
        <p className="text-xs text-gray-medium mt-2 text-center">Weight</p>
      </div>
      <div className="flex-1 border-x">
        <div className="flex justify-center py-2">
          <Image
            src={"/straighten.svg"}
            alt="straighten"
            width={16}
            height={16}
          />
          <p className="pl-2 text-xs">{pokemonHeight} m</p>
        </div>
        <p className="text-xs text-gray-medium mt-2 text-center">Height</p>
      </div>
      <div className="flex-1">
        <div className="flex justify-center py-2">
          <p className="pl-2 text-xs">{move}</p>
        </div>
        <p className="text-xs text-gray-medium mt-2 text-center">Moves</p>
      </div>
    </div>
  );
};

export default PokemonAttribute;
