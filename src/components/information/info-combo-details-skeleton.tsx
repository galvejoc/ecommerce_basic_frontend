export function InfoComboDetailsSkeleton() {
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

      <div className="mt-4 flex flex-col">
        <div className="h-5 w-40 bg-gray-300 rounded"></div>

        <div className="mt-3 grid gap-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="border rounded-xl p-3 flex gap-4 bg-gray-100"
            >
              <div className="h-20 w-20 bg-gray-300 rounded-lg"></div>

              <div className="flex flex-col flex-1 gap-2">
                <div className="h-4 w-3/5 bg-gray-300 rounded"></div>
                <div className="h-4 w-4/5 bg-gray-300 rounded"></div>
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-col">
        <div className="h-5 w-28 bg-gray-300 rounded"></div>
        <div className="flex gap-2 mt-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-6 w-20 bg-gray-300 rounded-xl"></div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-col mb-10">
        <div className="h-5 w-14 bg-gray-300 rounded"></div>
        <div className="flex gap-2 mt-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-6 w-20 bg-gray-300 rounded-xl"></div>
          ))}
        </div>
      </div>
    </div>
  );
}