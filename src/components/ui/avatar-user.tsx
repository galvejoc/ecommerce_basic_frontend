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
          <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full shadow-lg">
            <span className="font-medium text-gray-90 ">
              {user.username.toUpperCase().charAt(0)}
            </span>
          </div>
          <div className="font-medium">
            <div>{user.username}</div>
            <button className="py-1 rounded-xl font-medium hover:scale-110 cursor-pointer"  onClick={() => {
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
