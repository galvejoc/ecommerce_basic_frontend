'use client';
import { getComboForUuid } from "@/app/api/combos.api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { InfoImagen } from "./info-imagen";
import { ComboDetailInterface } from "@/interface";

export function InfoCombo() {
    const [data, setData] = useState<ComboDetailInterface | undefined>(undefined);
  const param = useParams();
  const uuid = param.uuid?.toString();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await getComboForUuid(uuid);
        // setData(res);
      } catch (error) {

      }
    };
    fetchTask();
  }, [uuid]);
  return (
    <div>
      {/* <InfoImagen data={data?.images}/> */}
    </div>
  )
}
