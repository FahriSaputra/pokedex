"use client";

import { useRef } from "react";
import PokemonCard from "@/components/PokemonCard";
import useGetPokemons from "@/hooks/useGetPokemons";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import useFavorite from "@/hooks/useFavorite";

export default function Home() {
  const { isFavorite, handleFavoritePokemon } = useFavorite();

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useGetPokemons();

  const loadMoreBtn = useRef<HTMLButtonElement>(null);

  useIntersectionObserver({
    target: loadMoreBtn,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-2">
        {data?.map((species) => (
          <PokemonCard
            key={species?.name}
            species={species}
            isFavorite={isFavorite(species)}
            onToggleFavorite={(el) => handleFavoritePokemon(el, species)}
          />
        ))}
      </div>

      <button
        ref={loadMoreBtn}
        onClick={() => fetchNextPage}
        disabled={!hasNextPage}
      >
        {isFetchingNextPage ? "Loading..." : "Load more"}
      </button>
    </>
  );
}
