import Link from "next/link";

export function UINotFound() {
  return (
    <div className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className=" flex flex-col justify-center items-center ">
        <h1 className="text-9xl font-extrabold text-sky-800 tracking-widest">404</h1>
        <div className="bg-red-400 px-2 text-sm rounded rotate-12 absolute text-white">
          Page Not Found
        </div>
      </div>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
      <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link href="/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</Link>
      </div>
    </div>
  )
}
