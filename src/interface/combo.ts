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
  images: string,
}