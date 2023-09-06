import { useState, useEffect } from "react";

interface TTypeColor {
  [key: string]: string;
}

const useTypeColor = (style: string) => {
  const [typeColor, setTypeColor] = useState<TTypeColor>({});

  useEffect(() => {
    const TYPE_COLOR = {
      bug: `${style}-pokemon-bug`,
      dark: `${style}-pokemon-dark`,
      dragon: `${style}-pokemon-dragon`,
      electric: `${style}-pokemon-electric`,
      fairy: `${style}-pokemon-fairy`,
      fighting: `${style}-pokemon-fighting`,
      fire: `${style}-pokemon-fire`,
      flying: `${style}-pokemon-flying`,
      ghost: `${style}-pokemon-ghost`,
      normal: `${style}-pokemon-normal`,
      grass: `${style}-pokemon-grass`,
      ground: `${style}-pokemon-ground`,
      ice: `${style}-pokemon-ice`,
      poison: `${style}-pokemon-poison`,
      psychic: `${style}-pokemon-psychic`,
      rock: `${style}-pokemon-rock`,
      steel: `${style}-pokemon-steel`,
      water: `${style}-pokemon-water`,
    };

    setTypeColor(TYPE_COLOR);
  }, [style]);

  return typeColor;
};

export default useTypeColor;
