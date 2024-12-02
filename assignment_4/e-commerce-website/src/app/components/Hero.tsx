import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-[#F0F0F0] pt-8 px-4 md:pt-16">
      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:gap-0 lg:grid-cols-2 gap-8">
        {/* Text Section */}
        <div className="space-y-4 lg:pt-20 md:space-y-6">
          <h1 className="text-[36px] font-integral md:text-[48px] lg:text-[64px] font-bold leading-tight text-left">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-[14px] font-Satoshi text-gray-500 md:text-[19px] lg:text-[25px] font-normal leading-relaxed">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="mt-4 w-full md:w-[35%] md:mt-6 px-6 py-3 lg:mt-10 rounded-full bg-black text-white hover:bg-gray-800">
            Shop Now
          </button>

           {/* Statistics Section */}
      <div className="mt-12 flex flex-wrap justify-center space-x-1 items-center gap-8  xl:pt-20 max-w-screen-xl mx-auto w-full">
        <div className="text-center">
          <h3 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold animate-pulse">200+</h3>
          <p className="text-sm md:text-base opacity-50%">International Brands</p>
        </div>
        <div className="text-center">
          <h3 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold">2,000+</h3>
          <p className="text-sm md:text-base opacity-45%">High-Quality Products</p>
        </div>
        <div className="text-center">
          <h3 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold">30,000+</h3>
          <p className="text-sm md:text-base opacity-45%">Happy Customers</p>
        </div>
      </div>
        </div>
        

        {/* Hero Image */}
        <div className="relative flex justify-center items-center w-full md:pt-40 lg:pt-0">
          <div className="absolute top-[30%] left-[5%] transform animate-rotate md:max-w-40">
            <Image src="/Vector.svg" alt="Rotating Icon" width={50} height={50} />
          </div>
          <div className="absolute top-[6%] right-[5%] animate-rotate ">
            <Image src="/Vector.svg" alt="Rotating Icon" width={90} height={90} />
          </div>
          <Image src="/Fasion2.png" alt="Fashion" width={500} height={400} className="rounded-lg w-full h-auto" />
        </div>
      </div>

      {/* Brands Section */}
      <div className="mt-0 bg-black py-4">
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
};