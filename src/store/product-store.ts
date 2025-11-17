import { ProductSingleFiltersInterface, ProductSingleInterface } from "@/interface/products";
import { create } from "zustand";

interface ProductSingleStore {
  product: ProductSingleInterface
  setProduct: (value: ProductSingleInterface) => void,
  cleanProduct: () => void;

  productSingleFilters: ProductSingleFiltersInterface,
  setProductSingleFilters: (value: ProductSingleFiltersInterface) => void,
  cleanProductSingleFilters: () => void;
}

export const productsStore = create<ProductSingleStore>()((set) => ({
  product: {
    uuid: '',
    name: '',
    descriptionShort: '',
    status: '',
    price: '',
    discount_price: '',
    imagen: '',
  },
  setProduct: (value: ProductSingleInterface) => set(() => ({
    product: value
  })),
  cleanProduct: () => set(() => ({
    product: {
      uuid: '',
      name: '',
      descriptionShort: '',
      status: '',
      price: '',
      discount_price: '',
      imagen: '',
    }
  })),
  
  productSingleFilters: {
    name: undefined,
    categoryUuid: undefined,
    tagUuid: undefined,
    brand: undefined,
    minPrice: undefined,
    maxPrice: undefined,
    search: undefined,
    page: 1,
    limit: 10,
  },
  setProductSingleFilters: (value: ProductSingleFiltersInterface) => set(() => ({
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
      limit: 10,
    }
  }))
}))