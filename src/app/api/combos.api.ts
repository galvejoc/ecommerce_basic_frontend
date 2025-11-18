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

export async function getComboForUuid(uuid?: string) {
  try {
    if (!uuid) throw new Error("UUID is required");
    const res = await api.get(`/combos/${uuid}`);
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response?.data?.message || "Error get product for uuid");
  }
}