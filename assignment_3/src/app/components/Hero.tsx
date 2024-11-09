import Image from "next/image";


export default function Hero() {
  return (
    <>
      <div className="w-[1920px] h-[829px] top-[92px] px-[220px] py-[140px] bg-[#043873] text-white flex items-center">
        <div className="w-[656px] h-[361px] gap-[60px]">
          <div className="h-[238px] gap-6">
            <h2 className="h-[154px] font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6">
              Get More Done with Whitepace
            </h2>
            <p className="w-[656px] h-[60px] font-normal text-lg leading-[30px] tracking-[-0.02em]">
              Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
            </p>
          </div>
          <div className="w-[219px] h-[63px] pt-5 gap-[10px] rounded-[8px] bg-[#4F9CF9] mt-20 ">
            <button className="w-[159px] h-[23px] text-[18px] font-medium leading-[23px] tracking-[-0.02em] flex justify-between items-center ml-7 ">
            Try Whitepace free
                <Image src="/Arrow.png" alt="arrow" width={10} height={10} className="" />
            </button>
          </div>
        </div>
        <div className='w-[824px] h-[549px] bg-[#C4DEFD]'></div>
      </div>
    </>
  );
}

