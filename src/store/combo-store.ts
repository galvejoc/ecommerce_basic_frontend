interface ComboSingleStore {
  combo: ComboSingleInterface[]
  setCombo: (value: ComboSingleInterface[]) => void,
  addCombo: (value: ComboSingleInterface | ComboSingleInterface[]) => void;
  cleanCombo: () => void;

  comboSingleFilters: ComboSingleFiltersInterface,
  setComboSingleFilters: (value: ComboSingleFiltersInterface) => void,
  cleanComboSingleFilters: () => void;
}