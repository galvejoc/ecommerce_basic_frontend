import { TagsInterface } from "@/interface";
import { create } from "zustand";

interface TagsStore {
  tags: TagsInterface[],
  setTags: (value: TagsInterface[]) => void,
}

export const tagsStore = create<TagsStore>()((set) => ({
  tags: [],
  setTags: (value: TagsInterface[]) => set(() => ({
    tags: value
  })),
}))