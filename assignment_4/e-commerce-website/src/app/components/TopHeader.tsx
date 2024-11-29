import Image from "next/image";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="bg-black text-white min-w-[301px] w-full text-center py-2 px-1 sm:px-4 xl:px-0 overflow-hidden">
      <div className="relative flex justify-between items-center max-w-screen-xl mx-auto font-satoshi text-xs sm:text-sm">
        <p className="text-xs sm:text-sm">
          Sign up and get 20% off your first order.{" "}
          <Link href="#" className="underline font-medium hover:text-gray-300">
            Sign Up Now
          </Link>
        </p>
        <button
          className="flex items-center justify-center ml-4 right-0 top-1/2 -translate-y-1/2"
          type="button"
          aria-label="Close banner"
        >
          <Image
            priority
            src="/x.svg"
            height={20}
            width={20}
            alt="close banner"
          />
        </button>
      </div>
    </div>
  );
}


