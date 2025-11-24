'use client'
import { CardAddItemInfoInterface, EnumCardAddItemInfo } from "@/interface";
import { cartStore } from "@/store";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

export function CartAddItemInfo({ uuid, type }: CardAddItemInfoInterface) {
  const [value, setValue] = useState<number>(1);
  const { cart, setCart } = cartStore((state) => state);
  const [uuidItems, setUuidItems] = useState<string>('')

  useEffect(() => {
    if (cart.items?.length === 0) {
      return
    }
    if (type === EnumCardAddItemInfo.COMBO) {
      cart.items?.map((e) => {
        if (e.combo?.uuid === uuid) {
          setUuidItems(e.uuidItem);
          setValue(e.quantity)
        }
      })
    }
    if (type === EnumCardAddItemInfo.PRODUCT) {
      cart.items?.map((e) => {
        if (e.product?.uuid === uuid) {
          setUuidItems(e.uuidItem);
          setValue(e.quantity)
        }
      })
    }
  }, [cart]);

  const handleAddToCart = () => {
    // Lógica para agregar el producto al carrito
  };

  const handleAddAndBuyNow = () => {
    // Lógica para comprar el producto inmediatamente
  };

  const handleEditToCart = () => {
    // Lógica para editar el producto al carrito
  }

  const handleEditAndBuyNow = () => {
    // Lógica para comprar el producto inmediatamente
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Lógica para cambiar la cantidad
    console.log(e);
  };

  const handleRemoveItemsCart = () => {

  }

  return (
    <>
      {!uuidItems ?
        <div className="flex gap-2 justify-start items-center mt-4" >
          <input type="number" className="border border-primary rounded-lg w-20 h-10 font-medium text-lg px-2" value={value} />
          <button
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg cursor-pointer duration-300 transition-colors"
            onClick={() => handleAddToCart()}
          >
            Add to Cart
          </button>
          <button
            className="bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-lg cursor-pointer duration-300 transition-colors"
            onClick={() => handleAddAndBuyNow()}
          >
            Add and Buy Now
          </button>
        </div> :
        <div className="flex gap-2 justify-start items-center mt-4" >
          <button
            onClick={handleRemoveItemsCart}
            className="w-8 h-8 flex items-center justify-center 
          bg-red-200 text-red-600 rounded-md
          hover:bg-red-300 cursor-pointer"
          >
            <Trash2 size={18} />
          </button>
          <input type="number" className="border border-primary rounded-lg w-20 h-10 font-medium text-lg px-2" value={value} />
          <button
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg cursor-pointer duration-300 transition-colors"
            onClick={() => handleEditToCart()}
          >
            Edit to Cart
          </button>
          <button
            className="bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-lg cursor-pointer duration-300 transition-colors"
            onClick={() => handleEditAndBuyNow()}
          >
            Edit and Buy Now
          </button>
        </div>
      }
    </>
  )
}