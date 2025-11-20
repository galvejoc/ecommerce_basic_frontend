'use client'
import { getProductsSingle } from "@/app/api/products.api";
import { productsStore } from "@/store/product-store";
import { useEffect, useState } from "react";
import { CardSkeleton } from "./card-skeleton";
import { ProductCard } from "./product-card";
import { CardEmpty } from "./card-empty";
import clsx from "clsx";
import { ProductPaginationInterface } from "@/interface";

export function ProductCardList({ openFilters }: { openFilters?: boolean }) {
  const [loader, setLoader] = useState<boolean>(true);
  const [pagination, setPagination] = useState<ProductPaginationInterface>();
  const { productSingleFilters, product, setProduct, addProduct } = productsStore((state) => state);

  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      try {
        const data = await getProductsSingle(productSingleFilters);
        setPagination({
          total: data.total,
          page: data.page,
          limit: data.limit
        })
        setProduct(data.data);
      } catch (error) {
      }
      finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [productSingleFilters]);

  const handleAddProduct = () => {
    const fetchNewData = async () => {
      try {
        const newFilters = {
          ...productSingleFilters,
          page: productSingleFilters.page + 1
        };
        const data = await getProductsSingle(newFilters);
        setPagination({
          total: data.total,
          page: data.page,
          limit: data.limit
        }
        )
        addProduct(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchNewData();
  }

  return (
    <div className="flex flex-col">
      <>
        <div
          className={clsx(
            "mt-3 w-full grid gap-2 justify-items-center",
            openFilters
              ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
              : "grid-cols-1 md:grid-cols-3 xl:grid-cols-5"
          )}
        >
          {loader &&
            Array.from({ length: 4 }).map((_, i) => <CardSkeleton key={i} />)}

          {!loader && product?.length > 0 &&
            product.map((item) => <ProductCard key={item.uuid} data={item} />)}
        </div>
        {!loader && (!product || product.length === 0) && <CardEmpty text={"product"} />}
      </>
      {pagination && pagination.page * pagination.limit < pagination.total && (
        <div className="flex justify-center my-10">
          <button
            className="mb-4 ml-10 px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white cursor-pointer duration-300 transition-colors"
            onClick={() => handleAddProduct()}
          >
            Mostrar Más
          </button>
        </div>)}
    </div>
  );
}