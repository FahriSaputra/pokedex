import { NamedAPIResource } from "@/models";
import { useCallback, useEffect, useState } from "react";

interface IUseFavorite {
  handleFavoritePokemon: (
    event: React.MouseEvent<HTMLElement>,
    species: NamedAPIResource
  ) => void;
  isFavorite: (species: NamedAPIResource) => boolean;
  favoritePokemon: NamedAPIResource[];
  getFavoritePokemon: () => NamedAPIResource[];
}

const useFavorite = (): IUseFavorite => {
  const [favoritePokemon, setFavoritePokemon] = useState<NamedAPIResource[]>(
    []
  );

  const getFavoritePokemon = useCallback(() => {
    const favoriteStorage: NamedAPIResource[] = JSON.parse(
      localStorage.getItem("favorite") || "[]"
    );

    return favoriteStorage;
  }, []);

  const isFavorite = useCallback(
    (species: NamedAPIResource): boolean =>
      !!favoritePokemon.find((pokemon) => pokemon?.name === species?.name),
    [favoritePokemon]
  );

  const addToFavorite = useCallback(
    (species: NamedAPIResource) => {
      localStorage.setItem(
        "favorite",
        JSON.stringify([...getFavoritePokemon(), species])
      );

      setFavoritePokemon(getFavoritePokemon());
    },
    [getFavoritePokemon]
  );

  const removeFromFavorite = useCallback(
    (species: NamedAPIResource) => {
      localStorage.setItem(
        "favorite",
        JSON.stringify([
          ...getFavoritePokemon()?.filter(
            (pokemon) => pokemon?.name !== species?.name
          ),
        ])
      );

      setFavoritePokemon(getFavoritePokemon());
    },
    [getFavoritePokemon]
  );

  const handleFavoritePokemon = useCallback(
    (event: React.MouseEvent<HTMLElement>, species: NamedAPIResource) => {
      event?.preventDefault();

      if (isFavorite(species)) return removeFromFavorite(species);

      return addToFavorite(species);
    },
    [isFavorite, removeFromFavorite, addToFavorite]
  );

  useEffect(() => {
    setFavoritePokemon(getFavoritePokemon());
  }, [getFavoritePokemon]);

  return {
    handleFavoritePokemon,
    isFavorite,
    favoritePokemon,
    getFavoritePokemon,
  };
};

export default useFavorite;
