import Image from "next/image";
import PokemonType from "@/components/PokemonType";
import useGetPokemonDetail from "@/hooks/useGetPokemonDetail";

interface IPokemonCard {
  name: string;
}

const PokemonCard = (props: IPokemonCard) => {
  const { name } = props;

  const { data } = useGetPokemonDetail(name);

  const types = data?.data?.types;

  const image = data?.data?.sprites?.other?.["official-artwork"]?.front_default;

  return (
    <div className="w-full border rounded-lg cursor-pointer hover:border-cyan-950">
      <div className="flex bg-white rounded-lg flex-col">
        <div className="flex justify-end flex-auto px-2 pt-2">
          <p className="text-grey-medium text-xs font-normal">
            #{data?.data?.order}
          </p>
        </div>

        {!!image && (
          <div className="relative w-full h-20 sm:h-32">
            <Image src={image} alt={name} fill objectFit="contain" />
          </div>
        )}

        <div className="flex flex-col items-center bg-gray-background rounded-lg p-2">
          <p className="pb-2">{name}</p>

          <div className="flex flex-start flex-wrap gap-2">
            {types?.map((data) => (
              <PokemonType key={data?.slot} type={data?.type?.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
