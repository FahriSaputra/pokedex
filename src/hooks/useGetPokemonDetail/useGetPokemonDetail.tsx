import getPokemonDetail from "@/api/getPokemonDetail";
import { useQuery } from "@tanstack/react-query";

const useGetPokemonDetail = (name: string) =>
  useQuery(["pokemon-detail", name], () => getPokemonDetail(name), {
    staleTime: Infinity,
    cacheTime: Infinity,
  });

export default useGetPokemonDetail;
