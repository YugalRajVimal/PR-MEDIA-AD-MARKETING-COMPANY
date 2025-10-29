import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ClaimPage = () => {
  return (
    <div className="bg-[#dbc3ab] md:bg-[#f7dbb6] h-screen w-screen">
      <div className="relative backdrop-blur-sm z-[30] gap-10 h-full flex flex-col justify-center items-center">
        {/* Logo Image - Making sure it's on top */}
        <div
          className="relative h-[120px] md:h-[280px] w-full overflow-hidden flex justify-center items-center"
        >
          <img
            src="logo2.svg"
            className="h-[170%] w-[70vw] md:w-full object-cover md:object-contain"
          />
        </div>

        <p className="text-center text-2xl md:text-3xl  font-medio font-bold text-[#3B2E22] mt-14">
          Hi Author 🙂 <br />
          Welcome to The PR Media!
        </p>

        <a
          href={`http://wa.me/+917500030415?text=Hi%2C%20want%20to%20know%20more`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center  w-fit justify-center  mx-2 gap-2 bg-[#1DA851] hover:bg-[#25D366]  text-white py-1 md:py-4 px-6 rounded-full font-semibold transition-colors duration-200 cursor-pointer"
        >
          <FaWhatsapp className="text-2xl" />
          <span className="text-sm text-semibold text-white text-center font-serif">

            Claim your E-Book Publishing package on WhatsApp!
          </span>
        </a>
      </div>
    </div>
  );
};

export default ClaimPage;
