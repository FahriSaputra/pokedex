import minimizeStatName from "@/utils/minimizeStatName";

interface IStatItem {
  bgColor: string;
  name: string;
  baseStat: number;
}

const StatItem = (props: IStatItem) => {
  const { bgColor, name, baseStat } = props;
  return (
    <div className="flex gap-2">
      <div className="w-[34px] flex justify-end mr-1">
        <p className="font-bold text-xs">{minimizeStatName(name)}</p>
      </div>

      <div className="w-px bg-gray-light" />

      <p className="text-xs text-gray-dark ml-1 w-[20px]">{baseStat}</p>

      <div className="flex flex-1 items-center rounded">
        <div className={`bg-opacity-20 h-1 flex-1 rounded ${bgColor}`}>
          <div
            className={`flex h-full bg-opacity-100 rounded-s ${bgColor}`}
            style={{ width: `${(100 * baseStat) / 255}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default StatItem;
