'use client'
import { userStore } from "@/store";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { AvatarUser } from "./avatar-user";
import { getUser } from "@/app/api/users.api";

export function TopMenu() {
  const pathName = usePathname();
  const { user, setUser } = userStore((state) => state);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUser();
        setUser(data);
      } catch (error) {
      }
    };
    fetchData();
  }, [setUser]);

  return (
    <nav className="flex px-5 justify-between items-center w-full h-16 bg-gray-400 shadow-lg">
      <div className="flex justify-between">
        <div className="flex">
          <Link href={'/'}>
            <div className={clsx("py-2 px-3 ml-6 rounded-xl hover:bg-slate-500 hover:text-white", { "bg-slate-500 text-white shadow-md": pathName === '/' })} >Home</div>
          </Link>
          <Link href={'/tasks'}>
            <div className={clsx("py-2 px-3 ml-3 rounded-xl hover:bg-slate-500 hover:text-white", { "bg-slate-500 text-white shadow-md": pathName === '/tasks', "hidden": !user.username })}>Tasks</div>
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        <Link href={'/login'}>
          <div className={clsx("py-2 px-3 ml-3 rounded-xl hover:bg-slate-500 hover:text-white", { "hidden": user.username })}>Login</div>
        </Link>
        <Link href={'/register'}>
          <div className={clsx("py-2 px-3 ml-3 rounded-xl hover:bg-slate-500 hover:text-white", { "hidden": user.username })}>Register</div>
        </Link>
        <AvatarUser user={user} />
      </div>
    </nav>
  )
}
