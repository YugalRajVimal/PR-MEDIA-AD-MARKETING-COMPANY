import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  return (
    <section className="p-4 sm:p-10 md:p-20 bg-white h-[40vh] md:h-[50vh] text-[#0B0B45]">
      <div className="max-w-6xl mx-auto h-full flex flex-col md:flex-row justify-center items-center gap-12">
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
          <h2 className="text-3xl font-bold mb-4">Our Philosophy</h2>
          <p className="text-xl leading-relaxed">
            Emotions sells, not Just ads. AI Ads and Premium Videos Catch Eyes,
            But story telling Capture Hearts, Make your brand unforgettable.
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
