'use client'
import { useEffect, useState } from "react";
import { CardSkeleton } from "./card-skeleton";
import { ProductCard } from "./product-card";
import { CardEmpty } from "./card-empty";
import clsx from "clsx";
import { comboStore } from "@/store";
import { getComboSingle } from "@/app/api/combos.api";

export function ComboCardList({ openFilters }: { openFilters?: boolean }) {
  const [loader, setLoader] = useState<boolean>(true);
  const { comboSingleFilters, combo, setCombo } = comboStore((state) => state);

  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      try {
        const data = await getComboSingle(comboSingleFilters);
        setCombo(data.data);
      } catch (error) {
      }
      finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [comboSingleFilters]);

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
          Array.from({ length: 4 }).map((_, i) => <CardSkeleton key={i} />)}

        {!loader && combo?.length > 0 &&
          combo.map((item) => <ProductCard key={item.uuid} data={item} />)}
      </div>
      {!loader && (!combo || combo.length === 0) && <CardEmpty text={"product"} />}
    </>
  );
}