"use client";

import { useRef, useState } from "react";
import PokemonCard from "@/components/PokemonCard";
import useGetPokemons from "@/hooks/useGetPokemons";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import useFavorite from "@/hooks/useFavorite";
import useGetPokemonByType from "@/hooks/useGetPokemonByType";
import HomeHeader from "@/components/Home/HomeHeader/HomeHeader";

export default function Home() {
  const [show, setShow] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [filterActive, setFilterActive] = useState(false);

  const { isFavorite, handleFavoritePokemon } = useFavorite();

  const {
    data: pokemonData,
    fetchNextPage,
    isFetchingNextPage,
    isLoading: isLoadingPokemonData,
  } = useGetPokemons();

  const loadMore = useRef<HTMLParagraphElement>(null);

  useIntersectionObserver({
    target: loadMore,
    onIntersect: fetchNextPage,
    enabled: !filterActive,
  });

  const {
    data: pokemonByType,
    refetch,
    isFetching: isLoadingPokemonByType,
  } = useGetPokemonByType(selectedType, false);

  const isLoading = isLoadingPokemonData || isLoadingPokemonByType;

  const dataPokemon = filterActive ? pokemonByType : pokemonData;

  const dropdown = useRef<HTMLDivElement>(null);
  const dropdownButton = useRef<HTMLImageElement>(null);

  const handleClickOutside = (e: React.MouseEvent) => {
    if (
      !dropdown?.current?.contains(e.target as Node) &&
      !dropdownButton?.current?.contains(e.target as Node)
    ) {
      setShow(false);
    }
  };

  const handleApply = () => {
    refetch();
    setFilterActive(true);
    setShow(false);
  };

  const handleReset = () => {
    setFilterActive(false);
    setSelectedType("");
    setShow(false);

    window?.scrollTo(0, 0);
  };

  return (
    <div onClick={handleClickOutside}>
      <HomeHeader
        dropdownRef={dropdown}
        dropdownButtonRef={dropdownButton}
        onReset={handleReset}
        onApply={handleApply}
        onSelect={setSelectedType}
        selected={selectedType}
        showDropdown={show}
        onClickFilter={setShow}
      />

      {(isLoading || dataPokemon?.length === 0) && (
        <div className="flex justify-center items-center h-[300px]">
          <p className="text-center">
            {isLoading ? "Loading..." : "Upss, Pokemon not Found"}
          </p>
        </div>
      )}

      {!isLoading && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-2 pt-6 py-6">
          {dataPokemon &&
            dataPokemon?.map((species) => (
              <PokemonCard
                key={species?.name}
                species={species}
                isFavorite={isFavorite(species)}
                onToggleFavorite={(el) => handleFavoritePokemon(el, species)}
              />
            ))}
        </div>
      )}

      <p className="text-center pb-4" ref={loadMore}>
        {isFetchingNextPage && !filterActive ? "Loading..." : ""}
      </p>
    </div>
  );
}
