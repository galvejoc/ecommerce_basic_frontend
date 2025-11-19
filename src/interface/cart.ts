export interface AddCartItemInterface {
  quantity: number,
  productUuid?: string,
  comboUuid?: string,
}

export interface UpdateCartItemInterface {
  quantity: number;
}

export interface CartInterface {
  uuid: string;
  items: CartItemInterface[];
  updateAt: Date;
}

export interface CartItemInterface {
  uuid: string;
  quantity: string;
  subtotal: string;
  updateAt: Date;
}