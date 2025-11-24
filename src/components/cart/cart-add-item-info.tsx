'use client'
import { addCartItem, getCartMe, updateCartItem } from "@/app/api/carts.api";
import { CardAddItemInfoInterface, EnumCardAddItemInfo } from "@/interface";
import { cartStore } from "@/store";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

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

  const handleAddToCart = async () => {
    const data = {
      quantity: value,
      productUuid: type === EnumCardAddItemInfo.PRODUCT ? uuid : "",
      comboUuid: type === EnumCardAddItemInfo.COMBO ? uuid : "",
    }
    try {
      const res = await addCartItem(data);
      toast.success(res.message);
      const resCart = await getCartMe();
      setCart(resCart);
    } catch (error) {
      toast.error('Error');
    }
  };

  const handleAddAndBuyNow = async () => {
    const data = {
      quantity: value,
      productUuid: type === EnumCardAddItemInfo.PRODUCT ? uuid : "",
      comboUuid: type === EnumCardAddItemInfo.COMBO ? uuid : "",
    }
    try {
      const res = await addCartItem(data);
      toast.success(res.message);
      const resCart = await getCartMe();
      setCart(resCart);
      //redirigir a la parte de la compra
    } catch (error) {
      toast.error('Error');
    }
  };

  const handleEditToCart = async () => {
    const data = {
      quantity: value
    }
    try {
      const res = await updateCartItem(uuidItems, data)
      toast.success(res.message);
      const resCart = await getCartMe();
      setCart(resCart);
    } catch (error) {
      toast.error('Error');
    }
  }

  const handleEditAndBuyNow = async () => {
    const data = {
      quantity: value
    }
    try {
      const res = await updateCartItem(uuidItems, data)
      toast.success(res.message);
      const resCart = await getCartMe();
      setCart(resCart);
      //redirigir a la parte de la compra
    } catch (error) {
      toast.error('Error');
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(1, Number(e.target.value));
    setValue(newValue);
  };

  const handleRemoveItemsCart = async () => {
    const data = {
      quantity: 0
    }
    try {
      const res = await updateCartItem(uuidItems, data)
      toast.success(res.message);
      const resCart = await getCartMe();
      setCart(resCart);
      setUuidItems('')
    } catch (error) {
      toast.error('Error');
    }
  }

  return (
    <>
      {!uuidItems ?
        <div className="flex gap-2 justify-start items-center mt-4" >
          <input
            type="number"
            className="border border-primary rounded-lg w-20 h-10 font-medium text-lg px-2"
            onChange={handleQuantityChange}
            value={value} />
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
          <input
            type="number"
            className="border border-primary rounded-lg w-20 h-10 font-medium text-lg px-2"
            onChange={handleQuantityChange}
            value={value}
          />
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