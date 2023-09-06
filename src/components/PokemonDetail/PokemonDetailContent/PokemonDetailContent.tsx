"use client";

import PokemonAttribute from "@/components/PokemonDetail/PokemonAttribute";
import SectionTitle from "@/components/PokemonDetail/SectionTitle";
import StatItem from "@/components/PokemonDetail/StatItem/StatItem";
import PokemonType from "@/components/PokemonType";
import useTypeColor from "@/hooks/useTypeColor";
import { Pokemon, PokemonSpecies } from "@/models";
import Image from "next/image";
import { useMemo } from "react";

interface PokemonDetailContent {
  pokemonDetail: Pokemon;
  pokemonSpecies: PokemonSpecies;
}

const PokemonDetailContent = (props: PokemonDetailContent) => {
  const { pokemonDetail, pokemonSpecies } = props;

  const textColor = useTypeColor("text");

  const bgColor = useTypeColor("bg");

  const stats = pokemonDetail?.stats;

  const flavorTextEntries = pokemonSpecies?.flavor_text_entries;

  const flavorText = useMemo(() => {
    return flavorTextEntries?.find((value) => value?.language.name === "en")
      ?.flavor_text;
  }, [flavorTextEntries]);

  const types = pokemonDetail?.types;

  const image =
    pokemonDetail?.sprites?.other?.["official-artwork"]?.front_default;

  const move = pokemonDetail?.moves[0]?.move?.name;

  const pokemonHeight = pokemonDetail?.height;

  const pokemonWeight = pokemonDetail?.weight;

  return (
    <div className="w-full absolute bg-white border-spacing-52">
      <div className="absolute -top-36 mx-auto w-full flex justify-center">
        {<Image src={image!} alt="image" width={200} height={200} />}
      </div>

      <div className="mt-14 mx-6">
        <div className="flex justify-center flex-wrap gap-2">
          {types?.map((pokemon) => (
            <PokemonType key={pokemon?.slot} type={pokemon?.type?.name} />
          ))}
        </div>

        <SectionTitle
          textColor={textColor[types![0]?.type.name]}
          title="About"
        />

        <div className="mt-4">
          <PokemonAttribute
            pokemonWeight={pokemonWeight!}
            pokemonHeight={pokemonHeight!}
            move={move!}
          />
        </div>

        <p className="mt-6 text-sm leading-4 text-justify flex self-stretch">
          {flavorText}
        </p>

        <SectionTitle
          textColor={textColor[types![0]?.type.name]}
          title="Base Stats"
        />

        <div className="mt-4">
          {stats?.map(({ base_stat, stat: { name } }) => (
            <StatItem
              key={name}
              baseStat={base_stat}
              name={name}
              bgColor={bgColor[types![0]?.type.name]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailContent;
