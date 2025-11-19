import { CategoriesInterface } from "./categories";
import { EnumProductsStatus } from "./products";
import { TagsInterface } from "./tags";

export enum EnumComboStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  OUT_OF_STOCK = "OUT_OF_STOCK",
}
export interface ComboSingleInterface {
  uuid: string,
  name: string,
  descriptionShort: string,
  status: string,
  subtotal: string,
  price: string,
  sku: string,
  discount_price: string,
  discount_percentage: string,
  imagen: string,
}
export interface ComboSingleFiltersInterface {
  name?: string,
  categoryUuid?: string,
  tagUuid?: string,
  brand?: string,
  minPrice?: number,
  maxPrice?: number,
  search?: string,
  page: number,
  limit: number,
}

export interface ComboDetailInterface {
  uuid: string,
  name: string,
  descriptionShort: string,
  subtotal: string,
  sku: string,
  price: string,
  discount_price: string,
  discount_percentage: string,
  images: string,
  status: EnumComboStatus,
  items: ComboDetailItemInterface[],
  total_items: number,
  total_products: number,
  tags: TagsInterface[],
  categories: CategoriesInterface[],
}

export interface ComboDetailItemInterface {
  quantity: string,
  subtotal: string,
  uuid: string,
  name: string,
  descriptionShort: string,
  imagen: string,
  price: string,
  status: EnumProductsStatus,
  discount_price: string,
  discount_percentage: string,
}
export interface ComboPaginationInterface {
  total: number,
  page: number,
  limit: number,
}