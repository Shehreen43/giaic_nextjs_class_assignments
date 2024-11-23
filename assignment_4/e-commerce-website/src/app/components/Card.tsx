
 import Image from "next/image";
import Star from "./Star";

interface CardProps {
  imageSrc: string;
  title: string;
  rating: number;
  price: number;
  originalPrice?: number | string; // Optional: Can be undefined
  discount?: number | string; // Optional: Can be undefined
  showOriginalPrice?: boolean; // Optional: Flag to decide if original price is shown
  showDiscount?: boolean; // Optional: Flag to decide if discount is shown
}

export default function Card ({
  imageSrc,
  title,
  rating,
  price,
  originalPrice = 0,
  discount = 0,
  showOriginalPrice = true, // Default to true if not passed
  showDiscount = true, // Default to true if not passed
}: CardProps) {
  const formattedPrice = price.toFixed();

  // Calculate full stars and half stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;


  // Convert originalPrice and discount to numbers (if they are strings)
  const originalPriceNum = typeof originalPrice === "string" ? parseFloat(originalPrice) : originalPrice;
  const discountNum = typeof discount === "string" ? parseFloat(discount) : discount;

  // Check if the originalPrice is a valid number
  const formattedOriginalPrice = !isNaN(originalPriceNum) ? originalPriceNum.toFixed() : null;

  return (
    <div className="rounded-lg space-y-2">
      <Image
        src={imageSrc}
        alt={title}
        width={295}
        height={298}
        className="rounded-[20px]"
      />

      <p className="font-satoshi text-[20px] leading-[27px] font-bold text-left pt-3">{title}</p>

      
      <div className="flex flex-row space-x-1  items-center">
         {/* Full Stars */}
       {Array.from({ length: fullStars }).map((_, index) => (
        <Star key={index} />
       ))}

        {/* Half Star */}
        {hasHalfStar && <Image src="/Half_star.svg" alt="star" width={8.79} height={16.72} />}
               {/* Rating Value */}
         <p className="text-[14px]">{rating}<span className="opacity-40">/5</span></p>
     </div>
      <div className="flex flex-row gap-2 font-satoshi text-[24px] font-bold leading-[32.4px] text-left">
      <p>${formattedPrice}</p>
      
      {showOriginalPrice && formattedOriginalPrice && (
        <p>
          <s className="opacity-40">${formattedOriginalPrice}</s> 
        </p>
      )}

      {showDiscount && discountNum > 0 && (
         <p className="bg-red-200 text-red-500 font-satoshi text-[12px] font-medium leading-[16.2px] px-5 rounded-[62px] flex justify-center items-center text-center">
         <span>-{discountNum}%</span>
       </p>
      )}
      </div>
    </div>
  );
}



