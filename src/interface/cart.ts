export interface AddCartItemInterface {
  quantity: number,
  productUuid?: string,
  comboUuid?: string,
}

export interface UpdateCartItemInterface {
  quantity: number;
}

export interface CartInterface {
  cantItems: number;
  totalQuantity: number;
  updatedAt?: Date;
  items?: CartItemInterface[];
}

export interface CartItemInterface {
  uuidItem: string;
  quantity: number;
  subtotal: string;
  updateAt: Date;
  product?: CartItemProductInterface | null;
  combo?: CartItemComboInterface | null;
}

export interface CartItemProductInterface {
  uuid: string;
  name: string;
  descriptionShort: string;
  sku: string;
  price: string;
  discount_price: string;
  discount_percentage: string;
  imagen: string;
}

export interface CartItemComboInterface {
  uuid: string;
  name: string;
  descriptionShort: string;
  sku: string;
  imagen: string;
  subtotal: string;
  price?: string;
  discount_price?: string;
  discount_percentage?: string;
}

export interface CartModalInterface {
  setOpen: (value: boolean)=> void,
  modalRef: any,
  store: any,
}