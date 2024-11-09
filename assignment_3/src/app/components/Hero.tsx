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
              Project management software that enables your teams to
              collaborate, plan, analyze, and manage everyday tasks.
            </p>
          </div>
          <div className="w-[219px] h-[63px] pt-5 gap-[10px] rounded-[8px] bg-[#4F9CF9] mt-20 ">
            <button className="w-[159px] h-[23px] text-[18px] font-medium leading-[23px] tracking-[-0.02em] flex justify-between items-center ml-7 ">
              Try Whitepace free
              <Image
                src="/Arrow.png"
                alt="arrow"
                width={10}
                height={10}
                className=""
              />
            </button>
          </div>
        </div>
        <div className="w-[824px] h-[549px] bg-[#C4DEFD]"></div>
      </div>

      {/*-------------------------------- Work Managements---------------------- */}

      <div className="w-[1920px] h-[1588px] absolut top-[921px] left-[1px] px-[220px] py-[140px] gap-[100px]">
        <div className="w-[1480px] h-[547px] gap-[60px] flex items-center">
          <div className="w-[672px] h-[411px] gap-[60px]">
            <div className="w-[672px] h-[288px] gap-6">
              <h1 className="text-[#212529] w-[672px] h-[174px] gap-0 text-[72px] font-bold leading-[87.14px] tracking-[-0.02em] text-left">
                Project Management
              </h1>
              <p className="text-[#212529] w-[672px] h-[90px] text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-left mt-6">
                Images, videos, PDFs and audio files are supported. Create math
                expressions and diagrams directly from the app. Take photos with
                the mobile app and save them to a note.
              </p>
            </div>
            <div className="w-[201px] h-[63px] p-[20px_40px] gap-[10px] rounded-[6px] bg-[#4F9CF9] mt-20">
              <button className="text-white w-[97px] h-[23px] text-[18px] font-medium leading-[23px] tracking-[-0.02em] inline-flex justify-between items-center ">
                Get Started
              </button>
              <Image
                src="/Arrow.png"
                alt="arrow"
                width={14}
                height={14}
                className="inline-flex justify-between items-center"
              />
            </div>
          </div>
          <div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
        </div>

        {/* ----------------------------    Work Together  ------------------------------------------------- */}

        <div className="w-[1480px] h-[661px] flex items-center mt-[100px] gap-[100px]">
          <div className="w-[710px] h-[661px] ">
            <Image
              src="/Work Together Image.png"
              alt="Work Together Image"
              width={710}
              height={661}
            />
          </div>

          <div className="w-[670px] h-[294px] gap-[60px]">
            <div className="w-[670px] h-[171px] gap-[24px] left-[961px]">
              <h1 className="text-[#212529] gap-0 w-[670px] h-[87px] text-[72px] font-bold leading-[87.14px] tracking-[-0.02em] text-left">
                Work together
              </h1>
              <p className="text-[#212529] w-[670px] h-[60px] gap-0 text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-left">
                With whitepace, share your notes with your colleagues and
                collaborate on them. You can also publish a note to the internet
                and share the URL with others.
              </p>
            </div>
            <button className="bg-[#4F9CF9] w-[186px] h-[63px] p-[20px_40px] gap-[10px] rounded-[6px] mt-16">
              <p className="text-white w-[82px] h-[23px] gap-0 text-[18px] font-medium leading-[23px] tracking-[-0.02em] text-left inline-flex justify-between items-center">
                Try it now
              </p>
              <Image
              src="/Arrow.png"
              alt="arrow"
              width={14}
              height={14}
              className="inline-flex justify-between items-center left-[7px]"
            />
            </button>
           
          </div>
        </div>
      </div>
    </>
  );
}
