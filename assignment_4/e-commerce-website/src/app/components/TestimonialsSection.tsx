// import TestimonialCard from "./TestimonialCard";

// const TestimonialsSection = () => {
//   const testimonials = [
//     {
//       name: "Sarah M.",
//       review:
//         "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
//       imageSrc: "/checked.svg",
//       stars: 5,
//     },
//     {
//       name: "Alex K.",
//       review:
//         "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
//       imageSrc: "/checked.svg",
//       stars: 5,
//     },
//     {
//       name: "James L.",
//       review:
//         "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
//       imageSrc: "/checked.svg",
//       stars: 5,
//     },
//   ];

//   return (
//     <section className="py-10 mb-40 px-4 md:px-8 max-w-screen-2xl mx-auto">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {testimonials.map((testimonial, index) => (
//           <TestimonialCard
//             key={index}
//             name={testimonial.name}
//             review={testimonial.review}
//             imageSrc={testimonial.imageSrc}
//             stars={testimonial.stars}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;

"use client"; // Mark this as a client component

import { useRef, useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import Image from "next/image";

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrollableLeft, setIsScrollableLeft] = useState(false);
  const [isScrollableRight, setIsScrollableRight] = useState(false);

  const testimonials = [
    {
      name: "Sarah M.",
      review:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      imageSrc: "/checked.svg",
      stars: 5,
    },
    {
      name: "Alex K.",
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      imageSrc: "/checked.svg",
      stars: 5,
    },
    {
      name: "James L.",
      review:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      imageSrc: "/checked.svg",
      stars: 5,
    },
    {
      name: "Alex K.",
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      imageSrc: "/checked.svg",
      stars: 5,
    },
    {
      name: "James L.",
      review:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      imageSrc: "/checked.svg",
      stars: 5,
    },
    {
      name: "Alex K.",
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      imageSrc: "/checked.svg",
      stars: 5,
    },
    {
      name: "James L.",
      review:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      imageSrc: "/checked.svg",
      stars: 5,
    },
    {
      name: "Alex K.",
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      imageSrc: "/checked.svg",
      stars: 5,
    },
    {
      name: "James L.",
      review:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      imageSrc: "/checked.svg",
      stars: 5,
    },
    {
      name: "Alex K.",
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      imageSrc: "/checked.svg",
      stars: 5,
    },
    {
      name: "James L.",
      review:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      imageSrc: "/checked.svg",
      stars: 5,
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const updateScrollState = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setIsScrollableLeft(scrollLeft > 0);
      setIsScrollableRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      updateScrollState();
      scrollRef.current.addEventListener("scroll", updateScrollState);
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", updateScrollState);
      }
    };
  }, []);

  return (
    <section className="py-10 mb-40 px-4 md:px-8 max-w-screen-2xl mx-auto relative">
      {/* Heading with Right-Aligned Arrows */}
      <div className="flex justify-between items-center mb-8">
         <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-extrabold font-integral text-black text-center">
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="flex space-x-2">
          <button
            onClick={() => handleScroll("left")}
            className={`bg-white p-2 rounded-full shadow hover:shadow-lg ${
              !isScrollableLeft ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <Image src="/left-arrow.svg" alt="Left Arrow" width={24} height={24} />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className={`bg-white p-2 rounded-full shadow hover:shadow-lg ${
              !isScrollableRight ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <Image src="/right-arrow.svg" alt="Right Arrow" width={24} height={24} />
          </button>
        </div>
      </div>

      {/* Horizontal Scrollable Testimonials with Blur Effect */}
      <div className="relative">
        {isScrollableLeft && (
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white/50 to-transparent pointer-events-none z-10"></div>
        )}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 px-6 hide-scrollbar"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] h-[300px] flex items-stretch"
            >
              <TestimonialCard
                name={testimonial.name}
                review={testimonial.review}
                imageSrc={testimonial.imageSrc}
                stars={testimonial.stars}
              />
            </div>
          ))}
        </div>
        {isScrollableRight && (
          <div className="absolute right-0 top-0 bottom-0  w-16 bg-gradient-to-l from-white/50 to-transparent pointer-events-none z-10"></div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;


