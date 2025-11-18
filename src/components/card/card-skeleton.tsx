
export function CardSkeleton() {
  return (
    <div className="w-60 shadow-md rounded-lg animate-pulse">
      <div className="w-full h-40 rounded-t-lg bg-gray-300 mb-2"></div>
      <div className="flex flex-col p-2 h-28">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-1"></div>
        <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
        <div className="mt-auto flex items-center gap-2">
          <div className="h-5 bg-gray-300 rounded w-12"></div>
        </div>
      </div>
    </div>
  )
}
