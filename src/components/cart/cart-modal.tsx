import { CartItemInterface, CartModalInterface } from "@/interface";
import { X } from "lucide-react";
import { CartItemSimple } from "./cart-item-simple";

export function CartModal({ setOpen, modalRef, store }: CartModalInterface) {
  return (
    <div
      ref={modalRef}
      className={`absolute right-0 mt-3 w-96 bg-white border border-primary shadow-xl rounded-xl p-4 z-50
        transform transition-all duration-300 ease-out animate-fade-in`}>
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold">Tu carrito</h2>
        <button
          onClick={() => setOpen(false)}
          className="text-secondary hover:text-gray-800 cursor-pointer"
        >
          <X />
        </button>
      </div>
      {store ? (
        <div className="space-y-2 text-sm">
          <div>
            <p className="text-gray-600">
              Productos:
            </p>
            {store.items.map((e: CartItemInterface) => (
              <CartItemSimple data={e} key={e.uuidItem}/>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-gray-400 text-sm">Carrito vacío</p>
      )}

      <button
        className="mt-4 px-4 py-2 w-full bg-primary text-white rounded-lg 
        hover:bg-primary/90 duration-300 transition-colors text-sm cursor-pointer"
      >
        $Monto  Ver carrito
      </button>
    </div>
  )
}
