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
           <h1 className=" text-white text-2xl font-bold text-center p-2 hover:text-cyan-200 transition duration-200">About Page</h1>
           <p className="text-center p-2">This is the about page.</p>
         </div>
       </section>
    )
 }
