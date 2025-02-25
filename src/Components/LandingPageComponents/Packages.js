// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger);

// const Packages = () => {
//   const buttonsRef = useRef([]);

//   // Vibrate animation in X & Y axes
//   const vibrateButton = (btn) => {
//     gsap.fromTo(
//       btn,
//       { y: -5 }, // Start position (slightly offset)
//       {
//         y: 5,
//         duration: 0.1,
//         repeat: 6, // 3 full cycles (back & forth)
//         yoyo: true,
//         ease: "power2.inOut",
//       }
//     );
//   };

//   return (
//     <section className="p-4 sm:p-10 md:p-20">
//       <div className=" h-full flex flex-col justify-evenly items-center gap-10 p-10 bg-black text-[#fff2e1] rounded-xl">
//         <h2 className="text-4xl font-semibold">Packages</h2>

//         {/* Buttons Section */}
//         <div className="w-full text-center md:text-left py-2 rounded-xl flex gap-2 sm:gap-4  md:gap-8 justify-evenly items-center">
//           {["4.99 Crore", "99 Lakh", "9 Lakh"].map((price, index) => (
//             <a href={`/package${index + 1}`} className="w-full md:w-auto">
//               <button
//                 key={index}
//                 ref={(el) => (buttonsRef.current[index] = el)}
//                 className="p-2 md:px-10 py-1 md:py-3 my-auto w-fit bg-black text-xl text-[#fff2e1] rounded-full shadow-lg hover:bg-[#3B2E22] transition-transform transform hover:scale-105 whitespace-nowrap"
//                 onMouseEnter={() => vibrateButton(buttonsRef.current[index])}
//                 onClick={() => vibrateButton(buttonsRef.current[index])}
//               >
//                 {price}
//               </button>
//             </a>
//           ))}
//         </div>

//         <div class="text-center font-bold text-lg md:text-xl ">
//           <span class="   text-[#FFC300]">
//             Click on any price to see the value in each package!
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Packages;

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger);

// const Packages = () => {
//   const buttonsRef = useRef([]);

//   // Vibrate animation in X & Y axes
//   const vibrateButton = (btn) => {
//     gsap.to(btn, {
//       x: 16, // Move right
//       duration: 0.2,
//       repeat: 6, // 3 full cycles (back & forth)
//       yoyo: true,
//       ease: "power2.inOut",
//       onComplete: () => gsap.set(btn, { x: 0 }) // Reset position
//     });
//   };
  

//   useEffect(() => {
//     buttonsRef.current.forEach((btn) => {
//       ScrollTrigger.create({
//         trigger: btn,
//         start: "top 80%",
//         onEnter: () => vibrateButton(btn),
//       });
//     });
//   }, []);

//   return (
//     <section className="p-4 sm:p-10 md:p-20">
//       <div className="h-full flex flex-col justify-evenly items-center gap-10 p-10 bg-black text-[#fff2e1] rounded-xl">
//         <h2 className="text-4xl font-semibold">Packages</h2>

//         {/* Buttons Section */}
//         <div className="w-full text-center md:text-left py-2 rounded-xl flex gap-2 sm:gap-4 md:gap-8 justify-evenly items-center">
//           {["4.99 Crore", "99 Lakh", "9 Lakh"].map((price, index) => (
//             <a key={index} href={`/package${index + 1}`} className="w-full md:w-auto">
//               <button
//                 ref={(el) => (buttonsRef.current[index] = el)}
//                 className="p-3 md:px-10 py-1 md:py-3 my-auto w-fit text-xl text-[#fff2e1] rounded-full shadow-lg hover:bg-[#3B2E22] transition-transform transform hover:scale-105 whitespace-nowrap"
//                 onMouseEnter={() => vibrateButton(buttonsRef.current[index])}
//                 onClick={() => vibrateButton(buttonsRef.current[index])}
//               >
//                 {price}
//               </button>
//             </a>
//           ))}
//         </div>

//         <div className="text-center font-bold text-lg md:text-xl">
//           <span className="text-[#FFC300]">
//             Click on any price to see the value in each package!
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Packages;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Packages = () => {
  const buttonsRef = useRef([]);

  const vibrateButton = (btn) => {
    gsap.to(btn, {
      x: 16,
      duration: 0.2,
      repeat: 6,
      yoyo: true,
      ease: "power2.inOut",
      onComplete: () => gsap.set(btn, { x: 0 }),
    });
  };

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure GSAP runs only on the client

    setTimeout(() => {
      if (!buttonsRef.current.length) return;

      buttonsRef.current.forEach((btn) => {
        if (btn) {
          ScrollTrigger.create({
            trigger: btn,
            start: "top 80%",
            onEnter: () => vibrateButton(btn),
          });
        }
      });
    }, 500); // Delay for smoother initialization

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <section className="p-4 sm:p-10 md:p-20">
      <div className="h-full flex flex-col justify-evenly items-center gap-10 p-10 bg-black text-[#fff2e1] rounded-xl">
        <h2 className="text-4xl font-semibold">Packages</h2>

        {/* Buttons Section */}
        <div className="w-full text-center md:text-left py-2 rounded-xl flex gap-2 sm:gap-4 md:gap-8 justify-evenly items-center">
          {["4.99 Crore", "99 Lakh", "9 Lakh"].map((price, index) => (
            <a key={index} href={`/package${index + 1}`} className="w-full md:w-auto">
              <button
                ref={(el) => (buttonsRef.current[index] = el)}
                className="p-3 md:px-10 py-1 md:py-3 my-auto w-fit text-xl text-[#fff2e1] rounded-full shadow-lg hover:bg-[#3B2E22] transition-transform transform hover:scale-105 whitespace-nowrap"
                onMouseEnter={() => vibrateButton(buttonsRef.current[index])}
                onClick={() => vibrateButton(buttonsRef.current[index])}
              >
                {price}
              </button>
            </a>
          ))}
        </div>

        <div className="text-center font-bold text-lg md:text-xl">
          <span className="text-[#FFC300]">
            Click on any price to see the value in each package!
          </span>
        </div>
      </div>
    </section>
  );
};

export default Packages;
