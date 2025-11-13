import { RegisterFormDataInterface,  UpdateUserInterface } from "@/interface";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || '';

export async function registerUser(data: RegisterFormDataInterface) {
  try {
    const result = await fetch(`${BACKEND_URL}/api/users/register`, {
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

export async function getUserMe() {
  try {
    const result = await fetch(`${BACKEND_URL}/api/users/me`, {
      method: 'GET',
      credentials: 'include',
    })
    const data = await result.json();
    return data;
  } catch (error) {
    throw new Error();
  }
}

export async function updateUser(data: UpdateUserInterface) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/users`, {
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