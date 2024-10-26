'use client';

//  export default function Error() {
//    return (
//      <div>
//         <div>My Error Page</div>
//        <h1>Oops! Something went wrong.</h1>
//      </div>
//    );
//  }
// pages/404.tsx
import Link from "next/link";

export default function Error() {
  return (
    <div className="py-12 bg-gradient-to-r from-cyan-400 to-gray-800 h-screen pt-24 flex justify-center items-center overflow-hidden relative">
      <div className="text-center">
        <h1 className="text-[10vw] text-[#e94560] animate-pulse">
          404
        </h1>
        <p className="text-[2vw] text-red-700 mt-2 hover:scale-110">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link href="/" className="inline-block mt-8 px-6 py-3 bg-[#f72f51] text-white text-[1.2vw] rounded transition-transform duration-300 ease-in-out transform hover:bg-[#ff3e50] hover:scale-110">
            Return Home
        </Link>
      </div>
    </div>
  );
}
