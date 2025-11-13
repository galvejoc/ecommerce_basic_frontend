export interface UserInterface {
  name: string;
  email: string;
  phone: string;
  username: string;
  avatar: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirm?: string;
}