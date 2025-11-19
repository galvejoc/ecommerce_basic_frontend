'use client'
import { useState } from 'react'
import { FiltersProducts, ProductCardList } from "@/components"
import { ArrowLeftToLine, ArrowRightFromLine } from 'lucide-react'

export default function Products() {
  const [openFilters, setOpenFilters] = useState(true)

  return (
    <div className="mt-10 flex gap-6">
      <div className={`${openFilters ? 'w-64' : 'w-0'} transition-all duration-300 overflow-hidden`}>
        {openFilters && (
          <FiltersProducts />
        )}
      </div>
      <div className="flex-1">
        <button
          onClick={() => setOpenFilters(!openFilters)}
          className="mb-4 px-4 py-2 rounded-lg bg-primary text-white hover:cursor-pointer"
        >
          {openFilters ?
            <div className='flex justify-center gap-2'><ArrowLeftToLine />Ocultar filtros</div> :
            <div className='flex '><ArrowRightFromLine />Mostrar filtros</div>}

        </button>

        <ProductCardList openFilters={openFilters} />
      </div>
    </div>
  )
}