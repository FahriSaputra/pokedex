"use client";

import { Dispatch, Ref, SetStateAction, useState } from "react";
import Image from "next/image";
import DropdownHeader from "@/components/Home/DropdownHeader";

interface IHomeHeader {
  dropdownRef: Ref<HTMLDivElement>;
  dropdownButtonRef: Ref<HTMLImageElement>;
  onReset: () => void;
  onApply: () => void;
  onSelect: Dispatch<SetStateAction<string>>;
  selected: string;
  showDropdown: boolean;
  onClickFilter: Dispatch<SetStateAction<boolean>>;
}

const HomeHeader = (props: IHomeHeader) => {
  const {
    dropdownRef,
    dropdownButtonRef,
    onReset,
    onApply,
    onSelect,
    selected,
    showDropdown,
    onClickFilter,
  } = props;

  return (
    <div className="py-4 px-2 bg-primary sticky top-0 z-10">
      <div className="flex  flex-1 justify-between items-center">
        <div className="flex">
          <Image src={"/pokeball.svg"} alt="pokeball" width={24} height={24} />
          <h1 className="pl-4 text-white text-2xl font-bold">Pokédex</h1>
        </div>

        <Image
          className="cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAq0lEQVR4nO2UQQrCMBBFH7ruETyCC/EUbor30EVv4kG66C1cSE/RG7RLFSIjfxFKwSQWFJoHWWTm/5lhIIFMJG6m87sGRiNR/b6FUctj3o9sgEGGMkB/kHaQN4gqYS0VEayBNqJ4K08Ue+AJPIDdRH4L3KUxbRIXTXgbTbgCrsqZJpkC6FTo5MXPinXSfMVRxXov1itmuVlwowcU9KByA5dX5ONSvuW/arBgXrQTfBvrv5quAAAAAElFTkSuQmCC"
          alt="filter"
          width={24}
          height={24}
          onClick={() => onClickFilter(!showDropdown)}
          ref={dropdownButtonRef}
        />
        <div
          className="z-10 bg-white rounded-lg shadow w-60 absolute top-12 right-2"
          ref={dropdownRef}
        >
          {showDropdown && (
            <DropdownHeader
              onApply={onApply}
              onReset={onReset}
              onSelect={onSelect}
              selected={selected}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
