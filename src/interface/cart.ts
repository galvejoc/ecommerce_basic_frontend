export interface AddCartItemInterface {
  quantity: number,
  productUuid?: string,
  comboUuid?: string,
}

export interface UpdateCartItemInterface {
  quantity: number;
}

export interface CartInterface {}