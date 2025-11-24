'use client'
import { getCartMe } from "@/app/api/carts.api";
import { cartStore } from "@/store";
import { ShoppingCart } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CartModal } from "./cart-modal";

export function CartButton() {
  const [open, setOpen] = useState<boolean>(false);
  const { cart, setCart } = cartStore((state) => state);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCartMe();
        setCart(data);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="relative inline-block">
      <button
        className="cursor-pointer text-secondary hover:shadow-2xs hover:bg-gray-100 p-2 rounded-full"
        onClick={() => setOpen(!open)}
      >
        <ShoppingCart />
        {cart.totalQuantity > 0 && (
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
            {cart.totalQuantity}
          </span>
        )}
      </button>
      {open && (
        <CartModal setOpen={setOpen} modalRef={modalRef} store={cart} />
      )}
    </div>
  )
}
