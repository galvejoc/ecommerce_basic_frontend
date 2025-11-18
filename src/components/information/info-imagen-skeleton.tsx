
export function InfoImagenSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <span className="object-contain w-[400px] h-[400px] animate-pulse bg-gray-300 rounded-2xl"/>
      <div className="flex gap-5">
        <span className=" w-[100px] h-[100px] animate-pulse bg-gray-300 rounded-2xl"/>
        <span className=" w-[100px] h-[100px] animate-pulse bg-gray-300 rounded-2xl"/>
        <span className=" w-[100px] h-[100px] animate-pulse bg-gray-300 rounded-2xl"/>
      </div>
    </div>
  )
}
