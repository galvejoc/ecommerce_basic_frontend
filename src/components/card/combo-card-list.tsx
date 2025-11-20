'use client'
import { useEffect, useState } from "react";
import { CardSkeleton } from "./card-skeleton";
import { CardEmpty } from "./card-empty";
import clsx from "clsx";
import { comboStore } from "@/store";
import { getComboSingle } from "@/app/api/combos.api";
import { ComboCard } from "./combo-card";
import { ComboPaginationInterface } from "@/interface";

export function ComboCardList({ openFilters }: { openFilters?: boolean }) {
  const [loader, setLoader] = useState<boolean>(true);
  const [pagination, setPagination] = useState<ComboPaginationInterface>();
  const { comboSingleFilters, combo, setCombo, addCombo } = comboStore((state) => state);

  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      try {
        const data = await getComboSingle(comboSingleFilters);
        setPagination({
          total: data.total,
          page: data.page,
          limit: data.limit
        })
        setCombo(data.data);
      } catch (error) {
      }
      finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [comboSingleFilters]);

  const handleAddProduct = () => {
    const fetchNewData = async () => {
      try {
        const newFilters = {
          ...comboSingleFilters,
          page: comboSingleFilters.page + 1
        };
        const data = await getComboSingle(newFilters);
        setPagination({
          total: data.total,
          page: data.page,
          limit: data.limit
        }
        )
        addCombo(data.data);
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

          {!loader && combo?.length > 0 &&
            combo.map((item) => <ComboCard key={item.uuid} data={item} />)}
        </div>
        {!loader && (!combo || combo.length === 0) && <CardEmpty text={"product"} />}
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