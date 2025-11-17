'use client'
import { getCategories } from "@/app/api/categories.api";
import { getTags } from "@/app/api/tags.api";
import { categoriesStore } from "@/store/category-store";
import { productsStore } from "@/store/product-store";
import { tagsStore } from "@/store/tag-store";
import { useEffect } from "react";
import { getTrackBackground, Range } from "react-range";

export function FiltersProducts() {
  const { categories, setCategories } = categoriesStore((state) => state);
  const { tags, setTags } = tagsStore((state) => state);
  const { productSingleFilters, setProductSingleFilters, cleanProductSingleFilters } = productsStore((state) => state);
  const precioDefault = {
    min: 0,
    max: 1000
  }

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data.data);
      } catch (error) {
      }
    };
    const fetchTags = async () => {
      try {
        const data = await getTags();
        setTags(data.data);
      } catch (error) {
      }
    };
    fetchTags();
    fetchCategories();
  }, []);

  const handleSelectCategory = (categoryId: string) => {
    setProductSingleFilters({
      ...productSingleFilters,
      categoryUuid: productSingleFilters.categoryUuid === categoryId ? '' : categoryId,
      page: 1
    });
  };

  const handleSelectTags = (tagUuid: string) => {
    setProductSingleFilters({
      ...productSingleFilters,
      tagUuid: productSingleFilters.tagUuid === tagUuid ? '' : tagUuid,
      page: 1
    });
  };

  return (
    <div className="w-full">
      <div className="flex w-full gap-2">
        <input
          type="text"
          placeholder="Buscar productos..."
          className="w-4/5 p-2 border border-accent focus:outline-none rounded"
          value={productSingleFilters.search || ''}
          onChange={(e) => setProductSingleFilters({
            ...productSingleFilters,
            search: e.target.value,
            page: 1
          })}
        />
        <button
          onClick={() => {
            cleanProductSingleFilters();
          }}
          className="w-1/5 rounded-lg bg-primary text-white"
        >

        </button>
      </div>
      <span className="flex mt-4 text-xl">Categorias</span>
      <hr className="border-t my-1 border-gray-300" />
      <div className="flex overflow-x-auto space-x-2 py-1">
        {categories.map((cat) => (
          <button
            key={cat.uuid}
            onClick={() => handleSelectCategory(cat.uuid)}
            className={`px-3 uppercase py-1 rounded-xl border text-sm border-primary transition ${productSingleFilters.categoryUuid === cat.uuid
              ? 'bg-primary text-white'
              : 'bg-background hover:bg-gray-200 text-secondary'
              }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
      <span className="flex mt-4 text-xl">Etiquetas</span>
      <hr className="border-t my-1 border-gray-300" />
      <div className="flex overflow-x-auto space-x-2 py-1">
        {tags.map((e) => (
          <button
            key={e.uuid}
            onClick={() => handleSelectTags(e.uuid)}
            className={`px-3 uppercase py-1 rounded-xl border border-primary text-sm transition ${productSingleFilters.tagUuid === e.uuid
              ? 'bg-primary text-white'
              : 'bg-background hover:bg-gray-200 text-secondary'
              }`}
          >
            {e.name}
          </button>
        ))}
      </div>
      <span className="flex mt-4 text-xl">Rango de Precio</span>
      <hr className="my-1 border-t border-gray-300" />
      <div className="flex space-x-2 justify-center items-center gap-2">
        <Range
          step={1}
          min={0}
          max={1000}
          values={[productSingleFilters.minPrice ?? 0, productSingleFilters.maxPrice ?? 1000]}
          onChange={(vals) =>
            setProductSingleFilters({
              ...productSingleFilters,
              minPrice: vals[0],
              maxPrice: vals[1],
              page: 1
            })
          }
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                marginLeft: '10px',
                marginRight: '10px',
                marginTop: '10px',
                ...props.style,
                height: '6px',
                width: '100%',
                background: getTrackBackground({
                  values: [productSingleFilters.minPrice ?? 0, productSingleFilters.maxPrice ?? 1000],
                  colors: ['#BFC1C5', '#6EC1E4', '#BFC1C5'],
                  min: precioDefault.min,
                  max: precioDefault.max
                }),
                borderRadius: '3px'
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props, index }) => {
            const { key, ...thumbProps } = props;
            return (
              <div
                key={key ?? index}
                {...thumbProps}
                className="h-5 w-5 bg-primary rounded-full shadow-md"
              />
            );
          }}
        />

      </div>
      <div className="flex mt-3 gap-4 ">
        <input
          type="number"
          placeholder="Precio mínimo"
          className="w-1/2 p-2 border border-accent rounded focus:outline-none"
          value={productSingleFilters.minPrice ?? ''}
          onChange={(e) => setProductSingleFilters({
            ...productSingleFilters,
            minPrice: e.target.value ? +e.target.value : undefined,
            page: 1
          })}
        />
        <input
          type="number"
          placeholder="Precio máximo"
          className="w-1/2 p-2 border border-accent rounded focus:outline-none"
          value={productSingleFilters.maxPrice ?? ''}
          onChange={(e) => setProductSingleFilters({
            ...productSingleFilters,
            maxPrice: e.target.value ? +e.target.value : undefined,
            page: 1
          })}
        />
      </div>
    </div>
  )
}
