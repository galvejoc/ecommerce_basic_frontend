'use client'
import { getUser } from "@/app/api/users.api";
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
      const user = await getUser();
      setUser(user);
      router.push('/');
    } catch (error) {
      router.refresh();
      toast.error('Incorrect email or password');
    }
  });

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your Email or Phone
        </label>
        <input type="text" autoComplete="" {...register("identifier")} required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your Password
        </label>
        <input autoComplete="current-password" type="password" {...register("password")} required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
      </div>
      <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Login to your account
      </button>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
        Not registered?
        <Link href={'/register'} className="text-blue-700 hover:underline dark:text-blue-500 ml-1">
          Create account
        </Link>
      </div>
    </form>
  )
}
