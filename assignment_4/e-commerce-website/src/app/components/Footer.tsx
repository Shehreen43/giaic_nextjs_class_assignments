import Image from "next/image";

export default function Footer() {
  return (
    <div className="absolute w-[1441px] h-[499px] top-[3871px] left-[-1px] gap-0 bg-[#F0F0F0] grid grid-cols-5">

      <div className="bg-black text-white top-[-90px]  w-[1240px] h-[180px] absolute  left-[100px] p-[36px_64px] gap-0 rounded-[20px]  flex justify-between">
        <div className="w-[551px] h-[94px] gap-0 font-integral text-[40px] font-bold leading-[45px] text-left">
          <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
        </div>

        <div className="w-[349px] h-[104px] gap-[14px] grid grid-rows-2">
          <div className="w-[349px] h-[48px] p-[12px_16px] gap-[12px] rounded-[62px] bg-[#F0F0F0] flex text-left">
            <Image
              src="/Email.svg"
              alt="Star"
              width={24}
              height={24}
              className=""
            />
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-[#F0F0F0] font-[Satoshi] text-[16px] font-normal leading-[21.6px] text-left"
            />
          </div>
          <div className="w-[349px] h-[48px] p-[12px_16px] gap-[12px] rounded-[62px] bg-[#F0F0F0] text-center ">
            <input
              type="email"
              placeholder="Subscribe to Newsletter"
              className="bg-[#F0F0F0] placeholder-black font-[Satoshi] text-[16px] font-normal leading-[21.6px] "
            />
          </div>
        </div>
      </div>

      <div className="absolute w-[1240px] h-[177px] top-[150px] left-[100px] gap-0 flex justify-between">
        <div className="w-[248px] h-[177px] flex flex-row gap-[35px]">
          <div className="absolute w-[167px] h-[23px] gap-0  text-left">
            <Image src="/SHOP.png" alt="" height={22} width={158} />
          </div>
          <p className="font-[Satoshi] opacity-60 mt-10 gap-0 text-[14px] font-normal leading-[22px] text-left">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>

          <div className="absolute flex items-center gap-2 top-[150px]">
          <div className="relative group">
    <span className="material-icons text-2xl cursor-pointer">
    <a href="#" className="w-8 h-8 bg-gray-300 flex justify-center items-center rounded-full">
    <img src="/twitter.svg" alt="Twitter" /></a>
    </span>
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex items-center justify-center px-2 py-1 bg-gray-800 text-white text-sm rounded">
      Twitter
    </div>
  </div>

    <div className="relative group">
    <span className="material-icons text-2xl cursor-pointer">
    <a href="#"className="w-8 h-8 bg-gray-300 flex justify-center items-center rounded-full">
    <img src="/facebook.svg" alt="Facebook" /></a>
    </span>
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex items-center justify-center px-2 py-1 bg-gray-800 text-white text-sm rounded">
      Facebook
    </div>
  </div>
              
  <div className="relative group">
    <span className="material-icons text-2xl cursor-pointer">
    <a href="#" className="w-8 h-8 bg-gray-300 flex justify-center items-center rounded-full">
    <img src="/instagram.svg" alt="Instagram" /></a>
    </span>
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex items-center justify-center px-2 py-1 bg-gray-800 text-white text-sm rounded">
      Instagram
    </div>


  </div>
  <div className="relative group">
    <span className="material-icons text-2xl cursor-pointer">
    <a href="#" className="w-8 h-8 bg-gray-300 flex justify-center items-center rounded-full">
    <img src="/github.svg" alt="GitHub" /></a>
    </span>
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex items-center justify-center px-2 py-1 bg-gray-800 text-white text-sm rounded">
      Github
    </div>
  </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Company
            </h3>
            <ul className="space-y-2 opacity-60">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Works</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Help</h3>
            <ul className="space-y-2 opacity-60">
              <li>
                <a href="#">Customer Support</a>
              </li>
              <li>
                <a href="#">Delivery Details</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">FAQ</h3>
            <ul className="space-y-2 opacity-60">
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Manage Deliveries</a>
              </li>
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Payments</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Resources
            </h3>
            <ul className="space-y-2 opacity-60">
              <li>
                <a href="#">Free eBooks</a>
              </li>
              <li>
                <a href="#">Development Tutorial</a>
              </li>
              <li>
                <a href="#">How-to Blog</a>
              </li>
              <li>
                <a href="#">YouTube Playlist</a>
              </li>
            </ul>
          </div>
        </div>

         {/* Bottom Section */}
      <div className="absolute top-[368px] mt-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <img src="/visa.svg" alt="Visa" className="h-6" />
          <img src="/mastercard.svg" alt="MasterCard" className="h-6" />
          <img src="/paypal.svg" alt="PayPal" className="h-6" />
          <img src="/apple-pay.svg" alt="Apple Pay" className="h-6" />
          <img src="/google-pay.svg" alt="Google Pay" className="h-6" />
        </div>
      </div>
      </div>
   
  );
}
