import {
  RegisterFormDataInterface,
  UpdateUserInterface,
} from "@/interface";
import { api } from "./api";

export async function registerUser(data: RegisterFormDataInterface) {
  try {
    const res = await api.post("/users/register", data);
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response?.data?.message || "Error registering user");
  }
}

export async function getUserMe() {
  try {
    const res = await api.get("/users/me");
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response?.data?.message || "Error fetching user info");
  }
}

export async function updateUser(data: UpdateUserInterface) {
  try {
    const res = await api.patch("/users", data);
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response?.data?.message || "Error updating user");
  }
}