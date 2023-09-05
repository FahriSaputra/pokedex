import apiClient from "@/api";
import { NamedAPIResourceList } from "@/models";

const getPokemons = async (next: string | undefined) => {
  const url = !!next
    ? next
    : "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

  return await apiClient<NamedAPIResourceList>(url);
};

export default getPokemons;
