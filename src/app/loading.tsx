// export default async function LoadingPage() {
//     await new Promise((resolve) => {
//         setTimeout(resolve, 5000)
//     })
//     return (
//         <div>
//            <h1>Loading...</h1 >
//         </div>
//     )
// };
import React from "react";

export default async function LoadingPage() {
    await new Promise((resolve) => {
        setTimeout(resolve, 5000)
    })
  return (
    <section className="flex flex-col justify-center items-center min-h-screen bg-[#042] animate-bg-animation">
      <div className="relative w-5 h-32">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            style={{ "--i": i + 1 } as React.CSSProperties}
            className="absolute top-0 left-0 w-0 h-full rotate-[calc(18deg_*_var(--i))]"
          >
            <span className="absolute top-0 left-0 w-[15px] h-[15px] rounded-full bg-[#00ff0a] shadow-[0_0_10px_#00ff0a,0_0_20px_#00ff0a,0_0_40px_#00ff0a,0_0_60px_#00ff0a,0_0_80px_#00ff0a,0_0_100px_#00ff0a] animate-circle-animation"></span>
          </span>
        ))}
      </div>
      <p className="mt-6 text-[#00ff0a] font-bold text-xl animate-fade">Loading Your Page</p>
      <p className="mt-2 text-[#00ff0a] text-base opacity-80 animate-fade">Please wait a moment while we prepare your page.</p>
    </section>
  );
}
