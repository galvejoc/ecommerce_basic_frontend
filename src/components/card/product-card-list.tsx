'use client'
import { getProductsSingle } from "@/app/api/products.api";
import { productsStore } from "@/store/product-store";
import { useEffect } from "react";

export function ProductCardList() {
  const { productSingleFilters, product, setProduct } = productsStore((state) => state);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductsSingle(productSingleFilters);
        setProduct(data);
      } catch (error) {
      }
    };
    fetchData();
    
  }, [productSingleFilters]);
  
  return (
    <div>

    </div>
  )
}
