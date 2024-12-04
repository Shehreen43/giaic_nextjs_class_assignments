import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F0F0F0] w-full">
    <div className="max-w-screen-2xl mx-auto h-auto pb-12 px-6">
      {/* Subscription Section */}
      <div className="bg-black text-white relative -top-24 rounded-2xl p-6 md:p-12 max-w-screen-2xl mx-auto  flex flex-col md:flex-row justify-between items-center gap-6">
  <div className="text-center md:text-left">
    <h1 className="font-integral text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
      STAY UPTO DATE ABOUT OUR LATEST OFFERS
    </h1>
  </div>
  <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
    <div className="flex flex-col py-2 gap-2">
    <div className="bg-[#F0F0F0] text-black rounded-full gap-1 flex items-center px-4 py-2 w-full md:w-auto">
    <Image src="/Email.svg" alt="Email" width={24} height={24} />
      <input
        type="email"
        placeholder="Enter your email address"
        className="bg-transparent text-sm md:text-base w-full outline-none"
      />
    </div>
    <div className="bg-[#F0F0F0] rounded-full flex items-center px-4  py-2 w-full md:w-auto">
            <button className="w-full text-black text-sm sm:text-sm">Subscribe to Newsletter</button>
          </div>
     </div>
  </div>
</div>


      {/* Footer Content */}
      <div className="mt-12 w-full h-auto grid grid-cols-2 max-w-screen-2xl mx-auto md:grid-cols-3 lg:grid-cols-5 gap-8 ">
        {/* Shop Description */}
        <div>
          <Image src="/SHOP.png" alt="Shop Logo" width={158} height={22} />
          <p className="text-gray-600 text-sm mt-4 ">
            We have clothes that suit your style and which you’re proud to wear. From women to men.
          </p>
          <div className="flex items-center gap-4 mt-6">
            {["twitter", "facebook", "instagram", "github"].map((icon, index) => (
              <Link
                key={index}
                href="#"
                className="w-8 h-8 bg-gray-300 flex justify-center items-center rounded-full"
              >
                <img src={`/${icon}.svg`} alt={icon} />
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        {[
          {
            title: "Company",
            links: ["About", "Features", "Works", "Career"],
          },
          {
            title: "Help",
            links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"],
          },
          {
            title: "FAQ",
            links: ["Account", "Manage Deliveries", "Orders", "Payments"],
          },
          {
            title: "Resources",
            links: ["Free eBooks", "Development Tutorial", "How-to Blog", "YouTube Playlist"],
          },
        ].map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <Link href="#">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-[2px] bg-gray-400 opacity-50 mt-12"></div>

      {/* Bottom Section */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center ">
        <p className="text-sm text-gray-600 text-center md:text-left">
          Shop.co © 2000-2023, All Rights Reserved
        </p>
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          {["visa", "mastercard", "paypal", "apple-pay", "google-pay"].map((icon, index) => (
            <img key={index} src={`/${icon}.svg`} alt={icon} className="w-12 h-7" />
          ))}
        </div>
      </div>
    </div>
    </footer>
  );
};
