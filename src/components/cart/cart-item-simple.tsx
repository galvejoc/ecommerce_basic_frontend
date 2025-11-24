import { CartItemInterface } from "@/interface";
import { QuantityInput } from "../custom/quantity-input";

export function CartItemSimple({ data }: { data: CartItemInterface }) {
  if (data.product) {
    return (
      <div className="flex gap-3 my-2 shadow-2xl items-center p-2 rounded-md">
        <img
          src={data.product.imagen || "/placeholder-product.png"}
          alt={data.product.name}
          className="w-28 h-24 object-cover rounded-md"
        />
        <div className="flex flex-col ml-2">
          <span className="text-lg font-semibold line-clamp-2">{data.product.name}</span>
          <span className="text-md my-1 text-text">${data.product.price}</span>
          <div className="flex flex-col text-xs w-full items-center mt-2">
            <QuantityInput
              quantity={data.quantity}
              uuidItem={data.uuidItem}
            />
          </div>
        </div>
      </div>
    );
  }

  if (data.combo) {
    return (
      <div className="flex gap-3 my-2 shadow-2xl items-center p-2 rounded-md">
        <img
          src={data.combo.imagen || "/placeholder-product.png"}
          alt={data.combo.name}
          className="w-28 h-24 object-cover rounded-md"
        />
        <div className="flex flex-col">
          <span className="text-lg font-semibold line-clamp-2">{data.combo.name}</span>
          <span className="text-md my-1 text-text">${data.combo.price}</span>
          <div className="flex flex-col text-xs w-full items-center mt-2">
            <QuantityInput
              quantity={data.quantity}
              uuidItem={data.uuidItem}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-2 text-xs text-gray-400 italic">
      Sin información disponible
    </div>
  );
}
