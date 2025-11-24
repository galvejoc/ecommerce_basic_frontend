import { AddCartItemInterface, UpdateCartItemInterface } from "@/interface";
import { api } from "./api";

export async function getCartMe() {
  try {
    const res = await api.get("/carts");
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response?.data?.message || "Error getting cart");
  }
}

export async function addCartItem(data: AddCartItemInterface) {
  try {
    const res = await api.post("/carts/item", data);
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response?.data?.message || "Error adding item to cart");
  }
}

export async function clearCart() {
  try {
    const res = await api.delete("/carts");
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response?.data?.message || "Error clearing cart");
  }
}

export async function updateCartItem(uuid: string, data: UpdateCartItemInterface) {
  try {
    const res = await api.patch(`/carts/item/${uuid}`, data);
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response?.data?.message || "Error updating cart item");
  }
}