import { ProductSingleFiltersInterface, ProductSingleInterface } from "@/interface/products";
import { create } from "zustand";

interface ProductSingleStore {
  product: ProductSingleInterface[]
  setProduct: (value: ProductSingleInterface[]) => void,
  addProduct: (value: ProductSingleInterface | ProductSingleInterface[]) => void;
  cleanProduct: () => void;

  productSingleFilters: ProductSingleFiltersInterface,
  setProductSingleFilters: (value: ProductSingleFiltersInterface) => void,
  cleanProductSingleFilters: () => void;
}

export const productsStore = create<ProductSingleStore>()((set) => ({
  product: [],
  setProduct: (value) => set(() => ({
    product: value
  })),
  addProduct: (value) =>
    set((state) => ({
      product: [
        ...state.product,
        ...(Array.isArray(value) ? value : [value])
      ]
    })),
  cleanProduct: () => set(() => ({
    product: []
  })),

  // Filtros
  productSingleFilters: {
    name: undefined,
    categoryUuid: undefined,
    tagUuid: undefined,
    brand: undefined,
    minPrice: undefined,
    maxPrice: undefined,
    search: undefined,
    page: 1,
    limit: 12,
  },
  setProductSingleFilters: (value) => set(() => ({
    productSingleFilters: value
  })),
  cleanProductSingleFilters: () => set(() => ({
    productSingleFilters: {
      name: undefined,
      categoryUuid: undefined,
      tagUuid: undefined,
      brand: undefined,
      minPrice: undefined,
      maxPrice: undefined,
      search: undefined,
      page: 1,
      limit: 12,
    }
  }))
}));