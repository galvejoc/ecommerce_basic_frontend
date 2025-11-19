import { CategoriesInterface } from "./categories"
import { TagsInterface } from "./tags"

export enum EnumProductsStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  OUT_OF_STOCK = "OUT_OF_STOCK",
}

export interface CreateProductsInterface {
  name: string,
  descriptionShort: string,
  description: string,
  brand: string,
  stock: number,
  stockMax: number,
  stockMaxOrders: number,
  weight: number,
  weightUnit: string,
  width: number,
  height: number,
  length: number,
  dimensionUnit: string,
  isFragile: true,
  categoryUuids: [
    string],
  tagUuids: [
    string
  ]
}

export interface ProductSingleInterface {
  uuid: string,
  name: string,
  descriptionShort: string,
  status: EnumProductsStatus,
  price: string,
  discount_price: string,
  discount_percentage: string,
  imagen: string,
}

export interface ProductSingleFiltersInterface {
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

export interface ProductDetailInterface {
  uuid: string,
  name: string,
  descriptionShort: string,
  description: string,
  status: EnumProductsStatus,
  brand: string,
  weight: string,
  weightUnit: string,
  width: string,
  height: string,
  length: string,
  dimensionUnit: string,
  isFragile: boolean,
  details: ProductsDetailsElemntInterface[],
  price: string,
  sku: string,
  discount_price: string,
  discount_percentage: string,
  images: DetailImageInterface[],
  tags: TagsInterface[],
  categories: CategoriesInterface[],
}

export interface DetailImageInterface {
  url: string;
  isMain: boolean;
}

export interface ProductsDetailsElemntInterface {
  id: number;
  title: string;
  value: string;
}

export interface ProductPaginationInterface {
  total: number,
  page: number,
  limit: number,
}