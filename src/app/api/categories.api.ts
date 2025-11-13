import { CategoriesStatus, CreateCategoriesInterface, UpdateCategoriesInterface } from "@/interface";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || '';

export async function registerUser(data: CreateCategoriesInterface) {
  try {
    const result = await fetch(`${BACKEND_URL}/api/categories`, {
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

export async function getCategories(status: CategoriesStatus) {
  try {
    const result = await fetch(`${BACKEND_URL}/api/categories?status=${status}`, {
      method: 'GET',
      credentials: 'include',
    })
    const data = await result.json();
    return data;
  } catch (error) {
    throw new Error();
  }
}

export async function getCategoriesForUuid(uuid: string) {
  try {
    const result = await fetch(`${BACKEND_URL}/api/categories/${uuid}`, {
      method: 'GET',
      credentials: 'include',
    })
    const data = await result.json();
    return data;
  } catch (error) {
    throw new Error();
  }
}

export async function updateCategories(uuid: string, data: UpdateCategoriesInterface) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/categories/${uuid}`, {
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

export async function deleteCategories(uuid: string) {
  const res = await fetch(`${BACKEND_URL}/api/categories/${uuid}`, {
    method: "DELETE",
    credentials: 'include',
  })
  return await res.json();
}
