"use client";

import PokemonCard from "@/components/PokemonCard";
import Header from "@/components/PokemonDetail/Header";
import useFavorite from "@/hooks/useFavorite";

export default function Favorite() {
  const { isFavorite, favoritePokemon, handleFavoritePokemon } = useFavorite();

  return (
    <>
      <Header title="Favorite" bgColor="bg-pokemon-water" />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-2 mt-24">
        {favoritePokemon?.map((species) => (
          <PokemonCard
            key={species?.name}
            species={species}
            isFavorite={isFavorite(species)}
            onToggleFavorite={(el) => handleFavoritePokemon(el, species)}
          />
        ))}
      </div>
    </>
  );
}
