import { ComboDetailItemInterface } from "@/interface";
import clsx from "clsx";
import Link from "next/link";

export default function ComboItemCard({ data }: { data: ComboDetailItemInterface }) {
  const isOut = data.status === "OUT_OF_STOCK";
  return (
    <Link href={`/products/${data.uuid}`} className="">
      <div className={clsx(
        "w-36 shadow-md rounded-lg hover:cursor-pointer hover:shadow-xl transition duration-300",
        isOut && "opacity-50"
      )}>
        <div className="w-full rounded-t-lg mb-1 overflow-hidden relative">
          <img
            src={data.imagen ? data.imagen : '/placeholder-product.png'}
            alt={data.name}
            className="w-full h-full object-cover"
          />
          {isOut && (
            <span className="absolute bottom-1 right-1 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              Sin existencias
            </span>
          )}
        </div>
        <div className="flex flex-col p-2 relative h-24">
          <span className="text-xs font-medium line-clamp-2 text-secondary uppercase">{data.name}</span>
          {/* <span className="text-xs mt-1 line-clamp-2">{data.descriptionShort}  </span> */}
          <span className="mt-10 absolute">
            <div className="flex gap-2">
              <span className='text-xs text-secondary '>
                Cant: {data.quantity}
              </span>
              <span className='text-xs text-secondary'>
                Subtotal: ${data.subtotal}
              </span>
            </div>
          </span>
        </div>
      </div>
    </Link>
  )
}
