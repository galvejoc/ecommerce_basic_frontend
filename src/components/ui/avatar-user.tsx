'use client'
import { logoutUser } from "@/app/api/auth.api";
import { UserInterface } from "@/interface/user";
import { userStore } from "@/store";
import { useRouter } from "next/navigation";

export function AvatarUser({ user }: { user: UserInterface }) {
  const { cleanUser } = userStore((state) => state);
  const router = useRouter()
  return (
    <>
      {user.username ?
        <div className="flex items-center gap-4">
          <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 shadow-lg">
            <span className="font-medium text-gray-900 dark:text-gray-300 ">
              {user.username.toUpperCase().charAt(0)}
            </span>
          </div>
          <div className="font-medium dark:text-white">
            <div>{user.username}</div>
            <button className="py-1 px-2 rounded-xl hover:bg-slate-500 font-normal hover:text-white" onClick={() => {
              cleanUser();
              logoutUser();
              router.push('/');
            }}>
              Close seccion
            </button>
          </div>
        </div>
        : <></>}
    </>
  )
}
