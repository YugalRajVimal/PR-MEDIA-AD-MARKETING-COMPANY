// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger);

// const Card1 = () => {
//   return (
//     // <section className="   p-4 sm:p-10 md:p-20">
//     //   <div className=" w-full h-full flex flex-col md:flex-row items-center gap-12">
//     //     {/* Image Section
//     //     <div className="w-full h-[500px] md:w-1/2 flex justify-center items-center">
//     //       <img
//     //         src="/LandingPage/AboutUs/AboutUsImages.jpeg"
//     //         alt="About Us"
//     //         className="w-full h-[80%] rounded-xl shadow-xl object-cover"
//     //       />
//     //     </div> */}

//     //     {/* Text Section */}
//     //     <div className="w-full text-center md:text-left  py-10 md:py-20 rounded-xl flex gap-2  md:gap-6  justify-evenly items-center border border-black border-[2px]">
//     //       <a href="#testimonials" className=" w-1/2 md:w-auto">
//     //         <button className="px-3 md:px-10 py-3 w-fit  my-auto bg-black text-[#fff2e1] rounded-full shadow-lg hover:bg-[#3B2E22] transition-transform transform hover:scale-105 whitespace-nowrap">
//     //           Testimonials
//     //         </button>
//     //       </a>
//     //       <a href="#services" className=" w-1/2 md:w-auto">
//     //         <button className="px-3 md:px-10 py-3 w-fit  my-auto bg-black text-[#fff2e1] rounded-full shadow-lg hover:bg-[#3B2E22] transition-transform transform hover:scale-105 whitespace-nowrap">
//     //           Our Experties
//     //         </button>
//     //       </a>
//     //     </div>
//     //   </div>
//     // </section>

//     <div className="flex flex-col items-center p-6 text-center">
//       <h2 className="text-lg font-bold uppercase">Total Revenue Generated</h2>
//       <h1 className="text-4xl md:text-5xl font-bold text-[#FFD700]">
//         $63.4 Million
//       </h1>
//       <div className="grid grid-cols-2 gap-4 mt-6 w-full max-w-2xl text-white">
//         <div className="bg-[#0a0510] p-6 rounded-lg shadow-md">
//           <h3 className="text-sm font-semibold">Clients Helped</h3>
//           <p className="text-3xl font-bold text-[#FFD700]">57</p>
//         </div>
//         <div className="bg-[#0a0510] p-6 rounded-lg shadow-md">
//           <h3 className="text-sm font-semibold">Total Ad Spend</h3>
//           <p className="text-3xl font-bold text-[#FFD700]">$14.7M</p>
//         </div>
//         <div className="bg-[#0a0510] p-6 rounded-lg shadow-md">
//           <h3 className="text-sm font-semibold">Offices</h3>
//           <p className="text-3xl font-bold text-[#FFD700]">0</p>
//         </div>
//         <div className="bg-[#0a0510] p-6 rounded-lg shadow-md">
//           <h3 className="text-sm font-semibold">Services Offer</h3>
//           <p className="text-3xl font-bold text-[#FFD700]">1</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card1;

import React from "react";

const Card1 = () => {
  return (
    <div className="flex flex-col items-center p-6 text-center">
      {/* Title */}
      <h2 className="text-lg font-bold uppercase text-white opacity-90 mb-2">
        Total Revenue Generated
      </h2>

      {/* Revenue Number */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 drop-shadow-lg shadow-yellow-400">
      ₹472.6 Crore
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 gap-6 mt-6 w-full max-w-2xl text-white">
        {[
          { label: "Clients Helped", value: "98" },
          { label: "Total Ad Spend", value: "₹114.3 Cr." }
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#0a0510] p-6 rounded-xl shadow-lg border border-yellow-500 hover:shadow-yellow-400 transition-all flex flex-col justify-center items-center"
          >
            <h3 className="text-sm font-semibold">{item.label}</h3>
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 drop-shadow-md shadow-yellow-400">
              {item.value}
            </p>
          </div>
        ))}
      </div>
      <p className="p-6 text-white">“Our strategies have helped top brands turn Ad spend into crores in profit, ensuring unmatched returns on investment"</p>
    </div>
  );
};

export default Card1;
