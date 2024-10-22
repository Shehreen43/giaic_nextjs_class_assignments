import Link from "next/link";

export default function Navbar() {
  return (
   
      <div className="bg-cyan-200 p-2 mb-0 border-b-4 border-cyan-800">
        <div className="flex flex-col space-y-2 justify-end md:flex-row md:space-x-5">
        <Link href="/">Home</Link> 
        <br />
        <Link href="/about"> About </Link>
        <br />
        <Link href="/contacts">Contact</Link>
        <br />
        <Link href="/jobs">Jobs</Link>
         <br />
        <Link href="/jobs/programming">Programming</Link>
        <br />
        <Link href="/jobs/programming/services">Services</Link>
        </div>
      </div>
     
     
  );
}
