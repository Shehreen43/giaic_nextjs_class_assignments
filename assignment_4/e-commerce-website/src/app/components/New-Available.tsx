import Image from "next/image";
import Card from "./Card";
import TestimonialsSection from "./TestimonialsSection";


export default function New_Available() {
  return (
    <div className="px-4 md:px-10 lg:px-20 space-y-12">
      {/* New Arrivals Section */}
<section className="text-center max-w-screen-2xl mx-auto">
  <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-extrabold pt-10 font-integral text-black">
    NEW ARRIVALS
  </h1>
  <div className="mt-8 overflow-x-auto sm:overflow-visible">
    <div className="flex space-x-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
         <Card
          imageSrc="/img1.png"
          title="T-shirt with Tape Details"
          rating={4.5}
          price={120}
          showOriginalPrice={false}
          showDiscount={false}
        />
       <Card
          imageSrc="/img2.png"
          title="Skinny Fit Jeans"
          rating={3.5}
          price={240}
          originalPrice={260}
          discount={20}
        />
        <Card
          imageSrc="/img3.png"
          title="Checkered Shirt"
          rating={4.5}
          price={180}
          showOriginalPrice={false}
          showDiscount={false}
        />
        <Card
          imageSrc="/img4.png"
          title="Sleeve Striped T-shirt"
          rating={4.5}
          price={130}
          originalPrice={160}
          discount={30}
        />
    
    </div>
  </div>
  <button className="mt-8 w-full sm:w-auto px-24 py-2 border-2 border-black border-opacity-40 rounded-full hover:border-opacity-100">
    View All
  </button>
</section>

      <hr className="w-full border-t-2 border-black mt-12 opacity-30 max-w-screen-2xl mx-auto" />

    {/* Top Selling Section */}
<section className="text-center max-w-screen-2xl mx-auto">
  <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-extrabold font-integral text-black">
    TOP SELLING
  </h1>
  <div className="mt-8 overflow-x-auto sm:overflow-visible">
    <div className="flex space-x-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
     <Card
          imageSrc="/img5.png"
          title="Vertical Striped Shirt"
          rating={5.0}
          price={212}
          originalPrice={232}
          discount={20}
        />
      <Card
          imageSrc="/img6.png"
          title="Courage Graphic T-shirt"
          rating={4.0}
          price={145}
          showOriginalPrice={false}
          showDiscount={false}
        />
      <Card
          imageSrc="/img7.png"
          title="Loose Fit Bermuda Shorts"
          rating={3.0}
          price={80}
          showOriginalPrice={false}
          showDiscount={false}
        />
     <Card
          imageSrc="/img8.png"
          title="Faded Skinny Jeans"
          rating={4.5}
          price={210}
          showOriginalPrice={false}
          showDiscount={false}
        />
    
    </div>
  </div>
  <button className="mt-8 w-full sm:w-auto px-24 py-2 border-2 border-black border-opacity-40 rounded-full hover:border-opacity-100">
    View All
  </button>
</section>

     {/* Browse by Dress Style */}
     
     <div className=" w-full max-w-screen-2xl mx-auto px-10 py-20 lg:py-24 rounded-[40px] bg-[#F0F0F0]">
  <h1 className=" text-center text-[32px] md:text-[40px] lg:text-[48px] font-extrabold font-integral text-black mb-8">
    BROWSE BY DRESS STYLE
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
    {/* Casual */}
    <div className="">
    <h3 className="relative top-[20%] left-[5%] text-[24px] md:text-[28px] font-bold text-gray-400">
        Casual
      </h3>
      <Image
        src="/img10.png"
        alt="Casual"
        width={407}
        height={289}
        className="rounded-[20px] w-[310px] h-[190px] sm:w-[100%] sm:h-[100%] object-cover"
      />
     
    </div>

    {/* Formal */}
    <div className=" col-span-1 sm:col-span-2 ">
    <h3 className="relative top-[20%] left-[5%] text-[24px] md:text-[28px] font-bold text-gray-400">
    Formal
      </h3>
      <Image
        src="/img11.png"
        alt="Formal"
        width={684}
        height={289}
        className="rounded-[20px] w-[310px] h-[190px] sm:w-[100%] sm:h-[100%] object-cover"
      />
     
    </div>

    {/* Party */}
    <div className=" col-span-1 sm:col-span-2 ">
    <h3 className="relative top-[20%] left-[5%]  text-[24px] md:text-[28px] font-bold text-gray-400">
        Party
      </h3>
      <Image
        src="/img12.png"
        alt="Party"
        width={684}
        height={289}
        className="rounded-[20px] w-[310px] h-[190px] sm:w-[100%] sm:h-[100%] object-cover"
      />
     
    </div>

    {/* Gym */}
    <div className="">
    <h3 className="relative top-[20%] left-[5%]  text-[24px] md:text-[28px] font-bold text-gray-400">
        Gym
      </h3>
      <Image
        src="/img13.png"
        alt="Gym"
        width={407}
        height={289}
        className="rounded-[20px] w-[310px] h-[190px] sm:w-[100%] sm:h-[100%] object-cover"
      />
     
    </div>
  </div>
</div>

      {/* Testimonials Section */}
      <section className="mt-12">
        {/* <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-extrabold font-integral text-black text-center">
          OUR HAPPY CUSTOMERS
        </h1> */}
         
        <TestimonialsSection />
      </section>
    </div>
  );
}