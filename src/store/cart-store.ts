import { CartInterface } from "@/interface";
import { create } from "zustand";

interface CartStore {
  cart: CartInterface;
  setCart: (value: CartInterface) => void,
}

export const cartStore = create<CartStore>()((set) => ({
  cart: {
    cantItems: 0,
    totalQuantity: 0
  },
  setCart: (value) => set(() => ({
    cart: value
  })),
}))