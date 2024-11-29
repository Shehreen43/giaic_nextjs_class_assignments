// import Image from "next/image";
// import Star from "./Star"; // Assuming Star is another reusable component

// interface TestimonialCardProps {
//   name: string;
//   review: string;
//   imageSrc: string; // Icon (e.g., verified/check icon)
//   stars: number; // Number of stars (max: 5)
// }

// const TestimonialCard = ({ name, review, imageSrc, stars }: TestimonialCardProps) => {
//   const fullStars = Math.floor(stars);

//   return (
//     <div className="flex flex-col space-y-3 p-6 md:p-8 rounded-2xl border-2 border-black border-opacity-40 shadow-sm hover:shadow-md transition-shadow bg-white">
//       {/* Stars */}
//       <div className="flex space-x-1">
//         {Array.from({ length: fullStars }).map((_, index) => (
//           <Star key={index} />
//         ))}
//       </div>

//       {/* Name and Icon */}
//       <div className="flex items-center space-x-2">
//         <h3 className="text-lg md:text-xl font-bold">{name}</h3>
//         <Image src={imageSrc} alt="Verified Icon" width={24} height={24} />
//       </div>

//       {/* Review */}
//       <p className="text-sm md:text-base opacity-70">
//         {review}
//       </p>
//     </div>
//   );
// };

// export default TestimonialCard;


import Image from "next/image";
import Star from "./Star"; // Assuming Star is another reusable component

interface TestimonialCardProps {
  name: string;
  review: string;
  imageSrc: string; // For the checked icon
  stars: number; // Number of stars (max: 5)
}

const TestimonialCard = ({
  name,
  review,
  imageSrc,
  stars,
}: TestimonialCardProps) => {
    const fullStars = Math.floor(stars);
  return (
    <div className="relative w-[400px] h-[230px] top-[100px] left-[100px] p-[28px_32px] gap-[342px] rounded-[20px] border-black border-2 border-opacity-40">
      <div className="space-y-3">
        {/* Stars */}
        <p className="flex flex-row space-x-1">
        {Array.from({ length: fullStars }).map((_, index) => (
        <Star key={index} />
       ))}
        </p>

        {/* Name and Icon */}
        <div className="flex items-center space-x-2">
          <h3 className="h-[15px] gap-0 font-satoshi text-[20px] font-bold leading-[22px] text-left">
            {name}
          </h3>
          <Image src={imageSrc} alt="Checked Icon" width={24} height={24} />
        </div>

        {/* Review Text */}
        <p className="h-[88px] gap-0 opacity-50 font-satoshi text-[16px] font-normal justify-self-auto leading-[22px] text-left">
          {review}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
   