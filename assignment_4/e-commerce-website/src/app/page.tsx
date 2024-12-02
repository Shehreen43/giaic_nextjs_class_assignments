// import Image from "next/image";
// import TopHeader from "./components/TopHeader";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import New_Availabe from "./components/New-Availabe";
// import Footer from "./components/Footer";

// export default function Home() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Top Header */}
//       <header>
//         <TopHeader />
//       </header>

//       {/* Navigation Bar */}
//       <Navbar />

//       {/* Main Content */}
//       <main className="flex-grow">
//         <Hero />
//         <New_Availabe />
//       </main>

//       {/* Footer Section */}
//       <footer>
//         <Footer />
//       </footer>
//     </div>
//   );
// }


import Image from "next/image";
import TopHeader from "./components/TopHeader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import New_Available from "./components/New-Available";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <TopHeader />
     <Navbar />
     <Hero />
     <New_Available />
     <Footer />
  {/*
    <main>
    <Hero />
    <New_Available />
    </main>
    <Footer /> */}
    </>
  )}





