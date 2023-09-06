import getPokemonByType from "@/api/getPokemonByType";
import { useQuery } from "@tanstack/react-query";

const useGetPokemonType = (name: string, enabled: boolean) => {
  const response = useQuery(["pokemon-by-type"], () => getPokemonByType(name), {
    staleTime: Infinity,
    cacheTime: Infinity,
    enabled,
  });

  const data = response?.data?.data?.pokemon.map(({ pokemon }) => pokemon);

  return { ...response, data };
};

export default useGetPokemonType;
