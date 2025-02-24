import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Card1 = () => {
  return (
    <section className="   p-4 sm:p-10 md:p-20 bg-[291f12]">
      <div className=" w-full h-full flex flex-col md:flex-row items-center gap-12">
        {/* Image Section
        <div className="w-full h-[500px] md:w-1/2 flex justify-center items-center">
          <img
            src="/LandingPage/AboutUs/AboutUsImages.jpeg"
            alt="About Us"
            className="w-full h-[80%] rounded-xl shadow-xl object-cover"
          />
        </div> */}

        {/* Text Section */}
        <div className="w-full text-center md:text-left  py-10 md:py-20 rounded-xl flex gap-2  md:gap-6  justify-evenly items-center border border-black border-[2px]">
          <a href="#testimonials" className=" w-1/2 md:w-auto">
            <button className="px-3 md:px-10 py-3 w-fit  my-auto bg-black text-[#fff2e1] rounded-full shadow-lg hover:bg-[#3B2E22] transition-transform transform hover:scale-105 whitespace-nowrap">
              Testimonials
            </button>
          </a>
          <a href="#services" className=" w-1/2 md:w-auto">
            <button className="px-3 md:px-10 py-3 w-fit  my-auto bg-black text-[#fff2e1] rounded-full shadow-lg hover:bg-[#3B2E22] transition-transform transform hover:scale-105 whitespace-nowrap">
              Our Experties
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Card1;
