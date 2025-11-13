import { CartInterface } from "@/interface";
import { create } from "zustand";

export const userStore = create<CartInterface>()((set) => ({}))