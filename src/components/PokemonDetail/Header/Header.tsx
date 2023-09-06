import Favorite from "@/components/Favorite";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IHeader {
  href?: string;
  title: string;
  id?: string | number;
  bgColor?: string;
  withFavorite?: boolean;
  isFavorite?: boolean;
  handleToggleFavorite?: (el: React.MouseEvent<HTMLParagraphElement>) => void;
}
const Header = (props: IHeader) => {
  const {
    href,
    title,
    id,
    bgColor,
    withFavorite = false,
    isFavorite = false,
    handleToggleFavorite = () => {},
  } = props;

  return (
    <div
      className={`py-4 px-2 flex items-center gap-2 w-full absolute z-50 ${bgColor}`}
    >
      <Link href={href || "/"}>
        <Image
          className="cursor-pointer"
          src="/arrow_back.svg"
          alt="back"
          width={32}
          height={32}
        />
      </Link>

      <div className="flex flex-1 items-center">
        <h1 className="text-2xl font-bold text-white capitalize text-ellipsis whitespace-nowrap">
          {title}
        </h1>
        {id ? <p className="text-xs font-bold text-white pl-2">#{id}</p> : null}
      </div>

      {withFavorite && (
        <Favorite
          isFavorite={isFavorite}
          onToggleFavorite={handleToggleFavorite}
        />
      )}
    </div>
  );
};

export default Header;
