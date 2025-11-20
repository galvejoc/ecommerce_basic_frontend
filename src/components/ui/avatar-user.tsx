'use client'
import { UserInterface } from "@/interface/user";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { UserModal } from "./user-modal";

export function AvatarUser({ user }: { user: UserInterface }) {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter()
  const modalRef = useRef<HTMLDivElement | null>(null);

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
    <>
      {user.username ?
        <div className="relative items-center gap-4">
          <button
            className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full shadow-lg cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <span className="font-medium text-gray-90 ">
              {user.username.toUpperCase().charAt(0)}
            </span>
          </button>
          {/* <div className="font-medium">
            <div>{user.username}</div>
            <button className="py-1 rounded-xl font-medium hover:scale-110 cursor-pointer"  onClick={() => {
              cleanUser();
              logoutUser();
              router.push('/');
            }}>
              Close seccion
            </button>
          </div> */}
          {open && (
            <UserModal setOpen={setOpen} modalRef={modalRef} store={user} />
          )}
        </div>
        : <></>}
    </>
  )
}
