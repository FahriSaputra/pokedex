"use client";

import Header from "@/components/PokemonDetail/Header";
import HeroPokeBall from "@/components/PokemonDetail/HeroPokeBall";
import PokemonDetailContent from "@/components/PokemonDetail/PokemonDetailContent";
import useFavorite from "@/hooks/useFavorite";
import useGetPokemonDetail from "@/hooks/useGetPokemonDetail";
import useGetPokemonSpecies from "@/hooks/useGetPokemonSpecies";
import useTypeColor from "@/hooks/useTypeColor";

export default function PokemonDetail(props: { params: { pokeName: string } }) {
  const {
    params: { pokeName },
  } = props;

  const bgColor = useTypeColor("bg");

  const { isFavorite, handleFavoritePokemon } = useFavorite();

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

  const species = pokemonDetailData?.species!;

  if (
    isLoadingPokemonSpecies ||
    isLoadingPokemonDetail ||
    isErrorPokemonDetail ||
    isErrorPokemonSpecies
  )
    return null;

  return (
    <>
      <Header
        id={pokemonDetailData?.id!}
        title={name!}
        withFavorite
        isFavorite={isFavorite(species)}
        handleToggleFavorite={(el) => handleFavoritePokemon(el, species)}
      />

      <HeroPokeBall bgColor={bgColor[types![0]?.type.name]} />

      <PokemonDetailContent
        pokemonDetail={pokemonDetail?.data}
        pokemonSpecies={pokemonSpecies?.data}
      />
    </>
  );
}
