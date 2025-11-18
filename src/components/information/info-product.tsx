'use client'
import { getProductsForUuid } from "@/app/api/products.api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { InfoImagen } from "./info-imagen";
import { ProductDetailInterface } from "@/interface";
import { InfoProductDetails } from "./info-product-details";

export function InfoProduct() {
  const [data, setData] = useState<ProductDetailInterface | undefined>(undefined);
  const param = useParams();
  const uuid = param.uuid?.toString();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await getProductsForUuid(uuid);
        setData(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTask();
  }, [uuid]);
  return (
    <div className="flex w-full p-4 gap-4 justify-between">
      <InfoImagen data={data?.images}/>
      <InfoProductDetails data ={data}/>
    </div>
  )
}
