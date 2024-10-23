export default async function AboutPage() {
    await new Promise((resolve) => {
        setTimeout(resolve, 7000)
    });
    return (
         <section
         id="about"
         className="py-12 bg-gradient-to-r from-cyan-400 to-gray-800 h-screen pt-24 flex justify-center items-center"
       >
         <div>
           <h1 className=" text-cyan-500 text-[5vw] text-2xl font-bold text-center p-2 hover:text-cyan-200 hover:scale-110 transition duration-200">About Page</h1>
           <p className="text-gray-300 text-center text-[2vw] mt-4 p-2">This is the about page.</p>
         </div>
       </section>
    )
 }
