'use client';
import { getComboForUuid } from "@/app/api/combos.api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { InfoImagen } from "./info-imagen";
import { ComboDetailInterface } from "@/interface";
import { InfoImagenSkeleton } from "./info-imagen-skeleton";
import { InfoComboDetails } from "./info-combo-details";
import { InfoProductDetailsSkeleton } from "./info-product-details-skeleton";

export function InfoCombo() {
  const [data, setData] = useState<ComboDetailInterface | undefined>(undefined);
  const param = useParams();
  const uuid = param.uuid?.toString();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await getComboForUuid(uuid);
        setData(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTask();
  }, [uuid]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full p-4 gap-4">
      {!data ? (
        <>
          <InfoImagenSkeleton />
          <InfoProductDetailsSkeleton />
        </>
      ) : (
        < >
          <InfoImagen data={data.images} />
          <InfoComboDetails data={data} />
        </>
      )}
    </div>
  )
}
