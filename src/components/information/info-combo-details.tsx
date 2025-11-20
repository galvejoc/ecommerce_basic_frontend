'use client';
import { ComboDetailInterface } from "@/interface";
import { comboStore } from "@/store";
import { useRouter } from "next/navigation";
import ComboItemCard from "../card/combo-item-card";

export function InfoComboDetails({ data }: { data: ComboDetailInterface }) {
  const router = useRouter();
  const { comboSingleFilters, setComboSingleFilters } = comboStore((state) => state);

  const handleAddToCart = () => {
    // Lógica para agregar el producto al carrito
  };

  const handleBuyNow = () => {
    // Lógica para comprar el producto inmediatamente
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Lógica para cambiar la cantidad
  };

  const handleCategoryClick = (categoryUuid: string) => {
    setComboSingleFilters({
      ...comboSingleFilters,
      categoryUuid: categoryUuid,
    })
    router.push('/combo');
  }

  const handleTagClick = (tagUuid: string) => {
    setComboSingleFilters({
      ...comboSingleFilters,
      tagUuid: tagUuid,
    })
    router.push('/combo');
  }

  return (
    <div className="w-full mt-10 xs:mt-2 flex flex-col gap-2 mx-10 xs:mx-2">
      <span className="text-lg font-bold">{data.name}</span>
      <span className="text-md">{data.descriptionShort}</span>

      <div className="flex gap-4">
        <span className="text-2xl font-bold text-secondary">${data.price}</span>
        <span className="text-2xl font-bold text-secondary">${data.discount_price}</span>
        <span className="text-2xl font-bold text-secondary">{data.discount_percentage}</span>
      </div>

      <div className="flex gap-2 justify-start items-center mt-4" >
        <input type="number" className="border border-primary rounded-lg w-20 h-10 font-medium text-lg px-2" defaultValue={1} />
        <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg cursor-pointer duration-300 transition-colors">
          Add to Cart
        </button>
        <button className="bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-lg cursor-pointer duration-300 transition-colors">
          Add and Buy Now
        </button>
      </div>

      <div className="mt-4 flex flex-col">
        <span className="text-lg font-medium">
          Productos incluidos
        </span>
        <div className="mt-2 flex gap-4">
          {data.items.map((item) => (
            <ComboItemCard data ={item}/>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-col">
        <span className="text-lg font-medium">
          Categories
        </span>
        <div className="flex gap-2 mt-1">
          {data.categories.map((categories) => (
            <button
              key={categories.uuid}
              className="px-3 uppercase py-1 rounded-xl border text-xs border-primary transition bg-background hover:bg-gray-200 text-secondary cursor-pointer"
              onClick={() => handleCategoryClick(categories.uuid)}
            >
              {categories.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-col">
        <span className="text-lg font-medium">
          Tags
        </span>
        <div className="flex gap-2 mt-1">
          {data.tags.map((tag) => (
            <button
              key={tag.uuid}
              className="px-3 uppercase py-1 rounded-xl border text-xs border-primary transition bg-background text-secondary hover:bg-gray-200 cursor-pointer"
              onClick={() => handleTagClick(tag.uuid)}
            >
              {tag.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
