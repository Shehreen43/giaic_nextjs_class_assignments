import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-[#F0F0F0] py-8 px-4 md:py-16">
      {/* Main Content */}
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Text Section */}
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-[32px] md:text-[40px] lg:text-[55px] font-bold leading-tight text-left">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-relaxed">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="w-full my-10 md:w-[3%/100%] md:mt-10 px-6 py-3 lg:w-[30%] rounded-full bg-black text-white hover:bg-gray-800">
            Shop Now
          </button>

          {/* Statistics Section */}
      <div className="pt-7 flex flex-wrap justify-between items-centergap-0  max-w-screen-xl mx-auto">
        <div className="text-center">
          <h3 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold animate-pulse">200+</h3>
          <p className="text-sm md:text-base">International Brands</p>
        </div>
        <div className="text-center">
          <h3 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold">2,000+</h3>
          <p className="text-sm md:text-base">High-Quality Products</p>
        </div>
        <div className="text-center">
          <h3 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold">30,000+</h3>
          <p className="text-sm md:text-base">Happy Customers</p>
        </div>
      </div>
        </div>

        {/* Hero Image */}
        <div className="relative flex  items-center md:w-full">
          <div className="absolute top-[50%] left-[10%] transform animate-rotate md:w-7">
            <Image src="/Vector.svg" alt="Rotating Icon" width={44} height={44} />
          </div>
          <div className="absolute animate-rotate top-[10%] right-[10%] md:w-10 ">
            <Image src="/Vector.svg" alt="Rotating Icon" width={76} height={76} />
          </div>
          <Image src="/Fasion2.png" alt="Fashion" width={390} height={448} className="rounded-lg  md:w-full" />
        </div>
      </div>

      {/* Brands Section */}
      <div className=" bg-black py-4">
        <div className="flex justify-around items-center flex-wrap gap-8 max-w-screen-xl mx-auto">
          <Image src="/VERSACE.svg" alt="Versace" width={166} height={33} />
          <Image src="/ZARA.svg" alt="Zara" width={91} height={38} />
          <Image src="/GUCCI.svg" alt="Gucci" width={156} height={36} />
          <Image src="/PARADA.svg" alt="Prada" width={194} height={32} />
          <Image src="/Calvin-Klein.svg" alt="Calvin Klein" width={206} height={33} />
        </div>
      </div>
    </section>
  );
}



// import Image from "next/image";

// export default function Hero() {
//   return (
//     <>
//       <section className="w-full grid  gap-0 bg-[#F0F0F0] py-8 px-4 md:py-16">
        
//         {/* Main Content */}
//         <div className="w-full grid grid-cols-1 md:grid-cols-2">
//          {/* Text Section **/}
       
//          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
//   {/* Text Section */}
//   <div className="space-y-4 md:space-y-6 overflow-hidden">
//     <h1 className="text-[32px] lg:text-[50px] font-bold leading-tight text-left break-words">
//       FIND CLOTHES THAT MATCHES YOUR STYLE
//     </h1>
//     <p className="text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-relaxed break-words">
//       Browse through our diverse range of meticulously crafted garments,
//       designed to bring out your individuality and cater to your sense of style.
//     </p>
//     <button className="w-full mt-4 md:mt-6 px-6 py-3 md:w-[30%] mx-auto rounded-full bg-black text-white hover:bg-gray-800">
//       Shop Now
//     </button>

//     {/* Statistics Section */}
//     <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-x-4 lg:mx-2">
//       <div>
//         <h3 className="font-satoshi font-bold text-left animate-pulse">200+</h3>
//         <p className="truncate">International Brands</p>
//       </div>
//       <div>
//         <h3 className="font-satoshi font-bold text-left">2,000+</h3>
//         <p className="truncate">High-Quality Products</p>
//       </div>
//       <div>
//         <h3 className="font-satoshi font-bold text-left">30,000+</h3>
//         <p className="truncate">Happy Customers</p>
//       </div>
//     </div>
//   </div>

//   {/* Image Section */}
//   <div className="relative flex justify-center items-center">
//     <div className="absolute top-0 left-0 motion-safe:animate-rotate">
//       <Image
//         src="/Vector.svg"
//         alt="Rotating Vector Graphic"
//         width={76}
//         height={76}
//         className="max-w-full h-auto"
//       />
//     </div>
//     <div className="absolute bottom-0 right-0 motion-safe:animate-rotate">
//       <Image
//         src="/Vector.svg"
//         alt="Smaller Rotating Vector Graphic"
//         width={44}
//         height={44}
//         className="max-w-full h-auto"
//       />
//     </div>
//     <div>
//       <Image
//         src="/Fasion2.png"
//         alt="Fashion Banner"
//         width={390}
//         height={448}
//         className="max-w-full h-auto object-cover"
//       />
//     </div>
//   </div>
// </div>


//       </div>
// <div className="w-[1440px] h-[122px] top-[797px]  bg-black">
// <Image  src="/VERSACE.svg" alt="" width={166.48} height={33.16} className="absolute top-[841px] left-[100px]" />

// <Image  src="ZARA.svg" alt="" width={91} height={38} className="absolute top-[839px] left-[372.48px]" />

// <Image  src="GUCCI.svg" alt="" width={156} height={36} className="absolute top-[840px] left-[569.48px]" />

// <Image  src="PARADA.svg" alt="" width={194} height={32} className="absolute top-[842px] left-[831.48px]" />

// <Image  src="Calvin-Klein.svg" alt="" width={206.79} height={33.35} className="absolute top-[841px] left-[1131.48px]" />


// </div>



//       </section>
//     </>
//   );
// }
