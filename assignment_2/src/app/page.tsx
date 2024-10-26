
export default function Home() {
  return (
    <div className="bg-[#1C1C3A] min-h-screen p-6 text-white flex flex-col items-center">
      {/* Header */}
      <header className="flex justify-between items-center mb-6 w-full max-w-[1046px]">
        <div className="text-2xl font-bold">BrandName</div>
        <nav className="flex space-x-6">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#" className="hover:text-blue-400">Product</a>
          <a href="#" className="hover:text-blue-400">Pricing</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
        </nav>
        <div className="text-sm text-right">
          <a href="#">Login</a>
        </div>
        <button className="bg-blue-500 px-4 py-2 rounded-lg font-montserrat text-[14px] font-bold leading-[22px] tracking-[0.2px]">
          JOIN US
        </button>
      </header>

      {/* Main Section */}
      <main className="text-center mb-12 w-full max-w-[699px]">
        <div className="py-8">
          <h5 className="text-blue-500 font-montserrat">Welcome</h5>
          <h1 className="font-montserrat text-[58px] font-bold">Selling on the internet like a pro</h1>
          <p className="mt-4 text-[20px] leading-[30px] tracking-[0.2px]">
            We know how large objects will act, but things on a small scale just do not act that way.
          </p>
          <div className="mt-6 space-x-4">
            <button className="bg-blue-500 px-4 py-2 rounded-lg">Get Quote Now</button>
            <button className="border border-blue-500 px-4 py-2 rounded-lg">Learn More</button>
          </div>
        </div>
      </main>

      {/* Course Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto place-items-center w-full max-w-[1046px]">
        <div className="bg-white text-black p-4 rounded-lg w-[328px] h-[292px] py-[35px] px-[40px] gap-5 shadow-[0px_13px_19px_#00000012]">
          <div className="bg-pink-200 w-[70px] h-[76px] py-[22px] px-[19px] rounded-tl-[10px]"></div>
          <h3 className="font-montserrat text-[16px] font-bold leading-[24px] text-[#252B42] mb-2">Training Courses</h3>
          <div className="w-[50px] h-[2px] bg-[#E74040] mb-3"></div>
          <p className="text-sm text-gray-600 w-[222px] h-[60px] font-montserrat text-[14px] leading-[20px]">
            The gradual accumulation of information about atomic and small-scale behaviour...
          </p>
        </div>
        <div className="bg-white text-black p-4 rounded-lg w-[328px] h-[292px] py-[35px] px-[40px] gap-5 shadow-[0px_13px_19px_#00000012]">
          <div className="bg-green-200 w-[70px] h-[76px] py-[22px] px-[19px] rounded-tl-[10px]"></div>
          <h3 className="font-montserrat text-[16px] font-bold leading-[24px] text-[#252B42] mb-2">2,769 Online Courses</h3>
          <div className="w-[50px] h-[2px] bg-[#E74040] mb-3"></div>
          <p className="text-sm text-gray-600 w-[222px] h-[60px] font-montserrat text-[14px] leading-[20px]">
            The gradual accumulation of information about atomic and small-scale behaviour...
          </p>
        </div>
        <div className="bg-[#23A6F0] text-white p-4 rounded-lg w-[328px] h-[292px] py-[35px] px-[40px] gap-5 shadow-[0px_13px_19px_#00000012]">
          <div className="bg-white w-[70px] h-[76px] py-[22px] px-[19px] rounded-tl-[10px]"></div>
          <h3 className="font-montserrat text-[16px] font-bold leading-[24px] mb-2">Training Courses</h3>
          <div className="w-[50px] h-[2px] bg-white mb-3"></div>
          <p className="text-sm w-[222px] h-[60px] font-montserrat text-[14px] leading-[20px]">
            The gradual accumulation of information about atomic and small-scale behaviour...
          </p>
        </div>
      </section>
    </div>
  );
}
