export interface CreateTagsInterface {
  name: string;
}

export interface UpdateTagsInterface {
  name: string;
}

export enum TagsStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  ALL = "ALL",
}

export interface TagsInterface {
  uuid: string;
  name: string;
}