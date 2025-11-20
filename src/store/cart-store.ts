import { CartInterface } from "@/interface";
import { create } from "zustand";

interface CartStore {
  store: CartInterface[];
  setCart: (value: CartInterface[]) => void,
}

export const userStore = create<CartStore>()((set) => ({
  store: [],
  setCart: (value) => set(() => ({
    store: value
  })),
}))