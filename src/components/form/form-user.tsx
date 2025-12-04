'use client'
import { getUserMe, updateUser } from "@/app/api/users.api";
import { userStore } from "@/store";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function FormUser() {
  const { user, setUser } = userStore((state) => state);
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await updateUser(data);
      if (response && !response.user) {
        throw new Error();
      }
      const user = await getUserMe();
      setUser(user);
      toast.success('Edited satisfactory')
    } catch (error) {
      toast.error('Error in editing');
    }
  });
  return (
    <form onSubmit={onSubmit} className="space-y-6 bg-color-background">
      <h5 className="text-xl font-medium text-secondary">Editar usuario</h5>
    </form>
  )
}
