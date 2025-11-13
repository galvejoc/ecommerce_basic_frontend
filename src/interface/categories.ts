export interface CreateCategoriesInterface {
  name: string;
}

export interface UpdateCategoriesInterface {
  name: string;
}

export enum CategoriesStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  ALL = "ALL",
}