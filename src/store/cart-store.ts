import { CartInterface } from "@/interface";
import { create } from "zustand";

interface CartStore {
  store: CartInterface;
  setCart: (value: CartInterface) => void,
}

export const cartStore = create<CartStore>()((set) => ({
  store: {
    cantItems: 0,
    totalQuantity: 0
  },
  setCart: (value) => set(() => ({
    store: value
  })),
}))