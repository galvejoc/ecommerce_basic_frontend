import clsx from 'clsx';
import { ProductSingleInterface } from '../../interface/products';
import Link from 'next/link';

export function ProductCard({ data }: { data: ProductSingleInterface }) {
  const isOut = data.status === "OUT_OF_STOCK";
  return (
    <Link href={`/products/${data.uuid}`} className="">
      <div className={clsx(
        "w-60 shadow-md rounded-lg hover:cursor-pointer hover:shadow-xl transition duration-300",
        isOut && "opacity-50"
      )}>
        <div className="w-full h-40 rounded-t-lg mb-2 overflow-hidden relative">
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
        <div className="flex flex-col p-2 relative h-28">
          <span className="text-sm font-medium text-secondary uppercase">{data.name}</span>
          <span className="text-xs mt-1 line-clamp-2">{data.descriptionShort}  </span>
          <span className="mt-15 absolute">
            {data.price ?
              <>
                {!data.discount_percentage || +data.discount_percentage === 0 ?
                  <span className='text-secondary text-lg font-bold '>
                    ${data.price}
                  </span> :
                  <div className='flex'>
                    <span className='text-lg text-secondary'>{data.discount_price}</span>
                    <span className='text-sm line-through'>{data.price}</span>
                  </div>}

              </> : ''}</span>
        </div>
      </div>
    </Link>
  )
}
