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
// 
/*
<div className="absolute w-[400px] h-[230px] top-[100px] left-[100px] p-[28px_32px] gap-[342px] rounded-[20px] border-black border-2 border-opacity-40">
          <div className="space-y-3">
            <p className="flex flex-row">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </p>

            <div className="flex">
              <h3 className=" h-[15px] gap-0 font-satoshi text-[20px] font-bold leading-[22px] text-left">
                Sarah M.
              </h3>
              <Image
                src="/checked.svg"
                alt="Star"
                width={24}
                height={24}
                className=""
              />
            </div>

            <p
              className=" h-[88px] gap-0 opacity-50 font-satoshi text-[16px] font-normal justify-self-auto leading-[22px] text-left
   md:text-[14px] md:leading-[20px] 
   sm:text-[12px] sm:leading-[18px]"
            >
              "I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I've bought has exceeded my expectations.”
            </p>
          </div>
        </div>
*/