
import Image from "next/image";
import Star from "./Star"; // Assuming Star is another reusable component

interface TestimonialCardProps {
  name: string;
  review: string;
  imageSrc: string; // Icon (e.g., verified/check icon)
  stars: number; // Number of stars (max: 5)
}

const TestimonialCard = ({ name, review, imageSrc, stars }: TestimonialCardProps) => {
  const fullStars = Math.floor(stars);


  return (
    <div className="flex flex-col space-y-3 p-6 md:p-8 rounded-2xl border-2 border-black border-opacity-40 shadow-sm hover:border-black transition-shadow bg-white">
      {/* Stars */}
      <div className="flex space-x-1">
        {Array.from({ length: fullStars }).map((_, index) => (
          <Star key={index} />
        ))}
      </div>

      {/* Name and Icon */}
      <div className="flex items-center space-x-2">
        <h3 className="text-lg md:text-xl font-bold">{name}</h3>
        <Image src={imageSrc} alt="Verified Icon" width={24} height={24} />
      </div>

      {/* Review */}
      <p className="text-sm md:text-base opacity-70">
        {review}
      </p>
    </div>
  );
};

export default TestimonialCard;