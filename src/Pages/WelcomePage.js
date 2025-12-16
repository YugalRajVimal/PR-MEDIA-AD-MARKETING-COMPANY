import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WelcomePage = () => {
  return (
    <div className="bg-[#dbc3ab] md:bg-[#f7dbb6] h-screen w-screen pt-10">
      <div className="relative h-full backdrop-blur-sm z-[30] gap-10 h-full flex flex-col justify-between items-center">
        {/* Logo Image - Making sure it's on top */}
        <div
          className="relative h-[120px]  md:h-[280px] w-full overflow-hidden flex justify-center items-center"
        >
          <img
            src="logo2.svg"
            className="h-[170%] w-[65vw] md:w-full object-cover md:object-contain"
          />
        </div>

        <div className="h-full">
        <div className="text-center mt-14 text-[#3B2E22] px-4">
          <p className="text-2xl md:text-3xl font-medio font-bold mb-4">
            A lot of Authors have been requesting this opportunity —<br className="hidden md:block" />
            So today, we’re opening a special <span className="whitespace-nowrap">24-hour</span> offer for you.
          </p>
          <p className="text-xl md:text-2xl font-medio font-bold mb-3">
            <span className="inline-block mr-2">⭐</span>
            Make your book an Amazon #1 Bestseller for only <br/> <span className="text-[#d22d2d]">₹7,950</span> (instead of ₹18,000)
          </p>
          <p className="text-lg md:text-xl font-medio font-semibold mb-2">
            We’d love to see your book hit the #1 spot <span className="inline-block">🚀</span>
          </p>
          <p className="text-lg md:text-xl font-medio">
            Let us know if you’d like to avail this limited-time offer.
          </p>
        </div>

        <a
          href={`http://wa.me/+917500030415?text=Hi%2C%20I%20want%20to%20avail%20this%20offer!`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-fit justify-center mx-2 mt-6 gap-2 bg-[#1DA851] hover:bg-[#25D366] text-white py-6 px-2 rounded-full font-semibold  transition-colors duration-200 cursor-pointer"
        >
          <FaWhatsapp className="text-2xl" />
          <span className="text-sm text-semibold text-white text-center font-serif">
            Claim Your Bestseller Package on WhatsApp!
          </span>
        </a>
        </div>

      
      </div>
    </div>
  );
};

export default WelcomePage;

