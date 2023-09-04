"use client";

import TYPE_COLOR from "@/components/PokemonType/typeColor";

interface IPokemonType {
  type: string;
}

const PokemonType = (props: IPokemonType) => {
  const { type } = props;

  return (
    <div className={`${TYPE_COLOR[type]} rounded-lg`}>
      <p className="px-2 py-0.5 text-xs font-bold capitalize text-white">
        {type}
      </p>
    </div>
  );
};

export default PokemonType;
