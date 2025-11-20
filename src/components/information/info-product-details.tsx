'use client';
import { ProductDetailInterface } from "@/interface";
import { productsStore } from "@/store";
import { useRouter } from "next/navigation";

export function InfoProductDetails({ data }: { data: ProductDetailInterface }) {
  const router = useRouter();
  const { productSingleFilters, setProductSingleFilters } = productsStore((state) => state);

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
    setProductSingleFilters({
      ...productSingleFilters,
      categoryUuid: categoryUuid,
    })
    router.push('/products');
  }

  const handleTagClick = (tagUuid: string) => {
    setProductSingleFilters({
      ...productSingleFilters,
      tagUuid: tagUuid,
    })
    router.push('/products');
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
        <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors cursor-pointer">
          Add to Cart
        </button>
        <button className="bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-lg  transition-colors cursor-pointer">
          Add and Buy Now
        </button>
      </div>

      <div className="mt-4 flex flex-col">
        <span className="text-lg font-medium">
          Descricption
        </span>
        <span className="text-md">{data.description}</span>
      </div>

      <div className="mt-4 flex flex-col">
        <span className="text-lg font-medium">
          Details
        </span>
        <div className="mt-2 grid gap-2">
          {data.details.map((detail) => (
            <div className="grid grid-cols-2" key={detail.id}>
              <span className="text-md uppercase">{detail.title}:</span>
              <span className="text-md">{detail.value}</span>
            </div>
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