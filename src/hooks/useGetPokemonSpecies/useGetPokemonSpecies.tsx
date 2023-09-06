import getPokemonSpecies from "@/api/getPokemonSpecies";
import { useQuery } from "@tanstack/react-query";

const useGetPokemonSpecies = (name: string) =>
  useQuery(["pokemon-species", name], () => getPokemonSpecies(name), {
    staleTime: Infinity,
    cacheTime: Infinity,
  });

export default useGetPokemonSpecies;
