import React from "react";

const Headline = () => {
  return (
    <div className="relative w-full overflow-hidden py-4 px-2 text-center">
      {/* Background Image */}
      {/* <div className="absolute inset-0 flex justify-center items-center z-[10]">
        <img src="banner.png" className="h-full w-full object-cover" />
      </div> */}
      <div className="relative backdrop-blur-sm z-[30]">
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
