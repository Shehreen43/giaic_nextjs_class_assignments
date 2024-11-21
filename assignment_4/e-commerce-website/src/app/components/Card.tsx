import Image from "next/image";
import Star from "./Star";

interface CardProps {
  imageSrc: string;
  title: string;
  rating: number;
  price: number;
}

export default function Card({ imageSrc, title, rating, price }: CardProps) {
  // Calculate full stars and half stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="absolute top-[114px] left-[100px]">
      {/* Dynamic Image */}
      <Image src={imageSrc} alt={title} width={295} height={298} className="rounded-[20px]" />

      {/* Title */}
      <p className="text-[15px] text-left">{title}</p>

      {/* Rating */}
      <div className="flex flex-row space-x-1 mt-[-25px] items-center">
        {/* Full Stars */}
        {Array.from({ length: fullStars }).map((_, index) => (
          <Star key={index} />
        ))}

        {/* Half Star */}
        {hasHalfStar && <Image src="/Half_star.svg" alt="star" width={8.79} height={16.72} />}

        {/* Rating Value */}
        <p className="text-[14px]">{rating}/5</p>
      </div>

      {/* Price */}
      <p className="text-[15px] mt-[-25px] text-left">${price}</p>
    </div>
  );
}



// import Image from "next/image";
// import Star from "./Star";

// export default function Card(){
//     return (
//         <>
//         <div className="absolute top-[114px] left-[100px]">
//         <Image  src="/img1.png" alt="" width={295} height={298} className=" rounded-[20px]" />

//         <p className="  text-[15px] text-left">
//            T-shirt with Tape Details
//         </p>
//        <div className="flex flex-row space-x-1 mt-[-25px]">
//         <Star /> <Star /> <Star /> <Star /> 
//         <Image src="/Half_star.svg" alt="star" width={8.79} height={16.72} />
//         <p className="text-[14px]">4.5/5</p>
//        </div>
//        <p className="text-[15px] mt-[-25px] text-left">$120</p>

//         </div>
//         </>
//     )
// }