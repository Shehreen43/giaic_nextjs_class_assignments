import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <>
        <nav className="w-[1240px] h-[48px] bg-white flex justify-between items-center p-4 top-[62px] px-[100px] gap-10">
            <Link href='#'><Image src='/SHOP.png' alt='' height={22} width={160}  /></Link>
          
          <ul className="font-satoshiw-[391px] h-[22px] flex-row  gap-[24px] hidden md:flex space-x-4 text-gray-600  text-[16px] font-normal leading-[21.6px] underline-from-font decoration-skip-ink-none">
            <li><Link href='#' className="hover:text-black gap-1 flex flex-row" >Shop<Image src='/v.svg' alt='' height={16} width={16}  /></Link></li>
            <li><Link href='#' className="hover:text-black" >On Sale</Link></li>
            <li><Link href='#' className="hover:text-black" >New Arrivals</Link></li>
            <li><Link href='#' className="hover:text-black" >Brands</Link></li>
          </ul>

          <div className="w-[517px] bg-[#F0F0F0] h-[40px] px-[16px] py-[12px] gap-[12px] rounded-[62px]">
          <input
             type="text"
            placeholder="Search for products..."
           className=""
          />
          </div>

        </nav>
        </>
    )}
//       <nav className="flex justify-between items-center p-4 shadow-md">
//         {/* Logo */}
//         <div className="text-2xl font-bold">SHOP.CO</div>
  
//         {/* Navigation Links */}
//         <div className="hidden md:flex space-x-4 text-gray-600">
//           <a href="#" className="hover:text-black">Shop</a>
//           <a href="#" className="hover:text-black">On Sale</a>
//           <a href="#" className="hover:text-black">New Arrivals</a>
//           <a href="#" className="hover:text-black">Brands</a>
//         </div>
  
//         {/* Search and Icons */}
//         <div className="flex items-center space-x-4">
//           <input
//             type="text"
//             placeholder="Search for products..."
//             className="hidden md:block border p-2 rounded-md"
//           />
//           <button className="text-xl"></button>
//           <button className="text-xl"></button>
//         </div>
//       </nav>
//     );
//   }
  