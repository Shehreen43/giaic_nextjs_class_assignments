import Image from "next/image";
import logo from "@/app/assets/Logo.png";

const Navbar = () => {
  return (
    <>
      <div className="w-[1920px] h-[92px] py-4 px-[220px] bg-[#043873] flex justify-between items-center">
        <div className="w-[191px] h-[34px] hover:scale-110 transition duration-300">
          <Image src={logo} alt="Logo" />
        </div>
        <div className="w-[737.5px] h-[60px] flex justify-between items-center">
          <div className="w-[549px] h-[23px]">
            <ul className="flex flex-row justify-between text-white">
              <li>Product</li>
              <li>Solutions</li>
              <li>Resources</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="w-[126px] h-[60px]">
            <button className="px-10 py-4 rounded-lg bg-[#FFE492] hover:scale-110 transition duration-300">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
