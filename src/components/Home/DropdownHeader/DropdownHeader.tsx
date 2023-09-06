"use client";

import { Dispatch, Ref, SetStateAction } from "react";

import useGetPokemonType from "@/hooks/useGetPokemonTypes";

interface IDropdownHeader {
  onReset: () => void;
  onApply: () => void;
  onSelect: Dispatch<SetStateAction<string>>;
  selected: string;
  ref?: Ref<HTMLDivElement>;
}

const DropdownHeader = (props: IDropdownHeader) => {
  const { onReset, onApply, onSelect, selected, ref } = props;

  const { data: typeData } = useGetPokemonType();

  const types = typeData?.data?.results;

  return (
    <>
      <p className="p-4">Types</p>

      <ul
        className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 "
        aria-labelledby="dropdownSearchButton"
      >
        {types?.map(({ name }) => (
          <li key={name}>
            <div className="flex items-center p-2 rounded hover:bg-gray-100 ">
              <input
                id={name}
                type="checkbox"
                value={name}
                radioGroup="types"
                className="w-4 h-4 text-primary bg-gray-100 accent-primary rounded focus:ring-primary"
                checked={selected === name}
                onChange={() => onSelect(name)}
              />
              <label
                htmlFor={name}
                className="w-full ml-2 text-sm font-medium text-gray-900 rounded "
              >
                {name}
              </label>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-end p-4">
        <button
          className="px-2 mr-2 bg-gray-medium text-white rounded"
          onClick={onReset}
        >
          Reset
        </button>
        <button
          className="px-2 bg-primary text-white rounded"
          onClick={onApply}
        >
          Apply
        </button>
      </div>
    </>
  );
};

export default DropdownHeader;
