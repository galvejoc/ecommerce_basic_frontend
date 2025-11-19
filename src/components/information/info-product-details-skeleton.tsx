export function InfoProductDetailsSkeleton() {
  return (
    <div className="w-full mt-10 xs:mt-2 flex flex-col gap-4 mx-10 xs:mx-2 animate-pulse">

      <div className="h-6 w-1/2 bg-gray-300 rounded"></div>

      <div className="h-4 w-3/4 bg-gray-300 rounded"></div>

      <div className="flex gap-4">
        <div className="h-7 w-20 bg-gray-300 rounded"></div>
        <div className="h-7 w-20 bg-gray-300 rounded"></div>
        <div className="h-7 w-16 bg-gray-300 rounded"></div>
      </div>

      <div className="flex gap-4 mt-4 items-center">
        <div className="h-10 w-20 bg-gray-300 rounded"></div>
        <div className="h-10 w-28 bg-gray-300 rounded"></div>
        <div className="h-10 w-32 bg-gray-300 rounded"></div>
      </div>

      <div className="flex flex-col mt-4">
        <div className="h-5 w-28 bg-gray-300 rounded"></div>
        <div className="h-4 w-full bg-gray-300 rounded mt-2"></div>
        <div className="h-4 w-4/5 bg-gray-300 rounded mt-1"></div>
        <div className="h-4 w-2/3 bg-gray-300 rounded mt-1"></div>
      </div>

      <div className="flex flex-col mt-4">
        <div className="h-5 w-24 bg-gray-300 rounded"></div>

        <div className="grid gap-2 mt-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div className="grid grid-cols-2 gap-4" key={i}>
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col mt-4">
        <div className="h-5 w-28 bg-gray-300 rounded"></div>
        <div className="flex gap-2 mt-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div className="h-6 w-20 bg-gray-300 rounded-xl" key={i}></div>
          ))}
        </div>
      </div>

      <div className="flex flex-col mt-4 mb-10">
        <div className="h-5 w-14 bg-gray-300 rounded"></div>
        <div className="flex gap-2 mt-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div className="h-6 w-20 bg-gray-300 rounded-xl" key={i}></div>
          ))}
        </div>
      </div>
    </div>
  );
}