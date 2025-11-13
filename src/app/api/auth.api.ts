import { api } from "./api";

export async function loginUser(data: any) {
  try {
    const res = await api.post("/auth/login", data);
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response?.data?.message || "Error logging in");
  }
}

export async function logoutUser() {
  try {
    const res = await api.post("/auth/logout");
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response?.data?.message || "Error logging out");
  }
}