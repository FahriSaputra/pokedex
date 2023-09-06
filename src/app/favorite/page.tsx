"use client";

import PokemonCard from "@/components/PokemonCard";
import Header from "@/components/PokemonDetail/Header";
import useFavorite from "@/hooks/useFavorite";

export default function Favorite() {
  const { isFavorite, favoritePokemon, handleFavoritePokemon, isLoading } =
    useFavorite();

  return (
    <>
      <Header title="Favorite" bgColor="bg-pokemon-water" />
      {(isLoading || favoritePokemon?.length === 0) && (
        <div className="h-full text-center mt-24">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <p>Upss, Pokemon not Found</p>
              <p>Add favorite pokemon first</p>
            </>
          )}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-2 mt-24">
        {favoritePokemon &&
          favoritePokemon?.map((species) => (
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
