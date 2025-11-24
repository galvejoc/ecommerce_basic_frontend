'use client';
import { ComboDetailInterface, EnumCardAddItemInfo } from "@/interface";
import { comboStore } from "@/store";
import { useRouter } from "next/navigation";
import ComboItemCard from "../card/combo-item-card";
import { CartAddItemInfo } from "../cart/cart-add-item-info";

export function InfoComboDetails({ data }: { data: ComboDetailInterface }) {
  const router = useRouter();
  const { comboSingleFilters, setComboSingleFilters } = comboStore((state) => state);

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
      <CartAddItemInfo uuid={data.uuid} type={EnumCardAddItemInfo.COMBO}/>
      <div className="mt-4 flex flex-col">
        <span className="text-lg font-medium">
          Productos incluidos
        </span>
        <div className="mt-2 flex gap-4">
          {data.items.map((item, index) => (
            <ComboItemCard data={item} key={index} />
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
