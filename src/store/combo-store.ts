import { ComboSingleFiltersInterface, ComboSingleInterface } from "@/interface";
import { create } from "zustand";

interface ComboSingleStore {
  combo: ComboSingleInterface[]
  setCombo: (value: ComboSingleInterface[]) => void,
  addCombo: (value: ComboSingleInterface | ComboSingleInterface[]) => void;
  cleanCombo: () => void;

  comboSingleFilters: ComboSingleFiltersInterface,
  setComboSingleFilters: (value: ComboSingleFiltersInterface) => void,
  cleanComboSingleFilters: () => void;
}

export const comboStore = create<ComboSingleStore>()((set) => ({
  combo: [],
  setCombo: (value) => set(() => ({
    combo: value
  })),
  addCombo: (value) =>
    set((state) => ({
      combo: [
        ...state.combo,
        ...(Array.isArray(value) ? value : [value])
      ]
    })),
  cleanCombo: () => set(() => ({
    combo: []
  })),

  // Filtros
  comboSingleFilters: {
    name: undefined,
    categoryUuid: undefined,
    tagUuid: undefined,
    brand: undefined,
    minPrice: undefined,
    maxPrice: undefined,
    search: undefined,
    page: 1,
    limit: 12,
  },
  setComboSingleFilters: (value) => set(() => ({
    comboSingleFilters: value
  })),
  cleanComboSingleFilters: () => set(() => ({
    comboSingleFilters: {
      name: undefined,
      categoryUuid: undefined,
      tagUuid: undefined,
      brand: undefined,
      minPrice: undefined,
      maxPrice: undefined,
      search: undefined,
      page: 1,
      limit: 12,
    }
  }))
}));