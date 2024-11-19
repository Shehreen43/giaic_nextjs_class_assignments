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
          <ul className=" text-gray-600 font-satoshi md:flex space-x-4  text-[16px] font-normal leading-[21.6px] underline-from-font decoration-skip-ink-none">
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


