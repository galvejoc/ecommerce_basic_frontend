import { CreateProductsInterface } from "@/interface/products";
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