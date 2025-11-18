import { ProductDetailInterface } from "@/interface";

export function InfoProductDetails({data}: {data: ProductDetailInterface | undefined}) {
  return (
    <div className="w-full">
      {data?.name}
    </div>
  )
}
