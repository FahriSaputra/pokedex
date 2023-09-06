import Image from "next/image";

interface IHeroPokeBall {
  bgColor: string;
}

const HeroPokeBall = (props: IHeroPokeBall) => {
  const { bgColor } = props;

  return (
    <div className={`${bgColor} w-full min-h-[224px]`}>
      <Image className="opacity-10" src={"/pokeball.svg"} alt="pokeball" fill />
    </div>
  );
};

export default HeroPokeBall;
