import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Headline = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    gsap.to(marqueeRef.current, {
      xPercent: -50, // Moves exactly half the width of the text container
      duration: 22, // Smooth speed adjustment
      ease: "linear",
      repeat: -1
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden border border-black border-t-0 py-4 px-2 font-mono whitespace-nowrap">
      <div ref={marqueeRef} className="flex w-max text-[#FFC300]">
        <span className="text-2xl md:text-4xl pr-6">
          The PR Media - Luxury PR & Marketing Company •
        </span>
        <span className="text-2xl md:text-4xl pr-6">
          The PR Media - Luxury PR & Marketing Company •
        </span>
        <span className="text-2xl md:text-4xl pr-6">
          The PR Media - Luxury PR & Marketing Company •
        </span>
        <span className="text-2xl md:text-4xl pr-6">
          The PR Media - Luxury PR & Marketing Company •
        </span>
      </div>
    </div>
  );
};

export default Headline;
