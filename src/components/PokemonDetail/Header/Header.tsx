import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IHeader {
  href?: string;
  title: string;
  id: string | number;
}
const Header = (props: IHeader) => {
  const { href, title, id } = props;

  return (
    <div className="p-6 flex items-center gap-2 w-full absolute z-50">
      <Link href={href || "/"}>
        <Image
          className="cursor-pointer"
          src="/arrow_back.svg"
          alt="back"
          width={32}
          height={32}
        />
      </Link>

      <h1 className="flex-1 text-2xl font-bold text-white capitalize text-ellipsis whitespace-nowrap">
        {title}
      </h1>
      <p className="text-xs font-bold text-white">#{id}</p>
    </div>
  );
};

export default Header;
