import { AddCartItemInterface, UpdateCartItemInterface } from "@/interface";


const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || '';

export async function getCartMe() {
  try {
    const result = await fetch(`${BACKEND_URL}/api/carts`, {
      method: 'GET',
      credentials: 'include',
    })
    const data = await result.json();
    return data;
  } catch (error) {
    throw new Error();
  }
}

export async function addCartItem(data: AddCartItemInterface) {
  try {
    const result = await fetch(`${BACKEND_URL}/api/carts`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    return result;
  } catch (error) {
    throw new Error();
  }
}

export async function clearCart() {
  const res = await fetch(`${BACKEND_URL}/api/carts`, {
    method: "DELETE",
    credentials: 'include',
  })
  return await res.json();
}

export async function updateCartItem(uuid: string, data: UpdateCartItemInterface) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/carts/${uuid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify(data),
    })
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
  } catch (error) {
    throw new Error();
  }
}