import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="w-[1440px] h-[663px] top-[134px]  gap-0 bg-[#F0F0F0]">
        <h1 className="absolute w-[577px] h-[173px] top-[237px] left-[100px] gap-0 text-[64px] font-bold leading-[64px] text-left">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p
          className="absolute max-w-[545px] h-[33px] top-[442px] left-[100px] gap-0 
         font-[Satoshi] text-[14px] font-normal leading-[22px] text-left"
        >
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        <button className="absolute w-[210px] h-[52px] top-[507px] left-[100px] px-[54px] py-[16px] gap-[12px] rounded-[62px] bg-black text-white">
          <p>Shop Now</p>
        </button>

        <div
          className="absolute w-[596px] h-[74px] top-[607px] left-[100px]
            flex flex-col md:flex-row gap-[16px] md:gap-[32px] "
        >
          <div>
            <h3
              className="font-satoshi text-[40px] font-bold leading-[54px] text-left 
            w-[107px] h-[54px] gap-0 "
            >
              200+
            </h3>
            <p>International Brands</p>
          </div>
          <div>
            <h3
              className="font-satoshi text-[40px] font-bold leading-[54px] text-left 
            w-[107px] h-[54px] gap-0 "
            >
             2,000+
            </h3>
            <p>High-Quality Products</p>
          </div>
          <div>
            <h3
              className="font-satoshi text-[40px] font-bold leading-[54px] text-left 
            w-[107px] h-[54px] gap-0 "
            >
             30,000+
            </h3>
            <p>Happy Customers</p>
          </div>
        </div>
        <div className="absolute top-[431px] left-[750px]">
          <Image  src="/Vector.svg" alt="" width={56} height={56}  />
       </div>
       <div className="absolute w-[104px] h-[104px] top-[220px] left-[1255px] gap-0">
       <Image  src="/Vector.svg" alt="" width={104} height={104}  />
</div>
<div className="">
<Image  src="/Fasion 1.png" alt="" width={1440} height={663}  />
</div>

<div className="w-[1440px] h-[122px] top-[797px]  bg-black">
<Image  src="/VERSACE.svg" alt="" width={166.48} height={33.16} className="absolute top-[841px] left-[100px]" />

<Image  src="ZARA.svg" alt="" width={91} height={38} className="absolute top-[839px] left-[372.48px]" />

<Image  src="GUCCI.svg" alt="" width={156} height={36} className="absolute top-[840px] left-[569.48px]" />

<Image  src="PARADA.svg" alt="" width={194} height={32} className="absolute top-[842px] left-[831.48px]" />

<Image  src="Calvin-Klein.svg" alt="" width={206.79} height={33.35} className="absolute top-[841px] left-[1131.48px]" />



</div>


      </section>
    </>
  );
}
