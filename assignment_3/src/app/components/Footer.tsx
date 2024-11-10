import Image from "next/image";
import logo from "@/app/assets/Logo.png";

export default function Footer () {
    return (
        <>
        <div className="w-[1920px] h-[461px] top-[5195px] left-[1px] pt-[140px] pb-[23px] px-[220px] gap-[200px] bg-[#043873]">
         <div className="w-1480px] h-[289px] gap-[100px] flex flex-col">
           
           <div className="w-[1480px] h-[169px] gap-[100px] flex flex-row justify-between">
            <div className="w-[295px] h-[169px] gap-[15px]">
            <div className="w-[191px] h-[34px] flex flex-col hover:scale-110 transition duration-300">
               <Image src={logo} alt="Logo" />
            </div>
            <p className="text-[#F7F7EE] w-[240px] h-[120px] font-normal text-[18px] leading-[30px] tracking-[-0.02em] mt-3 hover:text-[#FFE492] hover:scale-110 transition duration-300">
              whitepace was created for the new ways we live and work.
               We make a better workspace around the world
              </p>
            </div>

            <div className="w-[295px] h-[127px] gap-[15px]">
                <ul className="flex flex-col text-white font-normal leading-5 tracking-[-0.02em]">
                    <li className="font-bold text-[18px] leading-[21.78px] tracking-[-0.02em] mb-5 hover:text-[#FFE492] hover:scale-110 transition duration-300">Product</li>
                    <li className="mb-6 text-[#FFE492]">Overview</li>
                    <li className="mb-6">Pricing</li>
                    <li className="mb-6">Customer stories</li>
                </ul>
            </div>
            <div className="w-[295px] h-[130px] gap-[16px]">
                <ul className="flex flex-col text-white font-normal leading-5 tracking-[-0.02em]">
                    <li className="font-bold text-[18px] leading-[21.78px] tracking-[-0.02em] mb-5 hover:text-[#FFE492] hover:scale-110 transition duration-300">Resources</li>
                    <li className="mb-6">Blog</li>
                    <li className="mb-6">Guides & tutorials</li>
                    <li className="mb-6">Help center</li>
                </ul>
            </div>
            <div className="w-[295px] h-[130px] gap-[16px]">
                <ul className="flex flex-col text-white font-normal leading-5 tracking-[-0.02em]">
                    <li className="font-bold text-[18px] leading-[21.78px] tracking-[-0.02em] mb-5 hover:text-[#FFE492] hover:scale-110 transition duration-300">Company</li>
                    <li className="mb-6">About us</li>
                    <li className="mb-6">Careers</li>
                    <li className="mb-6">Media kit</li>
                </ul>
            </div>
            
           </div>

           <div className="w-[1480px] h-[20px] text-center ">
            <p className="font-normal leading-[20px] text-[20px] tracking-[-0.02em] text-white border-t-[1px] border-[#2E4E73] pt-3">
            ©2024 Whitepace LLC.
            </p>
           </div>
         </div>
        </div>
        </>
    )
}