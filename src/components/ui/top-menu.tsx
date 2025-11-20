'use client'
import { userStore } from "@/store";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { AvatarUser } from "./avatar-user";
import { getUserMe } from "@/app/api/users.api";
import { CartButton } from "../cart/cart-button";

export function TopMenu() {
  const pathName = usePathname();
  const { user, setUser } = userStore((state) => state);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserMe();
        setUser(data);
      } catch (error) {
      }
    };
    fetchData();
  }, [setUser]);

  return (
    <nav className="flex px-5 justify-between items-center w-full h-16 bg-accent shadow-lg">
      <div className="flex justify-between">
        <div className="flex">

          <Link href="/">
            <div className="py-2 px-3 ml-6 font-bold rounded-xl text-secondary flex flex-col items-center hover:scale-110">
              Home
              <div
                className={clsx(
                  "w-4 h-1 bg-secondary rounded-2xl transition-transform origin-center",
                  { "scale-100": pathName === "/", "scale-0": pathName !== "/" }
                )}
              />
            </div>
          </Link>

          <Link href="/products">
            <div className="py-2 px-3 ml-3 font-bold rounded-xl text-secondary flex flex-col items-center hover:scale-110">
              Products
              <div
                className={clsx(
                  "w-4 h-1 bg-secondary rounded-2xl transition-transform origin-center",
                  { "scale-100": pathName === "/products", "scale-0": pathName !== "/products" }
                )}
              />
            </div>
          </Link>

          <Link href="/combo">
            <div className="py-2 px-3 ml-3 font-bold rounded-xl text-secondary flex flex-col items-center hover:scale-110">
              Combo
              <div
                className={clsx(
                  "w-4 h-1 bg-secondary rounded-2xl transition-transform origin-center",
                  { "scale-100": pathName === "/combo", "scale-0": pathName !== "/combo" }
                )}
              />
            </div>
          </Link>

          <Link href="/info">
            <div className="py-2 px-3 ml-3 font-bold rounded-xl text-secondary flex flex-col items-center hover:scale-110">
              Info
              <div
                className={clsx(
                  "w-4 h-1 bg-secondary rounded-2xl transition-transform origin-center",
                  { "scale-100": pathName === "/info", "scale-0": pathName !== "/info" }
                )}
              />
            </div>
          </Link>

        </div>
      </div>

      <div className="flex items-center text-secondary font-bold ">
        <Link href="/login">
          <div
            className={clsx(
              "py-2 px-3 ml-3 rounded-xl hover:scale-110",
              { hidden: user.username }
            )}
          >
            Login
          </div>
        </Link>

        <Link href="/register">
          <div
            className={clsx(
              "py-2 px-3 ml-3 rounded-xl hover:scale-110",
              { hidden: user.username }
            )}
          >
            Register
          </div>
        </Link>
        <div className={clsx(
          " flex mx-4 justify-items-center items-center",
          { hidden: !user.username }
        )}>
          <CartButton />
        </div>
        <AvatarUser user={user} />
      </div>
    </nav>
  );
}
