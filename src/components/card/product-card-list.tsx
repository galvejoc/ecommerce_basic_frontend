'use client'
import { getProductsSingle } from "@/app/api/products.api";
import { productsStore } from "@/store/product-store";
import { useEffect, useState } from "react";
import { ProductCardSkeleton } from "./product-card-skeleton";
import { ProductCard } from "./product-card";
import { ProductCardEmpty } from "./product-card-empty";
import clsx from "clsx";

export function ProductCardList({ openFilters }: { openFilters?: boolean }) {
  const [loader, setLoader] = useState<boolean>(true);
  const { productSingleFilters, product, setProduct } = productsStore((state) => state);

  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      try {
        const data = await getProductsSingle(productSingleFilters);
        setProduct(data.data);
      } catch (error) {
      }
      finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [productSingleFilters]);

  return (
    <>
      <div
        className={clsx(
          "mt-3 w-full grid gap-2",
          openFilters
            ? "grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
            : "grid-cols-2 md:grid-cols-3 xl:grid-cols-5"
        )}
      >
        {loader &&
          Array.from({ length: 4 }).map((_, i) => <ProductCardSkeleton key={i} />)}

        {!loader && product?.length > 0 &&
          product.map((item) => <ProductCard key={item.uuid} data={item} />)}
      </div>
      {!loader && (!product || product.length === 0) && <ProductCardEmpty />}
    </>
  );
}