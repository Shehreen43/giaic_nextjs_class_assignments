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

export default function Card({
  imageSrc,
  title,
  rating,
  price,
  originalPrice = 0,
  discount = 0,
  showOriginalPrice = true, // Default to true if not passed
  showDiscount = true, // Default to true if not passed
}: CardProps) {
  const formattedPrice = price.toFixed(2);

  // Convert originalPrice and discount to numbers (if they are strings)
  const originalPriceNum = typeof originalPrice === "string" ? parseFloat(originalPrice) : originalPrice;
  const discountNum = typeof discount === "string" ? parseFloat(discount) : discount;

  // Check if the originalPrice is a valid number
  const formattedOriginalPrice = !isNaN(originalPriceNum) ? originalPriceNum.toFixed(2) : null;

   // Calculate full stars and half stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="space-y-2">
      <Image src={imageSrc} alt={title} width={295} height={298} className="rounded-[20px]" />

      <p className="text-[15px] text-left">{title}</p>
      
      <div className="flex flex-row space-x-1  items-center">
         {/* Full Stars */}
       {Array.from({ length: fullStars }).map((_, index) => (
        <Star key={index} />
       ))}

        {/* Half Star */}
        {hasHalfStar && <Image src="/Half_star.svg" alt="star" width={8.79} height={16.72} />}
               {/* Rating Value */}
         <p className="text-[14px]">{rating}/5</p>
     </div>
      
      <p className="text-[15px]  text-left">${formattedPrice}</p>
      
      {showOriginalPrice && formattedOriginalPrice && (
        <p className="text-[15px] text-left">
          <s>${formattedOriginalPrice}</s> 
        </p>
      )}

      {showDiscount && discountNum > 0 && (
        <p className="text-[15px] text-left">
          <span>-{discountNum}%</span>
        </p>
      )}
    </div>
  );
}



// import Image from "next/image";
// import Star from "./Star";

// interface CardProps {
//   imageSrc: string;
//   title: string;
//   rating: number;
//   price: number;
//   originalPrice?: number |string;
//   discount?: number |string;
// }

// export default function Card({ imageSrc, title, rating, price,originalPrice = 0, discount= 0, }: CardProps) {

//     const formattedPrice = price.toFixed(2);
//     // Convert originalPrice and discount to numbers (if they are strings)
//   const originalPriceNum = typeof originalPrice === "string" ? parseFloat(originalPrice) : originalPrice;
//   const discountNum = typeof discount === "string" ? parseFloat(discount) : discount;

//   // Check if the originalPrice is a valid number
//   const formattedOriginalPrice = !isNaN(originalPriceNum) ? originalPriceNum.toFixed(2) : null;

    
//   // Calculate full stars and half stars
//   const fullStars = Math.floor(rating);
//   const hasHalfStar = rating % 1 !== 0;

//   return (
//     <div className="space-y-2">
//       {/* Dynamic Image */}
//       <Image src={imageSrc} alt={title} width={295} height={298} className="rounded-[20px]" />

//       {/* Title */}
//       <p className="text-[15px] text-left">{title}</p>

//       {/* Rating */}
//       <div className="flex flex-row space-x-1  items-center">
//         {/* Full Stars */}
//         {Array.from({ length: fullStars }).map((_, index) => (
//           <Star key={index} />
//         ))}

//         {/* Half Star */}
//         {hasHalfStar && <Image src="/Half_star.svg" alt="star" width={8.79} height={16.72} />}

//         {/* Rating Value */}
//         <p className="text-[14px]">{rating}/5</p>
//       </div>

//       {/* Price */}
//       <p className="text-[15px] mt-[-25px] text-left">${formattedPrice}</p>
      
//       {formattedOriginalPrice && (
//         <p className="text-[15px] mt-[-25px] text-left">
//           <s>${formattedOriginalPrice}</s><span>-{discountNum}%</span>
//         </p>
//       )}
//       {/* <p className="text-[15px] text-left">${price}</p> */}
//       {/* <p className="text-[15px] mt-[-25px] text-left">${formattedPrice}</p>
      
//       <p className="text-[15px] mt-[-25px] text-left">
//         <s>{formattedOriginalPrice}</s>{" "}<span>{discount}</span> */}
//       {/* </p> */}
//     </div>
//   );
// }







//  import Image from "next/image";
// import Star from "./Star";

// export default function Card(){
//     return (
//         <>
//         <div className="w-[1440px] top-[114px] left-[100px]flex flex-cols space-x-1">
//         <Image  src="/img1.png" alt="" width={295} height={298} className=" rounded-[20px]" />

//         <p className="  text-[15px] text-left">
//            T-shirt with Tape Details
//         </p>
//        <div className="flex flex-row space-x-1 mt-[-25px]">
//         <Star /> <Star /> <Star /> <Star /> 
//         <Image src="/Half_star.svg" alt="star" width={8.79} height={16.72} />
//         <p className="text-[14px]">4.5/5</p>
//        </div>
 //      <p className="text-[15px] mt-[-25px] text-left">$120<p><s>$260</s> <span>-20%</span></p>
 //     <p>Now only $ 1000</p></p>
             
//         </div>
//         </>
//     )
// }