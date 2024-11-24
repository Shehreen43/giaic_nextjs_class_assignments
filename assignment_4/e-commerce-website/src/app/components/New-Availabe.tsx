import Image from "next/image";
import Card from "./Card";
import TestimonialsSection from "./TestimonialsSection";

export default function New_Availabe() {
  return (
    <div className="px-4 md:px-10 lg:px-20 space-y-12">
      {/* New Arrivals Section */}
      <section className="text-center">
        <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-extrabold font-integral text-black">
          NEW ARRIVALS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
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
        <button className="mt-8 px-6 py-2 border-2 border-black border-opacity-40 rounded-full hover:border-opacity-100">
          View All
        </button>
      </section>

      <hr className="w-full border-t-2 border-black mt-12" />

      {/* Top Selling Section */}
      <section className="text-center">
        <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-extrabold font-integral text-black">
          TOP SELLING
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
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
        <button className="mt-8 px-6 py-2 border-2 border-black border-opacity-40 rounded-full hover:border-opacity-100">
          View All
        </button>
      </section>

      {/* Browse by Dress Style */}
      <section className="bg-gray-100 p-8 rounded-2xl">
        <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-extrabold font-integral text-black text-center mb-8">
          BROWSE BY DRESS STYLE
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative">
            <Image src="/img10.png" alt="Casual" width={407} height={289} className="rounded-2xl w-full" />
            <h3 className="absolute bottom-4 left-4 text-[24px] font-bold text-white">Casual</h3>
          </div>
          <div className="relative md:col-span-2">
            <Image src="/img11.png" alt="Formal" width={684} height={289} className="rounded-2xl w-full" />
            <h3 className="absolute bottom-4 left-4 text-[24px] font-bold text-white">Formal</h3>
          </div>
          <div className="relative">
            <Image src="/img12.png" alt="Party" width={684} height={289} className="rounded-2xl w-full" />
            <h3 className="absolute bottom-4 left-4 text-[24px] font-bold text-white">Party</h3>
          </div>
          <div className="relative">
            <Image src="/img13.png" alt="Gym" width={407} height={289} className="rounded-2xl w-full" />
            <h3 className="absolute bottom-4 left-4 text-[24px] font-bold text-white">Gym</h3>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-12">
        <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-extrabold font-integral text-black text-center">
          OUR HAPPY CUSTOMERS
        </h1>
        <TestimonialsSection />
      </section>
    </div>
  );
}



// import Image from "next/image";
// import Card from "./Card";
// import Star from "./Star";
// import TestimonialsSection from "./TestimonialsSection";

// export default function New_Availabe() {
//   return (
//     <>
//       <h1 className="absolute w-[1440px] h-[58px] top-[991px]  gap-0 text-center text-[48px] font-extrabold leading-[57.6px] font-integral text-black">
//         NEW ARRIVALS
//       </h1>
//       <div className="absolute top-[1110px] grid grid-cols-4 gap-6 left-[100px]">
//         <Card
//           imageSrc="/img1.png"
//           title="T-shirt with Tape Details"
//           rating={4.5}
//           price={120}
//           showOriginalPrice={false} // Hide original price
//           showDiscount={false}
//         />
//         <Card
//           imageSrc="/img2.png"
//           title="Skinny Fit Jeans"
//           rating={3.5}
//           price={240}
//           originalPrice={260}
//           discount={20}
//         />
//         <Card
//           imageSrc="/img3.png"
//           title="Checkered Shirt"
//           rating={4.5}
//           price={180}
//           showOriginalPrice={false} //not Show original price
//           showDiscount={false} //not Show discount
//         />

//         <Card
//           imageSrc="/img4.png"
//           title="Sleeve Striped T-shirt"
//           rating={4.5}
//           price={130}
//           originalPrice={160}
//           discount={30}
//           showOriginalPrice={true}
//           showDiscount={true}
//         />
//       </div>

//       <button className="w-[218px] h-[52px] absolute top-[1558px] left-[611px] p-[16px_54px] gap-[12px] rounded-[62px] border-[2px] border-black border-opacity-40 hover:border-opacity-100 ">
//         <p>View All</p>
//       </button>

//       <hr className="w-[1240px] absolute top-[1664px] left-[100px] bg-black" />

//       <h1 className="absolute w-[1440px] h-[58px] top-[1728px]  gap-0 text-center text-[48px] font-extrabold leading-[57.6px] font-integral text-black">
//         TOP SELLING
//       </h1>

//       <div className="absolute top-[1841px] grid grid-cols-4 gap-6 left-[100px]">
//         <Card
//           imageSrc="/img5.png"
//           title="Vertical Striped Shirt"
//           rating={5.0}
//           price={212}
//           originalPrice={232}
//           discount={20}
//           showOriginalPrice={true}
//           showDiscount={true}
//         />
//         <Card
//           imageSrc="/img6.png"
//           title="Courage Graphic T-shirt"
//           rating={4.0}
//           price={145}
//           showOriginalPrice={false}
//           showDiscount={false}
//         />
//         <Card
//           imageSrc="/img7.png"
//           title="Loose Fit Bermuda Shorts"
//           rating={3.0}
//           price={80}
//           showOriginalPrice={false}
//           showDiscount={false}
//         />

//         <Card
//           imageSrc="/img8.png"
//           title="Faded Skinny Jeans"
//           rating={4.5}
//           price={210}
//           showOriginalPrice={false}
//           showDiscount={false}
//         />
//       </div>

//       <button className="w-[218px] h-[52px] absolute top-[2295px] left-[611px] p-[16px_54px] gap-[12px] rounded-[62px] border-[2px] border-black border-opacity-40 hover:border-opacity-100 ">
//         <p>View All</p>
//       </button>

//       <div className="absolute w-[1239px] h-[866px] top-[2417px] left-[100px] gap-0 rounded-[40px] bg-[#F0F0F0]">
//         <h1 className="relative h-[58px] top-[70px]  gap-0 text-center text-[48px] font-extrabold leading-[57.6px] font-integral text-black">
//           BROWSE BY DRESS STYLE
//         </h1>

//         <div className=" grid grid-cols-3 gap-4">
//           <div className="absolute top-[192px] left-[64px] gap-0 rounded-2xl">
//             <Image
//               src="/img10.png"
//               alt=""
//               height={289}
//               width={407}
//               className="rounded-[20px]"
//             />
//             <h3 className="absolute h-[49px] top-0 mb-3 left-[36px] gap-0 font-satoshi text-[36px] font-bold leading-[48.6px] text-left">
//               Casual
//             </h3>
//           </div>
//           <div className="w-[684px] h-[289px] absolute top-[192px] left-[491px]">
//             <Image
//               src="/img11.png"
//               alt=""
//               height={289}
//               width={684}
//               className="rounded-[20px]"
//             />
//             <h3 className="absolute h-[49px] top-0 mb-3 left-[36px] gap-0 font-satoshi text-[36px] font-bold leading-[48.6px] text-left">
//               Formal
//             </h3>
//           </div>
//           <div className="w-[684px] h-[289px] absolute top-[501px] left-[64px]">
//             <Image
//               src="/img12.png"
//               alt=""
//               height={289}
//               width={684}
//               className="rounded-[20px]"
//             />
//             <h3 className="absolute h-[49px] top-0 left-[36px] gap-0 font-satoshi text-[36px] font-bold leading-[48.6px] text-left">
//               Party
//             </h3>
//           </div>
//           <div className="absolute top-[501px] left-[768px] gap-0 rounded-2xl">
//             <Image
//               src="/img13.png"
//               alt=""
//               height={289}
//               width={407}
//               className="rounded-[20px]"
//             />
//             <h3 className="absolute h-[49px] top-0 mb-3 left-[36px] gap-0 font-satoshi text-[36px] font-bold leading-[48.6px] text-left">
//               Gym
//             </h3>
//           </div>
//         </div>
//       </div>
//       <div className="absolute top-[3363px]">
//         <h1 className="absolute w-[1440px]  h-[58px] gap-0 font-extrabold leading-[57.6px] font-integral text-black  left-[100px] text-[48px]">
//           OUR HAPPY CUSTOMERS
//         </h1>

//         <TestimonialsSection />
//       </div>
//     </>
//   );
// }
