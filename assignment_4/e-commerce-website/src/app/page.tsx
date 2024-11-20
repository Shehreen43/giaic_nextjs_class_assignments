import Image from "next/image";
import TopHeader from "./components/TopHeader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import New_Availabe from "./components/New-Availabe";

export default function Home() {
  return (
    <>
    <TopHeader />
    <Navbar />
    <Hero />
    <New_Availabe />
    </>
  )}





// import Image from 'next/image';

// export default function Home() {
//   return (
//     <div className="bg-white">
//       {/* Top Announcement */}
//       <div className="bg-gray-100 text-center py-2 text-sm font-medium">
//         Sign up and get 20% off your first order. <span className="text-blue-600 cursor-pointer">Sign Up Now</span>
//       </div>

//       {/* Header */}
//       <header className="flex justify-between items-center px-4 sm:px-8 py-4 border-b">
//         <h1 className="text-2xl font-bold">SHOP.CO</h1>
//         <nav className="hidden md:flex space-x-6">
//           <a href="#" className="hover:text-gray-700">Shop</a>
//           <a href="#" className="hover:text-gray-700">On Sale</a>
//           <a href="#" className="hover:text-gray-700">New Arrivals</a>
//           <a href="#" className="hover:text-gray-700">Brands</a>
//         </nav>
//         <div className="flex items-center space-x-4">
//           <button className="hidden sm:block">Search</button>
//           <button>Cart</button>
//           <button>Profile</button>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="px-4 sm:px-8 py-12 bg-white flex flex-col lg:flex-row items-center justify-between">
//         {/* Text Content */}
//         <div className="max-w-lg">
//           <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
//             Find Clothes <br /> That Matches <br /> Your Style
//           </h2>
//           <p className="text-gray-600 mb-6">
//             Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
//           </p>
//           <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">Shop Now</button>
//         </div>

//         {/* Image */}
//         <div className="mt-8 lg:mt-0">
//           <Image
//             src="/Fasion2.png" // Replace with your image path
//             alt="Hero Image"
//             width={500}
//             height={500}
//             className="object-cover"
//           />
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="px-4 sm:px-8 py-12 bg-gray-50 grid grid-cols-1 sm:grid-cols-3 text-center gap-6">
//         <div>
//           <h3 className="text-2xl font-bold">200+</h3>
//           <p className="text-gray-600">International Brands</p>
//         </div>
//         <div>
//           <h3 className="text-2xl font-bold">2,000+</h3>
//           <p className="text-gray-600">High-Quality Products</p>
//         </div>
//         <div>
//           <h3 className="text-2xl font-bold">30,000+</h3>
//           <p className="text-gray-600">Happy Customers</p>
//         </div>
//       </section>

//       {/* Brand Logos */}
//       <section className="py-6 bg-black text-white">
//         <div className="flex justify-center space-x-6">
//           <span>VERSACE</span>
//           <span>ZARA</span>
//           <span>GUCCI</span>
//           <span>PRADA</span>
//           <span>Calvin Klein</span>
//         </div>
//       </section>
//     </div>
//   );
// }




