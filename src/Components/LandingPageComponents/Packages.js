import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Packages = () => {
  const buttonsRef = useRef([]);

  // Vibrate animation in X & Y axes
  const vibrateButton = (btn) => {
    gsap.fromTo(
      btn,
      { y: -5 }, // Start position (slightly offset)
      {
        y: 5,
        duration: 0.1,
        repeat: 6, // 3 full cycles (back & forth)
        yoyo: true,
        ease: "power2.inOut",
      }
    );
  };

  return (
    <section className="p-4 sm:p-10 md:p-20 bg-[#dbc3ab]">
      <div className=" h-full flex flex-col justify-evenly items-center gap-10 p-10 bg-black text-[#fff2e1] rounded-xl">
        <h2 className="text-4xl font-semibold">Packages</h2>

        {/* Buttons Section */}
        <div className="w-full text-center md:text-left py-2 rounded-xl flex gap-2 sm:gap-4  md:gap-8 justify-evenly items-center">
          {["4.99 Crore", "99 Lakh", "9 Lakh"].map((price, index) => (
            <a href={`/package${index + 1}`} className="w-full md:w-auto">
              <button
                key={index}
                ref={(el) => (buttonsRef.current[index] = el)}
                className="p-2 md:px-10 py-1 md:py-3 my-auto w-fit bg-black text-[#fff2e1] rounded-full shadow-lg hover:bg-[#3B2E22] border border-white border-[2px] transition-transform transform hover:scale-105 whitespace-nowrap"
                onMouseEnter={() => vibrateButton(buttonsRef.current[index])}
                onClick={() => vibrateButton(buttonsRef.current[index])}
              >
                {price}
              </button>
            </a>
          ))}
        </div>

        <div class="text-center font-bold text-lg md:text-xl ">
          <span class="   text-[#FFC300]">
            Click on any price to see the value in each package!
          </span>
        </div>
      </div>
    </section>
  );
};

export default Packages;
