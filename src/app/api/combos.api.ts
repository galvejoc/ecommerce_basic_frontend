import { ComboSingleFiltersInterface } from "@/interface";
import { api } from "./api";

export async function getComboSingle(filters: ComboSingleFiltersInterface) {
  try {
    const res = await api.get("/combos", {
      params: {...filters}
    });
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response?.data?.message || "Error get combo");
  }
}