import Link from "next/link";
export function CartItemSimpleEmpty() {
  return (
    <div className="flex flex-col w-full">
      <p className="text-gray-400 text-sm">Carrito vacío</p>
      <div className="w-full flex gap-4 my-1">
        <Link href="/products"
          className="mt-4 px-4 py-2 w-1/2 bg-primary text-white rounded-lg text-center
        hover:bg-primary/90 duration-300 transition-colors text-sm cursor-pointer"
        >
          Buscar producto
        </Link>
        <Link href="/combo"
          className="mt-4 px-4 py-2 w-1/2 bg-secondary text-white rounded-lg text-center
        hover:bg-secondary/90 duration-300 transition-colors text-sm cursor-pointer"
        >
          Buscar Combo
        </Link>
      </div>
    </div>
  )
}
