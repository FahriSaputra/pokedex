"use client";

import Header from "@/components/PokemonDetail/Header";
import HeroPokeBall from "@/components/PokemonDetail/HeroPokeBall";
import PokemonDetailContent from "@/components/PokemonDetail/PokemonDetailContent";
import useFavorite from "@/hooks/useFavorite";
import useGetPokemonDetail from "@/hooks/useGetPokemonDetail";
import useGetPokemonSpecies from "@/hooks/useGetPokemonSpecies";
import useTypeColor from "@/hooks/useTypeColor";
import Link from "next/link";

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

  const isLoading = isLoadingPokemonSpecies || isLoadingPokemonDetail;

  const isError = isErrorPokemonDetail || isErrorPokemonSpecies;

  return (
    <>
      <Header
        id={pokemonDetailData?.id!}
        title={name!}
        withFavorite={!isLoading && !isError}
        isFavorite={isFavorite(species)}
        handleToggleFavorite={(el) => handleFavoritePokemon(el, species)}
      />

      {isLoading && (
        <div className="h-screen flex justify-center items-center">
          <p>Loading...</p>
        </div>
      )}

      {!isLoading && isError && (
        <div className="h-screen flex justify-center items-center flex-col">
          <p className="text-center mb-6">
            Upss, Someting when wrong
            <br />
            Try again later
          </p>

          <Link href="/">
            <button className="px-2 bg-primary text-white rounded">Home</button>
          </Link>
        </div>
      )}

      {!isLoading && !isError && (
        <>
          <HeroPokeBall bgColor={bgColor[types![0]?.type.name]} />

          <PokemonDetailContent
            pokemonDetail={pokemonDetail?.data!}
            pokemonSpecies={pokemonSpecies?.data!}
          />
        </>
      )}
    </>
  );
}
