import Image from "next/image";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="bg-black text-white w-[1440px] h-[38px] text-sm text-center py-2 px-2 sm:px-4 xl:px-0 overflow-hidden">
    <div className="relative max-w-frame font-satoshi text-[14px] mx-auto">
      <p className="text-xs sm:text-sm">
        Sign up and get 20% off to your first order.{" "}
        <Link href="#" className="underline font-medium hover:text-gray-300">
          Sign Up Now
        </Link>
      </p>
      <button className="left-[1320px] absolute right-0 top-1/2 -translate-y-1/2"
        type="button">
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
