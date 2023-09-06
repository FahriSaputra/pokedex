"use client";

import Header from "@/components/PokemonDetail/Header";
import HeroPokeBall from "@/components/PokemonDetail/HeroPokeBall";
import PokemonDetailContent from "@/components/PokemonDetail/PokemonDetailContent";
import useGetPokemonDetail from "@/hooks/useGetPokemonDetail";
import useGetPokemonSpecies from "@/hooks/useGetPokemonSpecies";
import useTypeColor from "@/hooks/useTypeColor";

export default function PokemonDetail(props: { params: { pokeName: string } }) {
  const {
    params: { pokeName },
  } = props;

  const bgColor = useTypeColor("bg");

  const {
    data: pokemonDetail,
    isLoading: isLoadingPokemonDetail,
    isError: isErrorPokemonDetail,
  } = useGetPokemonDetail(pokeName);

  const {
    isLoading: isLoadingPokemonSpecies,
    isError: isErrorPokemonSpecies,
    data: pokemonSpecies,
  } = useGetPokemonSpecies(pokeName);

  const pokemonDetailData = pokemonDetail?.data;

  const name = pokemonDetailData?.name;

  const types = pokemonDetailData?.types;

  if (
    isLoadingPokemonSpecies ||
    isLoadingPokemonDetail ||
    isErrorPokemonDetail ||
    isErrorPokemonSpecies
  )
    return null;

  return (
    <>
      <Header id={pokemonDetailData?.id!} title={name!} />

      <HeroPokeBall bgColor={bgColor[types![0]?.type.name]} />

      <PokemonDetailContent
        pokemonDetail={pokemonDetail?.data}
        pokemonSpecies={pokemonSpecies?.data}
      />
    </>
  );
}
