import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  return (
    <section className="p-4 sm:p-10 md:px-20 md:py-0 text-[#3B2E22]">
      <div className="max-w-6xl mx-auto h-full flex flex-col justify-evenly items-center">
        {/* Image Section
        <div className="w-full h-[500px] md:w-1/2 flex justify-center items-center">
          <img
            src="/LandingPage/AboutUs/AboutUsImages.jpeg"
            alt="About Us"
            className="w-full h-[80%] rounded-xl shadow-xl object-cover"
          />
        </div> */}

        {/* Text Section */}
        <div className="w-full text-center md:text-left">
          {/* <h2 className="text-2xl font-bold mb-4">Our Philosophy</h2> */}
          <p
            className="text-lg leading-relaxed  text-black text-center"
          >
            "Emotions sell, not just ads. AI Ads and Premium Videos Catch Eyes,
            But storytelling Captures Hearts, Make your brand unforgettable"
          </p>

          {/* <button className="mt-6 px-6 py-3 bg-[#4E3C2C] text-[#fff2e1] rounded-lg shadow-lg hover:bg-[#3B2E22] transition-transform transform hover:scale-105">
            Learn More
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
