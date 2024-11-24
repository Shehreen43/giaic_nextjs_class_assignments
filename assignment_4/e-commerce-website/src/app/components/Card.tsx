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

const Card = ({
  imageSrc,
  title,
  rating,
  price,
  originalPrice = 0,
  discount = 0,
  showOriginalPrice = true,
  showDiscount = true,
}: CardProps) => {
  const formattedPrice = price.toFixed();

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const originalPriceNum = typeof originalPrice === "string" ? parseFloat(originalPrice) : originalPrice;
  const discountNum = typeof discount === "string" ? parseFloat(discount) : discount;

  const formattedOriginalPrice = !isNaN(originalPriceNum) ? originalPriceNum.toFixed() : null;

  return (
    <div className="rounded-lg space-y-4 bg-white p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      {/* Image Section */}
      <Image
        src={imageSrc}
        alt={title}
        width={295}
        height={298}
        className="rounded-[20px] object-cover w-full h-auto"
      />

      {/* Title */}
      <p className="font-satoshi text-lg md:text-xl font-bold text-left">{title}</p>

      {/* Rating */}
      <div className="flex items-center space-x-2">
        {Array.from({ length: fullStars }).map((_, index) => (
          <Star key={index} />
        ))}
        {hasHalfStar && <Image src="/Half_star.svg" alt="half-star" width={16} height={16} />}
        <p className="text-sm md:text-base">
          {rating} <span className="opacity-50">/5</span>
        </p>
      </div>

      {/* Price Section */}
      <div className="flex items-center gap-2">
        <p className="text-lg md:text-2xl font-bold">${formattedPrice}</p>
        {showOriginalPrice && formattedOriginalPrice && (
          <p className="text-sm md:text-base line-through opacity-50">${formattedOriginalPrice}</p>
        )}
        {showDiscount && discountNum > 0 && (
          <p className="bg-red-200 text-red-500 text-xs md:text-sm font-medium px-4 py-1 rounded-full">
            -{discountNum}%
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;



//  import Image from "next/image";
// import Star from "./Star";

// interface CardProps {
//   imageSrc: string;
//   title: string;
//   rating: number;
//   price: number;
//   originalPrice?: number | string; // Optional: Can be undefined
//   discount?: number | string; // Optional: Can be undefined
//   showOriginalPrice?: boolean; // Optional: Flag to decide if original price is shown
//   showDiscount?: boolean; // Optional: Flag to decide if discount is shown
// }

// const Card = ({
//   imageSrc,
//   title,
//   rating,
//   price,
//   originalPrice = 0,
//   discount = 0,
//   showOriginalPrice = true, // Default to true if not passed
//   showDiscount = true, // Default to true if not passed
// }: CardProps) => {
//   const formattedPrice = price.toFixed();

//   // Calculate full stars and half stars
//   const fullStars = Math.floor(rating);
//   const hasHalfStar = rating % 1 !== 0;


//   // Convert originalPrice and discount to numbers (if they are strings)
//   const originalPriceNum = typeof originalPrice === "string" ? parseFloat(originalPrice) : originalPrice;
//   const discountNum = typeof discount === "string" ? parseFloat(discount) : discount;

//   // Check if the originalPrice is a valid number
//   const formattedOriginalPrice = !isNaN(originalPriceNum) ? originalPriceNum.toFixed() : null;

//   return (
//     <div className="rounded-lg space-y-2">
//       <Image
//         src={imageSrc}
//         alt={title}
//         width={295}
//         height={298}
//         className="rounded-[20px]"
//       />

//       <p className="font-satoshi text-[20px] leading-[27px] font-bold text-left pt-3">{title}</p>

      
//       <div className="flex flex-row space-x-1  items-center">
//          {/* Full Stars */}
//          {Array.from({ length: fullStars }).map((_, index) => (
//         <Star key={index} />
//        ))}

//         {/* Half Star */}
//         {hasHalfStar && <Image src="/Half_star.svg" alt="star" width={8.79} height={16.72} />}
//                {/* Rating Value */}
//          <p className="text-[14px]">{rating}<span className="opacity-40">/5</span></p>
//      </div>
//       <div className="flex flex-row gap-2 font-satoshi text-[24px] font-bold leading-[32.4px] text-left">
//       <p>${formattedPrice}</p>
      
//       {showOriginalPrice && formattedOriginalPrice && (
//         <p>
//           <s className="opacity-40">${formattedOriginalPrice}</s> 
//         </p>
//       )}

//       {showDiscount && discountNum > 0 && (
//          <p className="bg-red-200 text-red-500 font-satoshi text-[12px] font-medium leading-[16.2px] px-5 rounded-[62px] flex justify-center items-center text-center">
//          <span>-{discountNum}%</span>
//        </p>
//       )}
//       </div>
//     </div>
//   );
// }


// const Customers_Review =()=>{
//   return (<>
         
//   </>)
// }

// export default Card;



