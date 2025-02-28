import React, { useEffect, useRef } from "react";

const CompanyTrustUs = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += 1;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;
      }
    };

    const interval = setInterval(scroll, 30); // Adjust speed by changing the interval time
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="testimonials" className="p-4 sm:p-10 md:p-20 pt-20 text-[#fff2e1] overflow-hidden">
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-center text-[#3B2E22] font-semibold p-6">
        Companies That Trust Us
      </h2>
      <div className="relative flex gap-6 overflow-hidden w-full">
        <div ref={scrollRef} className="flex gap-6 whitespace-nowrap transition-transform duration-500 ease-linear">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex justify-center gap-12">
              <div className="h-24 aspect-[1/1] rounded-full bg-[#3B2E22] p-2 ml-5">A</div>
              <div className="h-24 aspect-[1/1] rounded-full bg-[#3B2E22] p-2"></div>
              <div className="h-24 aspect-[1/1] rounded-full bg-[#3B2E22] p-2"></div>
              <div className="h-24 aspect-[1/1] rounded-full bg-[#3B2E22] p-2"></div>
              <div className="h-24 aspect-[1/1] rounded-full bg-[#3B2E22] p-2"></div>
              <div className="h-24 aspect-[1/1] rounded-full bg-[#3B2E22] p-2">Z</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyTrustUs;
