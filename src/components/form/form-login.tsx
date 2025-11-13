'use client'
import { getUserMe } from "@/app/api/users.api";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { userStore } from "@/store";
import Link from "next/link";
import { toast } from "sonner";
import { loginUser } from "@/app/api/auth.api";

export function FormLogin() {
  const router = useRouter();
  const { setUser } = userStore((state) => state);
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await loginUser(data);
      if (response && !response.ok) {
        throw new Error();
      }
      const user = await getUserMe();
      setUser(user);
      router.push('/');
    } catch (error) {
      router.refresh();
      toast.error('Incorrect email or password');
    }
  });

  return (
    <form onSubmit={onSubmit} className="space-y-6 bg-color-background">
      <h5 className="text-xl font-medium text-secondary">Sign in to our platform</h5>
      <div>
        <label className="block mb-2 text-sm font-medium ">
          Your Email or Phone
        </label>
        <input type="text" autoComplete="" {...register("identifier")} required
          className="bg-background border-2 border-gray-300 focus:border-accent focus:outline-none text-sm rounded-lg block w-full p-2.5 " />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium ">
          Your Password
        </label>
        <input autoComplete="current-password" type="password" {...register("password")} required
          className="bg-background border-2 border-gray-300 focus:border-accent focus:outline-none text-sm rounded-lg block w-full p-2.5" />
      </div>
      <button type="submit" className="w-full text-white bg-primary hover:bg-secondary focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        Login to your account
      </button>
      <div className="text-sm font-medium">
        Not registered?
        <Link href={'/register'} className="text-secondary hover:underline ml-1">
          Create account
        </Link>
      </div>
    </form>
  )
}
