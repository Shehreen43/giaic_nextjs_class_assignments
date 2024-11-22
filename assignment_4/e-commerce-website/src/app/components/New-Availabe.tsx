import integral from 'next/font/google';

import Card from "./Card";



export default function New_Availabe(){
    return(
        <>
       <h1 className="absolute w-[1440px] h-[58px] top-[991px]  gap-0 text-center text-[48px] font-extrabold leading-[57.6px] font-integral text-black">
           NEW ARRIVALS</h1>
    <div className="absolute top-[1140px] grid grid-cols-4 gap-6 left-[100px]">
      <Card
        imageSrc="/img1.png"
        title="T-shirt with Tape Details"
        rating={4.5}
        price={120}
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
        title="Classic Fit Jeans"
        rating={3.8}
        price={100}
      />
      <Card
        imageSrc="/img4.png"
        title="Classic Fit Jeans"
        rating={3.8}
        price={100}
      />
    </div>
        </>
    )
}