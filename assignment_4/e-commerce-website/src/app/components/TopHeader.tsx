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
      <button className="left-[1220px] absolute right-0 top-1/2 -translate-y-1/2"
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


// import Image from "next/image";
// import Link from "next/link";

// export default function TopHeader() {
//   return (
//     <div className="bg-black text-white w-full text-center py-2 px-4 overflow-hidden">
//       <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto font-satoshi text-xs sm:text-sm">
//         <p className="flex-1 text-left sm:text-center break-words">
//           Sign up and get 20% off your first order.{" "}
//           <Link href="#" className="underline font-medium hover:text-gray-300">
//             Sign Up Now
//           </Link>
//         </p>
//         <button
//           className="flex items-center justify-center mt-2 sm:mt-0 ml-4"
//           type="button"
//           aria-label="Close banner"
//         >
//           <Image
//             priority
//             src="/x.svg"
//             height={20}
//             width={20}
//             alt="close banner"
//             className="w-5 h-auto"
//           />
//         </button>
//       </div>
//     </div>
//   );
// }
