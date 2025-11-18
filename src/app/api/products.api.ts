import { CreateProductsInterface, ProductSingleFiltersInterface } from "@/interface/products";
import { api } from "./api";

export async function createProducts(data: CreateProductsInterface) {
  try {
    const res = await api.post("/products", data);
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response?.data?.message || "Error creating product");
  }
}

export async function getProductsSingle(filters: ProductSingleFiltersInterface) {
  try {
    const res = await api.get("/products", {
      params: {...filters}
    });
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response?.data?.message || "Error get product");
  }
}

export async function getProductsForUuid(uuid?: string) {
  try {
    if (!uuid) throw new Error("UUID is required");
    const res = await api.get(`/products/${uuid}`);
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response?.data?.message || "Error get product for uuid");
  }
}