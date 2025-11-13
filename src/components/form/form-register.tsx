'use client'
import { registerUser } from "@/app/api/users.api";
import { RegisterFormDataInterface } from "@/interface";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import { toast } from "sonner";

export function FormRegister() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormDataInterface>();
  const onSubmit = handleSubmit(async data => {
    try {
      if (data.password !== data.passwordConfirm) {
        toast.error('Passwords do not match');
        return;
      }
      const payload = { ...data };
      delete payload.passwordConfirm;
      const response = await registerUser(payload);
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
      <h5 className="text-xl text-secondary font-medium">Register in to our platform</h5>
      <div>
        <label className="block mb-2 text-sm font-medium">
          Your Name User
        </label>
        <input {...register('name')} required
          className="bg-background border-2 border-gray-300 focus:border-accent focus:outline-none text-sm rounded-lg  block w-full p-2.5" />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">
          Email
        </label>
        <input type="email" autoComplete="email" {...register('email')} required
          className="bg-background border-2 border-gray-300 focus:border-accent  focus:outline-none text-sm rounded-lg  block w-full p-2.5" />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">
          Phone
        </label>
        <input type="text" autoComplete="phone" {...register('phone')} required
          className="bg-background border-2 border-gray-300 focus:border-accent  focus:outline-none text-sm rounded-lg  block w-full p-2.5" />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">
          Password
        </label>
        <input type="password" autoComplete="current-password" {...register('password', {
          required: true,
          minLength: { value: 6, message: "Password must be at least 6 characters" }
        })} required
          className="bg-background border-2 border-gray-300 focus:border-accent  focus:outline-none text-sm rounded-lg block w-full p-2.5" />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">
            {errors.password.message}
          </p>
        )}
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">
          Confirm Password
        </label>
        <input type="password" autoComplete="current-password-confirm" {...register('passwordConfirm')} required
          className="bg-background border-2 border-gray-300 focus:border-accent  focus:outline-none text-sm rounded-lg block w-full p-2.5" />
      </div>
      <button type="submit" className="w-full text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
        Register a new account
      </button>
    </form>
  )
}