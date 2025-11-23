'use client'
import { logoutUser } from "@/app/api/auth.api";
import { UserModalInterface } from "@/interface";
import { userStore } from "@/store";
import { Archive, CircleQuestionMark, LogOut, MapPin, User, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function UserModal({ setOpen, modalRef, store }: UserModalInterface) {
  const { cleanUser } = userStore((state) => state);
  const router = useRouter();

  const handleLogoutUser = () => {
    const logout = async () => {
      try {
        const res = await logoutUser();
        toast.success(res.message);
        cleanUser();
        router.push('/');
      } catch (error) {
        console.log(error);
      }
    }
    logout();
  }

  return (
    <div
      ref={modalRef}
      className={`absolute right-0 mt-3 w-72 bg-white border border-primary shadow-xl rounded-xl p-4 z-50
        transform transition-all duration-300 ease-out animate-fade-in`}>
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold">Opciones</h2>
        <button
          onClick={() => setOpen(false)}
          className="text-secondary hover:text-gray-800 cursor-pointer"
        >
          <X />
        </button>
      </div>
      <div className="text-text font-medium gap-2 flex flex-col">
        <button className="flex gap-2 w-full items-center py-2 px-4 bg-background/60 rounded-xl cursor-pointer hover:bg-background transition-colors duration-300">
          <User size={20} />Perfil
        </button>
        <button className="flex gap-2 w-full items-center  py-2 px-4 bg-background/60 rounded-xl cursor-pointer hover:bg-background transition-colors duration-300">
          <CircleQuestionMark size={20} />Ayuda & Soporte
        </button>
        <button className="flex gap-2 w-full items-center  py-2 px-4 bg-background/60 rounded-xl cursor-pointer hover:bg-background transition-colors duration-300">
          <MapPin size={20} /> Direccion
        </button>
        <button className="flex gap-2 w-full items-center  py-2 px-4 bg-background/60 rounded-xl cursor-pointer hover:bg-background transition-colors duration-300">
          <Archive size={20} />  Ordenes
        </button>
        <button
          className="flex gap-2 w-full items-center  py-2 px-4 bg-background/60 rounded-xl cursor-pointer hover:bg-background transition-colors duration-300"
          onClick={() => handleLogoutUser()}
        >
          <LogOut size={20} />  Salir de la cuenta
        </button>
      </div>
    </div>
  )
}
