import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Headline = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      marqueeRef.current,
      { x: "100%" }, // Start from the right edge
      {
        x: "0", // Stop at the center
        duration: 8, // Adjust speed
        ease: "power2.out", // Smooth deceleration
      }
    );
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-4 px-2 text-center">
      {/* Background Image */}
      {/* <div className="absolute inset-0 flex justify-center items-center z-[10]">
        <img src="banner.png" className="h-full w-full object-cover" />
      </div> */}
      <div className="relative backdrop-blur-sm z-[30]">
        {/* Marquee Text - Ensuring it appears above the image */}
        <div ref={marqueeRef} className="relative text-[#3B2E22] w-full  ">
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
            {/* PR <span className="font-serif font-light">&</span> Marketing
             */}
             Earn online, the right way
          </span>
        </div>

        {/* Logo Image - Making sure it's on top */}
        <div className="relative h-[120px] md:h-[280px] w-full overflow-hidden flex justify-center items-center mt-6">
          <img
            src="logo2.svg"
            className="h-[160%] md:h-[170%] w-[70%] md:w-full object-cover md:object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Headline;
