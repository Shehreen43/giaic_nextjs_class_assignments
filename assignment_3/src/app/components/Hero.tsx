import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="w-[1920px] h-[829px] top-[92px] px-[220px] py-[140px] bg-[#043873] text-white flex items-center">
        <div className="w-[656px] h-[361px] gap-[60px]">
          <div className="h-[238px] gap-6">
            <h2 className="h-[154px] font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6 hover:text-blue-300 hover:scale-110 transition duration-300">
              Get More Done with Whitepace
            </h2>
            <p className="w-[656px] h-[60px] font-normal text-lg leading-[30px] tracking-[-0.02em] hover:text-[#FFE492]">
              Project management software that enables your teams to
              collaborate, plan, analyze, and manage everyday tasks.
            </p>
          </div>
          <div className="w-[219px] h-[63px] pt-5 gap-[10px] rounded-[8px] bg-[#4F9CF9] mt-20 hover:scale-110 transition duration-300">
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
        <div className="w-[824px] h-[549px] bg-[#C4DEFD] shadow-[0px_13px_19px_#00000012] hover:shadow-blue-300 hover:scale-110 transition duration-300"></div>
      </div>

      {/*-------------------------------- Work Managements---------------------- */}

      <div className="w-[1920px] h-[1588px] absolut top-[921px] left-[1px] px-[220px] py-[140px] gap-[100px]">
        <div className="w-[1480px] h-[547px] gap-[60px] flex items-center">
          <div className="w-[672px] h-[411px] gap-[60px]">
            <div className="w-[672px] h-[288px] gap-6">
              <h1 className="text-[#212529] w-[672px] h-[174px] gap-0 text-[72px] font-bold leading-[87.14px] tracking-[-0.02em] text-left hover:text-blue-300 hover:scale-110 transition duration-300">
                Project Management
              </h1>
              <p className="text-[#212529] w-[672px] h-[90px] text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-left mt-6 hover:text-[#FFE492]">
                Images, videos, PDFs and audio files are supported. Create math
                expressions and diagrams directly from the app. Take photos with
                the mobile app and save them to a note.
              </p>
            </div>
            <div className="w-[201px] h-[63px] p-[20px_40px] gap-[10px] rounded-[6px] bg-[#4F9CF9] mt-20 hover:scale-110 transition duration-300">
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
          <div className="w-[748px] h-[547px] bg-[#C4DEFD] shadow-[0px_13px_19px_#00000012] hover:shadow-blue-300 hover:scale-110 transition duration-300"></div>
        </div>

        {/* ----------------------------    Work Together  ------------------------------------------------- */}

        <div className="w-[1480px] h-[661px] flex items-center mt-[100px] gap-[100px]">
          <div className="w-[710px] h-[661px] hover:shadow-blue-300 hover:scale-110 transition duration-300">
            <Image
              src="/Work Together Image.png"
              alt="Work Together Image"
              width={710}
              height={661}
            />
          </div>

          <div className="w-[670px] h-[294px] gap-[60px]">
            <div className="w-[670px] h-[171px] gap-[24px] left-[961px]">
              <h1 className="text-[#212529] gap-0 w-[670px] h-[87px] text-[72px] font-bold leading-[87.14px] tracking-[-0.02em] text-left hover:text-blue-300 hover:scale-110 transition duration-300">
                Work together
              </h1>
              <p className="text-[#212529] w-[670px] h-[60px] gap-0 text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-left hover:text-[#FFE492]">
                With whitepace, share your notes with your colleagues and
                collaborate on them. You can also publish a note to the internet
                and share the URL with others.
              </p>
            </div>
            <button className="bg-[#4F9CF9] w-[186px] h-[63px] p-[20px_40px] gap-[10px] rounded-[6px] mt-16 hover:scale-110 transition duration-300">
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

      {/* --------------------------- Customise (use as extension) ---------------------------------*/}

      <div className="w-[1921px] h-[759px] top-[2509px] px-[220px] py-[140px] bg-[#043873] gap-[98px] text-white flex items-center">
        <div className="w-[697px] h-[294px] gap-[60px]">
          <div className="w-[697px] h-[171px] gap-6">
            <h1 className="w-[697px] h-[87px] font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] mb-6 hover:text-blue-300 hover:scale-110 transition duration-300">
              Use as Extension
            </h1>
            <p className="w-[697px] h-[60px] font-normal text-lg leading-[30px] tracking-[-0.02em] hover:text-[#FFE492]">
              Use the web clipper extension, available on Chrome and Firefox, to
              save web pages or take screenshots as notes.
            </p>
          </div>
          <div className="w-[171px] h-[63px] pt-5 gap-[10px] rounded-[6px] bg-[#4F9CF9] mt-20 hover:scale-110 transition duration-300">
            <button className="w-[85px] h-[23px] text-[18px] font-medium leading-[23px] tracking-[-0.02em] inline-flex justify-between items-center ml-10 ">
              Let’s Go
              <Image
                src="/Arrow.png"
                alt="arrow"
                width={14}
                height={14}
                className=" justify-between items-center"
              />
            </button>
          </div>
        </div>
        <div className="w-[686px] h-[479px] gap-1 bg-[#C4DEFD] shadow-[0px_13px_19px_#00000012] hover:shadow-blue-300 hover:scale-110 transition duration-300"></div>
      </div>

      {/* ----------------------------    Customise it (to your need) ------------------------------------------------- */}

      <div className="w-[1921px] h-[812.09px] top-[3268px] py-[140px] px-[220px] flex items-center gap-[98px]">
        <div className="w-[714px] h-[532px] gap-1 bg-[#C4DEFD] shadow-[0px_13px_19px_#00000012] hover:shadow-blue-300 hover:scale-110 transition duration-300"></div>

        <div className="w-[669px] h-[411px] gap-[60px]">
          <div className="w-[669px] h-[288px] gap-[24px]">
            <h1 className="text-[#212529] gap-0 w-[669px] h-[174px] text-[72px] font-bold leading-[87.14px] tracking-[-0.02em] text-left mb-6 hover:text-blue-300 hover:scale-110 transition duration-300 ">
              Customise it to your needs
            </h1>
            <p className="text-[#212529] w-[669px] h-[90px] gap-0 text-[18px] font-normal leading-[30px] tracking-[-0.02em] text-left hover:text-[#FFE492]">
              Customise the app with plugins, custom themes and multiple text
              editors (Rich Text or Markdown). Or create your own scripts and
              plugins using the Extension API.
            </p>
          </div>
          <button className="bg-[#4F9CF9] w-[171px] h-[63px] gap-[10px] p-[20px_40px] rounded-[8px] mt-16 hover:scale-110 transition duration-300">
            <p className="text-white w-[77px] h-[23px] text-[18px] font-medium leading-[23px] tracking-[-0.02em] text-left inline-flex justify-between items-center">
              Try it now
            </p>
            <Image
              src="/Arrow.png"
              alt="arrow"
              width={14}
              height={14}
              className="inline-flex justify-between items-center gap-1"
            />
          </button>
        </div>
      </div>

      {/* --------------------  Your Work -------------------------------- */}

      <div className="w-full h-[574px] flex justify-center items-center bg-[#043873] text-white">
        <div className="w-[1481px] flex flex-col items-center text-center gap-[60px]">
          <div className="w-[1064px] flex flex-col gap-6 items-center">
            <h1 className="font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] mb-6 hover:text-blue-300 hover:scale-110 transition duration-300">
              Your work, everywhere you are
            </h1>
            <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] hover:text-[#FFE492]">
              Access your notes from your computer, phone, or tablet by
              synchronizing with various services, including whitepace, Dropbox,
              and OneDrive. The app is available on Windows, macOS, Linux,
              Android, and iOS. A terminal app is also available!
            </p>
          </div>
          <div className="w-[195px] h-[63px] flex justify-center items-center rounded-[8px] bg-[#4F9CF9] mt-6 hover:scale-110 transition duration-300">
            <button className="flex items-center text-[18px] font-medium leading-[23px]">
              Let’s Go
              <Image
                src="/Arrow.png"
                alt="arrow"
                width={14}
                height={14}
                className="ml-1"
              />
            </button>
          </div>
        </div>
      </div>

      {/* --------------------------- Our Sponsors ---------------------------- */}

      <div className="w-full h-[538px] top-[4654px] py-[140px] px-[220px] gap-[100px] flex flex-col justify-center">
        <h1 className="text-[#212529] w-[1482px] h-[87px] font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] items-center text-center hover:text-blue-300 hover:scale-110 transition duration-300 ">
        Our sponsors
        </h1>

        <div className="w-[1482px] h-[71px] flex flex-row justify-between">
          <div className="w-[55.47px] h-[68px] gap-1 hover:scale-110 transition duration-300">
           <Image
                src="/Apple.png"
                alt="Apple Logo"
                width={55.47}
                height={68}
              />
          </div>
          <div className="w-[287pxpx] h-[62px] gap-1 hover:scale-110 transition duration-300">
           <Image
                src="/Microsoft.png"
                alt="Microsoft Logo"
                width={287}
                height={62}
              />
          </div>
           
          <div className="w-[280px] h-[71px] gap-1 hover:scale-110 transition duration-300">
           <Image
                src="/Slack_Technologies_Logo.png"
                alt="Slack Technologies Logo"
                width={280}
                height={71}
              />
          </div>
          <div className="w-[211px] h-[69.81px] gap-1 hover:scale-110 transition duration-300">
           <Image
                src="/Google.png"
                alt="Google Logo"
                width={211}
                height={69.81}
              />
          </div>
        </div>
     </div>

    </>
  );
}
