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
    <div id="company" className="p-4 sm:p-10 md:p-20 pt-10 pb-12 text-[#fff2e1] overflow-hidden">
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-center text-[#3B2E22] font-semibold p-6">
        Companies That Trust Us
      </h2>
      <div className="relative flex gap-6 overflow-hidden w-full">
        <div ref={scrollRef} className="flex gap-6 whitespace-nowrap transition-transform duration-500 ease-linear">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex justify-center gap-12">
              <div className="h-32 aspect-[1/1] rounded-full p-2 ml-5">
              <img src="/logocom/logo00001.png" className="h-full object-contain" />
              </div>
              <div className="h-32 aspect-[1/1] rounded-full p-2">
              <img src="/logocom/logo00002.svg" className="h-full object-contain" />
              </div>
              <div className="h-32 aspect-[1/1] rounded-full p-2">
              <img src="/logocom/logo00003.webp" className="h-full scale-[1.2] object-contain" />
              </div>
              <div className="h-32 aspect-[1/1] rounded-full p-2">
              <img src="/logocom/logo00004.png" className="h-full  scale-[0.8] object-contain" />
              </div>
              <div className="h-32 aspect-[1/1] rounded-full p-2">
              <img src="/logocom/logo00005.png" className="h-full object-contain" />
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyTrustUs;
