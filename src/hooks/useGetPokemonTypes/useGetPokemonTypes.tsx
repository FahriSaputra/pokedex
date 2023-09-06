import getPokemonType from "@/api/getPokemonType";
import { useQuery } from "@tanstack/react-query";

const useGetPokemonType = () =>
  useQuery(["pokemon-type"], () => getPokemonType(), {
    staleTime: Infinity,
    cacheTime: Infinity,
  });

export default useGetPokemonType;
