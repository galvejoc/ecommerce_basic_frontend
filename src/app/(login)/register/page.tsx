import { FormRegister } from "@/components";

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm p-4 bg-gray-50 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
        <FormRegister />
      </div>
    </div>
  );
}
