import {
  CreateTagsInterface,
  TagsStatus,
  UpdateTagsInterface,
} from "@/interface/tags";
import { api } from "./api";

export async function createTags(data: CreateTagsInterface) {
  try {
    const res = await api.post("/tags", data);
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response?.data?.message || "Error creating tag");
  }
}

export async function getTags() {
  try {
    const res = await api.get("/tags");
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response?.data?.message || "Error getting tags");
  }
}

export async function getTagsAdmin(status: TagsStatus) {
  try {
    const res = await api.get("/tags", {
      params: { status },
    });
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response?.data?.message || "Error getting tags");
  }
}

export async function getTagsForUuid(uuid: string) {
  try {
    const res = await api.get(`/tags/${uuid}`);
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response?.data?.message || "Error getting tag by UUID");
  }
}

export async function updateTags(uuid: string, data: UpdateTagsInterface) {
  try {
    const res = await api.patch(`/tags/${uuid}`, data);
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response?.data?.message || "Error updating tag");
  }
}

export async function deleteTags(uuid: string) {
  try {
    const res = await api.delete(`/tags/${uuid}`);
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.response?.data?.message || "Error deleting tag");
  }
}
