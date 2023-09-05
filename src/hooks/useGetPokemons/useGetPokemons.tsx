import getPokemon from "@/api/getPokemons";
import { NamedAPIResource, NamedAPIResourceList } from "@/models";
import { useInfiniteQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

const useGetPokemons = () => {
  const response = useInfiniteQuery(
    ["pokemons"],
    ({ pageParam }) => getPokemon(pageParam),
    {
      staleTime: Infinity,
      getNextPageParam: (lastPage) => lastPage?.data?.next,
      keepPreviousData: true,
    }
  );

  const mergeDataArrays = (
    data: AxiosResponse<NamedAPIResourceList>[] | undefined
  ): NamedAPIResource[] => {
    const mergedArray: NamedAPIResource[] = [];

    if (data) {
      for (const obj of data) {
        mergedArray.push(...obj.data.results);
      }
    }

    return mergedArray;
  };

  return {
    ...response,
    data: mergeDataArrays(response?.data?.pages),
  };
};

export default useGetPokemons;
