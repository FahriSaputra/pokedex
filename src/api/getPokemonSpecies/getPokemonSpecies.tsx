import apiClient from "@/api";
import { PokemonSpecies } from "@/models";

const getPokemonSpecies = async (name: string) =>
  await apiClient<PokemonSpecies>(`/pokemon-species/${name}`);

export default getPokemonSpecies;
