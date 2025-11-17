import {
  CategoriesStatus,
  CreateCategoriesInterface,
  UpdateCategoriesInterface,
} from "@/interface";
import { api } from "./api";

export async function createCategories(data: CreateCategoriesInterface) {
  try {
    const res = await api.post("/categories", data);
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response?.data?.message || "Error creating category");
  }
}

export async function getCategories() {
  try {
    const res = await api.get("/categories");
    return res.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Error getting categories");
  }
}

export async function getCategoriesAdmin(status: CategoriesStatus) {
  try {
    const res = await api.get("/categories/admin", {
      params: { status },
    });
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response?.data?.message || "Error getting categories");
  }
}

export async function getCategoriesForUuid(uuid: string) {
  try {
    const res = await api.get(`/categories/${uuid}`);
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response?.data?.message || "Error getting category by UUID");
  }
}

export async function updateCategories(uuid: string, data: UpdateCategoriesInterface) {
  try {
    const res = await api.patch(`/categories/${uuid}`, data);
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response?.data?.message || "Error updating category");
  }
}

export async function deleteCategories(uuid: string) {
  try {
    const res = await api.delete(`/categories/${uuid}`);
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response?.data?.message || "Error deleting category");
  }
}