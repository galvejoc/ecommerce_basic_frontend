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


