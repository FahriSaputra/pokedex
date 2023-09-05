import apiClient from "@/api";
import { Pokemon } from "@/models";

const getPokemonDetail = async (name: string) =>
  await apiClient<Pokemon>(`/pokemon/${name}`);

export default getPokemonDetail;
