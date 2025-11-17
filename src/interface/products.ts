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
  status: string,
  price: string,
  discount_price: string,
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
