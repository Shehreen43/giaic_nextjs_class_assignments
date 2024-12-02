import Image from "next/image";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="bg-black text-white w-full text-center py-2 px-4 overflow-hidden">
      <div className="flex items-center font-satoshi ">
        <p className="flex-1 text-left sm:text-center break-words">
          Sign up and get 20% off your first order.{" "}
          <Link href="#" className="underline font-medium hover:text-gray-300">
            Sign Up Now
          </Link>
       </p>
        <button
          className="flex items-center justify-center mt-2 sm:mt-0 "
          type="button"
          aria-label="Close banner"
        >
          <Image
            priority
            src="/x.svg"
            height={20}
            width={20}
            alt="close banner"
            className="w-5 h-auto"
          />
        </button>
       
      </div>
    </div>
  );
}
