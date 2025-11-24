import { getCartMe, updateCartItem } from "@/app/api/carts.api";
import { cartStore } from "@/store";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

export function QuantityInput({ quantity, uuidItem }: { quantity: number; uuidItem: string; }) {
  const { setCart } = cartStore((state) => state);
  const handleOnIncrease = async () => {
    const data = {
      quantity: quantity + 1
    }
    try {
      const res = await updateCartItem(uuidItem, data)
      toast.success(res.message);
      const resCart = await getCartMe();
      setCart(resCart);
    } catch (error) {
      toast.error('Error');
    }
  }

  const handleOnDecrease = async () => {
    const data = {
      quantity: quantity - 1
    }
    try {
      const res = await updateCartItem(uuidItem, data)
      toast.success(res.message);
      const resCart = await getCartMe();
      setCart(resCart);
    } catch (error) {
      toast.error('Error');
    }
  }

  const handleOnRemove = async () => {
    const data = {
      quantity: 0
    }
    try {
      const res = await updateCartItem(uuidItem, data)
      toast.success(res.message);
      const resCart = await getCartMe();
      setCart(resCart);
    } catch (error) {
      toast.error('Error');
    }
  }

  return (
    <div className="flex items-center gap-2">
      {quantity > 1 ? (
        <button
          onClick={handleOnDecrease}
          className="w-8 h-8 flex items-center justify-center 
          bg-gray-200 rounded-md text-lg font-bold
          hover:bg-gray-300 cursor-pointer"
        >
          -
        </button>
      ) : (
        <button
          onClick={handleOnRemove}
          className="w-8 h-8 flex items-center justify-center 
          bg-red-200 text-red-600 rounded-md
          hover:bg-red-300 cursor-pointer"
        >
          <Trash2 size={18} />
        </button>
      )}
      <span className="min-w-8 text-center font-bold">{quantity}</span>
      <button
        onClick={handleOnIncrease}
        className="w-8 h-8 flex items-center justify-center 
        bg-gray-200 rounded-md text-lg font-bold
        hover:bg-gray-300 cursor-pointer"
      >
        +
      </button>
    </div>
  );
}