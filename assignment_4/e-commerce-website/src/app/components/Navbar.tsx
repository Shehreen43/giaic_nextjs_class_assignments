// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
//   return (
//     <nav className="w-full bg-white flex flex-wrap justify-between items-center py-4 px-4 md:px-6 lg:px-10 shadow-sm">
//       {/* Mobile Menu (Optional Placeholder) */}
//       <div className="  md:hidden flex items-center">
//         <button aria-label="Open Menu">
//           <Image src="/menu.svg" alt="Menu" height={24} width={24} />
//         </button>
//       </div>
//       {/* Logo */}
//       <Link href="#">
//         <Image src="/SHOP.png" alt="Logo" height={22} width={120} />
//       </Link>

//       {/* Desktop Navigation */}
//       <ul className="hidden md:flex space-x-4 text-gray-600 font-satoshi text-sm md:text-base">
//         <li>
//           <Link href="#" className="hover:text-black flex items-center">
//             Shop
//             <Image src="/v.svg" alt="" height={16} width={16} />
//           </Link>
//         </li>
//         <li>
//           <Link href="#" className="hover:text-black">
//             On Sale
//           </Link>
//         </li>
//         <li>
//           <Link href="#" className="hover:text-black">
//             New Arrivals
//           </Link>
//         </li>
//         <li>
//           <Link href="#" className="hover:text-black">
//             Brands
//           </Link>
//         </li>
//       </ul>

//       {/* Search Bar */}
//       <div className="hidden  md:flex  items-center bg-gray-100 rounded-full w-full md:w-auto px-4 py-2 mt-4 md:mt-0">
//         <Image src="/srch.svg" alt="Search" height={24} width={24} />
//         <input
//           type="text"
//           placeholder="Search for products..."
//           className="bg-gray-100 w-full md:w-auto ml-2 focus:outline-none text-sm"
//         />
//       </div>

//       {/* Action Buttons */}
//       <div className="flex items-center space-x-2 mt-4 md:mt-0">
//         <button>
//           <Image src="/cart.svg" alt="Cart" height={24} width={24} />
//         </button>
//         <button>
//           <Image src="/client.svg" alt="Client" height={24} width={24} />
//         </button>
//         <button >
//           <Image src="/srch.svg" alt="Search" height={24} width={24} className="md:hidden" />
//         </button>
//       </div>

//     </nav>
//   );
// }



import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="w-[1440px] h-[48px] bg-white  flex flex-row justify-between items-center p-[50px] top-[62px] px-[100px] gap-10 ">
        <Link href="#">
          <Image src="/SHOP.png" alt="" height={22} width={160} />
        </Link>

        <div className="w-[321px] h-[22px]">
          <ul className="hidden text-gray-600 font-satoshi md:flex space-x-4  text-[16px] font-normal leading-[21.6px] underline-from-font decoration-skip-ink-none">
            <li>
              <Link href="#" className="hover:text-black gap-1 flex flex-row">
                Shop
                <Image src="/v.svg" alt="" height={16} width={16} />
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-black">
                On Sale
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-black">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-black">
                Brands
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-[517px] bg-[#F0F0F0] h-[40px] px-[16px] py-[12px] gap-[12px] rounded-[62px] flex flex-row ">
          <Image src="/srch.svg" alt="" height={24} width={24} />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-[#F0F0F0]"
          />
        </div>

        <div className="w-[62px] h-[24px] gap-[14px] flex flex-row">
          <button><Image src="/cart.svg" alt="cart" height={24} width={24} /></button>
          <button><Image src="/client.svg" alt="client" height={24} width={24} /></button>
        </div>
      </nav>
    </>
  );
}


