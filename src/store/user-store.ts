
import { UserInterface } from "@/interface";
import { create } from "zustand";

interface UserStore {
  user: UserInterface
  setUser: (value: UserInterface) => void,
  cleanUser: () => void;
}

export const userStore = create<UserStore>()((set) => ({
  user: {
    name: '',
    email: '',
    phone: '',
    username: '',
    avatar: '',
    role: '',
    address: '',
    address_line: '',
    city: '',
    municipality: '',
    province: '',
    numberHome: '',
    note: '',
  },
  setUser: (value: UserInterface) => set(() => ({
    user: value
  })),
  cleanUser: () => set(() => ({
    user: {
      name: '',
      email: '',
      phone: '',
      username: '',
      avatar: '',
      address: '',
      address_line: '',
      city: '',
      municipality: '',
      province: '',
      numberHome: '',
      note: '',
    }
  }))
}))