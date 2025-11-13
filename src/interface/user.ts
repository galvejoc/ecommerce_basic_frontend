export interface UserInterface {
  name: string;
  email: string;
  phone: string;
  username: string;
  avatar: string;
}

export interface RegisterFormDataInterface {
  name: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirm?: string;
}

export interface UpdateUserInterface {
  name?: string,
  phone?: string,
  email?: string,
  avatar?: string,
  address_line?: string,
  city?: string,
  municipality?: string,
  province?: string,
  numberHome?: string
  note?: string
}