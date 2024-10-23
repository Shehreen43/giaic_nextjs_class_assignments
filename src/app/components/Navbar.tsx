// import Link from "next/link";

// export default function Navbar() {
//   return (
   
//       <div className="bg-cyan-200 p-2 mb-0 border-b-4 border-cyan-800">
//         <div className="flex flex-col space-y-2 justify-end md:flex-row md:space-x-5">
//         <Link href="/">Home</Link> 
        
//         <Link href="/about"> About </Link>
        
//         <Link href="/contacts">Contact</Link>
       
//         <Link href="/jobs">Jobs</Link>
        
//         <Link href="/jobs/programming">Programming</Link>
       
//         <Link href="/jobs/programming/services">Services</Link>
//         </div>
//       </div>
     
     
//   );
// }

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-cyan-200 p-2 mb-0 border-b-4 border-cyan-800">
      <div className="flex justify-between items-center">
       
        <h1 className="text-2xl font-bold text-cyan-800 hover:text-cyan-500 hover:scale-110">
          <Link href="/">NextGen Creations</Link>
        </h1>

        <div className="flex space-x-5">
          <Link href="/" className="text-lg hover:text-cyan-800">
            Home
          </Link>
          <Link href="/about" className="text-lg hover:text-cyan-800">
            About
          </Link>
          <Link href="/contacts" className="text-lg hover:text-cyan-800">
            Contact
          </Link>
          <Link href="/jobs" className="text-lg hover:text-cyan-800">
            Jobs
          </Link>
          <Link href="/jobs/programming" className="text-lg hover:text-cyan-800">
            Programming
          </Link>
          <Link href="/jobs/programming/services" className="text-lg hover:text-cyan-800">
            Services
          </Link>
        </div>
      </div>
    </div>
  );
}
