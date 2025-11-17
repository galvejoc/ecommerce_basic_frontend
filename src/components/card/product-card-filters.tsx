'use client'

import { getCategories } from "@/app/api/categories.api";
import { getTags } from "@/app/api/tags.api";
import { categoriesStore } from "@/store/category-store";
import { productsStore } from "@/store/product-store";
import { tagsStore } from "@/store/tag-store";
import { useEffect } from "react";

export function ProductCardFilters() {
  const { categories, setCategories } = categoriesStore((state) => state);
  const { tags, setTags } = tagsStore((state) => state);
  const { productSingleFilters, setProductSingleFilters, cleanProductSingleFilters } = productsStore((state) => state);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
      }
    };
    const fetchTags = async () => {
      try {
        const data = await getTags();
        setTags(data);
      } catch (error) {
      }
    };
    fetchTags();
    fetchCategories();
  }, []);

  return (
    <div>

    </div>
  )
}
