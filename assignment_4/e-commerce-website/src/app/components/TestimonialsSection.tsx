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
//     <section className="py-10 px-4 md:px-8">
//       <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
//         What Our Customers Say
//       </h2>
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



import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => {
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
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          name={testimonial.name}
          review={testimonial.review}
          imageSrc={testimonial.imageSrc}
          stars={testimonial.stars}
        />
      ))}
    </div>
    
  );
};

export default TestimonialsSection;
