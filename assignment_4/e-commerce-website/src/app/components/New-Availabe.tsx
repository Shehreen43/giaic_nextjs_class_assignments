import integral from "next/font/google";

import Card from "./Card";
export default function New_Availabe() {
  return (
    <>
      <h1 className="absolute w-[1440px] h-[58px] top-[991px]  gap-0 text-center text-[48px] font-extrabold leading-[57.6px] font-integral text-black">
        NEW ARRIVALS
      </h1>
      <div className="absolute top-[1110px] grid grid-cols-4 gap-6 left-[100px]">
        <Card
          imageSrc="/img1.png"
          title="T-shirt with Tape Details"
          rating={4.5}
          price={120}
          showOriginalPrice={false} // Hide original price
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
          showOriginalPrice={false} //not Show original price
          showDiscount={false} //not Show discount
        />

        <Card
          imageSrc="/img4.png"
          title="Sleeve Striped T-shirt"
          rating={4.5}
          price={130}
          originalPrice={160}
          discount={30}
          showOriginalPrice={true} 
          showDiscount={true} 
        />
      </div>

      <button className="w-[218px] h-[52px] absolute top-[1558px] left-[611px] p-[16px_54px] gap-[12px] rounded-[62px] border-[2px] border-black border-opacity-40 hover:border-opacity-100 ">
        <p>View All</p>
      </button>

      <hr className="w-[1240px] absolute top-[1664px] left-[100px] bg-black" />
 
      <h1 className="absolute w-[1440px] h-[58px] top-[1728px]  gap-0 text-center text-[48px] font-extrabold leading-[57.6px] font-integral text-black">
       TOP SELLING
      </h1>

      <div className="absolute top-[1841px] grid grid-cols-4 gap-6 left-[100px]">
        <Card
          imageSrc="/img5.png"
          title="Vertical Striped Shirt"
          rating={5.0}
          price={212}
          originalPrice={232}
          discount={20}
          showOriginalPrice={true} 
          showDiscount={true} 
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

      <button className="w-[218px] h-[52px] absolute top-[2295px] left-[611px] p-[16px_54px] gap-[12px] rounded-[62px] border-[2px] border-black border-opacity-40 hover:border-opacity-100 ">
        <p>View All</p>
      </button>

      <div className="">

      </div>
    </>
  );
}
