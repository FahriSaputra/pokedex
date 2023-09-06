import apiClient from "@/api";
import { Type } from "@/models";

const getPokemonByType = async (name: string) =>
  await apiClient<Type>(`/type/${name}`);

export default getPokemonByType;
