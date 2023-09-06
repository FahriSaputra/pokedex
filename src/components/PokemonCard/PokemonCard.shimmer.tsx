const Shimmer = () => {
  return (
    <div className="w-full border rounded-lg cursor-pointer hover:border-cyan-950">
      <div className="flex bg-white rounded-lg justify-between items-center px-2 pt-2">
        <div className="leading-relaxed animate-pulse h-4 bg-gray-200 w-8 rounded-md" />
        <div className="leading-relaxed animate-pulse h-4 bg-gray-200 w-4 rounded-md" />
      </div>

      <div className="flex justify-center py-2">
        <div className="leading-relaxed animate-pulse bg-gray-200 rounded-md  w-1/2 h-20 sm:h-32" />
      </div>

      <div className="flex flex-col items-center bg-gray-background rounded-lg p-2">
        <div className="leading-relaxed animate-pulse h-4 bg-gray-200 w-20 rounded-md mb-2" />

        <div className="flex flex-start flex-wrap gap-2">
          <div className="leading-relaxed animate-pulse h-4 bg-gray-200 w-8 rounded-md" />
          <div className="leading-relaxed animate-pulse h-4 bg-gray-200 w-6 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
