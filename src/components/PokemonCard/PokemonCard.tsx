import Image from "next/image";
import PokemonType from "@/components/PokemonType";
import useGetPokemonDetail from "@/hooks/useGetPokemonDetail";
import Link from "next/link";
import Favorite from "../Favorite/Favorite";
import { NamedAPIResource } from "@/models";

interface IPokemonCard {
  species: NamedAPIResource;
  isFavorite: boolean;
  onToggleFavorite: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    species: NamedAPIResource
  ) => void;
}

const PokemonCard = (props: IPokemonCard) => {
  const { species, isFavorite, onToggleFavorite } = props;

  const { data } = useGetPokemonDetail(species?.name);

  const types = data?.data?.types;

  const image = data?.data?.sprites?.other?.["official-artwork"]?.front_default;

  const handleToggleFavorite = (el: React.MouseEvent<HTMLParagraphElement>) => {
    onToggleFavorite(el, species);
  };

  return (
    <Link href={`/${species?.name}`}>
      <div className="w-full border rounded-lg cursor-pointer hover:border-cyan-950">
        <div className="flex bg-white rounded-lg flex-col">
          <div className="flex justify-between items-center flex-auto px-2 pt-2">
            <p className="text-grey-medium text-xs font-normal">
              #{data?.data?.id}
            </p>

            <Favorite
              isFavorite={isFavorite}
              onToggleFavorite={handleToggleFavorite}
            />
          </div>

          {!!image && (
            <div className="relative w-full h-20 sm:h-32">
              <Image src={image} alt={species?.name} fill objectFit="contain" />
            </div>
          )}

          <div className="flex flex-col items-center bg-gray-background rounded-lg p-2">
            <p className="pb-2">{species?.name}</p>

            <div className="flex flex-start flex-wrap gap-2">
              {types?.map((data) => (
                <PokemonType key={data?.slot} type={data?.type?.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
