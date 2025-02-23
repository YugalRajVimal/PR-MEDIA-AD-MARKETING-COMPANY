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
        ease: "power2.out" // Smooth deceleration
      }
    );
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-4 px-2 text-center">
      <div ref={marqueeRef} className="inline-block text-black w-full">
        <span className="text-xl md:text-3xl lg:text-4xl font-bold">
          The PR Media - Luxury PR & Marketing Company
        </span>
      </div>
    </div>
  );
};

export default Headline;
