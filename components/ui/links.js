import Link from "next/link";

export function LinkButtonPrimary({ children, href }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-600 hover:to-amber-500 active:bg-amber-300 text-white font-semibold text-sm md:text-base lg:text-lg px-6 py-2 lg:px-8 lg:py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
    >
      {children}
    </Link>
  );
}

export function LinkButtonSecondary({ children, href }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center bg-stone-700 hover:bg-stone-800 active:bg-neutral-300 text-white font-semibold text-sm md:text-base lg:text-lg px-6 py-2 lg:px-8 lg:py-4 rounded-full border-2 border-transparent hover:border-stone-500 shadow-md hover:shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
    >
      {children}
    </Link>
  );
}
