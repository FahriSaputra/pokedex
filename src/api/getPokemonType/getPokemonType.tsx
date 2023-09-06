import apiClient from "@/api";
import { NamedAPIResourceList } from "@/models";

const getPokemonType = async () => {
  return await apiClient<NamedAPIResourceList>("/type");
};

export default getPokemonType;
