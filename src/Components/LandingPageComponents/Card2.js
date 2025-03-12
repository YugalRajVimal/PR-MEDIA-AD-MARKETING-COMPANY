import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const Card2 = () => {
  return (
    <section className="  px-4 sm:px-10 md:px-20  ">
      <div className=" mx-auto max-w-[620px]  flex flex-col md:flex-row items-center gap-12 ">
        {/* Text Section */}
        <div className="relative w-full text-center bg-[#3B2E22] md:text-left m-4 py-20 px-4 md:px-2 rounded-xl flex justify-evenly items-center shadow-[0_10px_30px_rgba(0,0,0,0.7)]">
          <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 drop-shadow-md shadow-yellow-400">
            Speak to our team today, plus schedule your free audit call today.
          </p>
          <div className="absolute w-full bottom-4 right-4 text-3xl h-[30px] text-right space-x-1 ">
            <span className="absolute top-1/2 -translate-y-1/2 right-[38px]">
              <a href="mailto:info@theprmedia.com">
                <img
                  src="mailIcon.png"
                  className="h-[30px] object-contain inline-block "
                />
              </a>
            </span>
            <span className="absolute top-1/2 -translate-y-1/2 right-0 text-[#2cb317] inline-block">
              <a href="https://wa.me/+917500010933">
                <FaWhatsapp />
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card2;
