import { CategoriesInterface } from "@/interface";
import { create } from "zustand";

interface CategoriesStore {
  categories: CategoriesInterface[],
  setCategories: (value: CategoriesInterface[]) => void,
}

export const categoriesStore = create<CategoriesStore>()((set) => ({
  categories: [],
  setCategories: (value: CategoriesInterface[]) => set(() => ({
    categories: value
  })),
}))