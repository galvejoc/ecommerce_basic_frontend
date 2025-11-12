'use client'
import { registerUser } from "@/app/api/users.api";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import { toast } from "sonner";

export function FormRegister() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit(async data => {
    try {
      if (!data.email) {
        delete data.email;  // O puedes poner: data.date_objetive = null
      }
      const response = await registerUser(data);
      if (response && !response.ok) {
        throw new Error();
      }
      toast.success('Registered successfully');
      router.push('/');
    } catch (error) {
      router.refresh();
      toast.error('Error registering a user');
    }
  })

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <h5 className="text-xl font-medium text-gray-900 dark:text-white">Register in to our platform</h5>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your Name User
        </label>
        <input {...register('name_user')} required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Email
        </label>
        <input type="email" autoComplete="email" {...register('email')} required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Password
        </label>
        <input type="password" autoComplete="current-password" {...register('password')} required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
      </div>
      <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Register a new account
      </button>
    </form>
  )
}