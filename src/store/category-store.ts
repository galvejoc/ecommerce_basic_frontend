import { CategoriesInterface, TagsInterface } from "@/interface";
import { create } from "zustand";

interface CategoriesStore {
  categories: CategoriesInterface,
  setCategories: (value: CategoriesInterface) => void,
}

export const categoriesStore = create<CategoriesStore>()((set) => ({
  categories: {
    uuid: '',
    name: '',
  },
  setCategories: (value: CategoriesInterface) => set(() => ({
    categories: value
  })),
}))