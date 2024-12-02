import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sm:w-full max-w-screen-2xl mx-auto bg-white flex flex-wrap justify-between items-center py-4 px-4 md:px-6 lg:px-10 shadow-sm">
      {/* Mobile Menu (Optional Placeholder) */}
      <div className="  md:hidden flex items-center">
        <button aria-label="Open Menu">
          <Image src="/menu.svg" alt="Menu" height={24} width={24} />
        </button>
      </div>
      {/* Logo */}
      <Link href="#">
        <Image src="/SHOP.png" alt="Logo" height={22} width={120} />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-4 text-gray-600 font-satoshi text-sm md:text-base">
        <li>
          <Link href="#" className="hover:text-black flex items-center">
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

      {/* Search Bar */}
      <div className="hidden  md:flex  items-center bg-gray-100 rounded-full lg:w-[40%] md:w-auto px-4 py-2 mt-4 md:mt-0">
        <Image src="/srch.svg" alt="Search" height={24} width={24} />
        <input
          type="text"
          placeholder="Search for products..."
          className="bg-gray-100 w-full md:w-full  focus:outline-none text-sm"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-2 mt-4 md:mt-0">
        <button>
          <Image src="/cart.svg" alt="Cart" height={24} width={24} />
        </button>
        <button>
          <Image src="/client.svg" alt="Client" height={24} width={24} />
        </button>
        <button >
          <Image src="/srch.svg" alt="Search" height={24} width={24} className="md:hidden" />
        </button>
      </div>

    </nav>
  );
};