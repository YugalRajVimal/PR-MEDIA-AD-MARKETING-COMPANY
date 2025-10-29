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

// import React, { useEffect, useRef } from "react";

// const Packages = () => {
//   return (
//     <section className="p-4 sm:p-10 md:p-20">
//       <div className="h-full flex flex-col justify-evenly items-center gap-10 p-10 bg-black text-[#fff2e1] rounded-xl">
//         <h2 className="text-4xl font-semibold">Packages</h2>

//         {/* Buttons Section */}
//         <div className="w-full text-center md:text-left py-2 rounded-xl flex gap-2 sm:gap-4 md:gap-8 justify-evenly items-center">
//           {["4.99 Crore", "99 Lakh", "9 Lakh"].map((price, index) => (
//             <a
//               key={index}
//               href={`/package${index + 1}`}
//               className="w-full md:w-auto"
//             >
//               <button className="p-3 md:px-10 py-1 md:py-3 my-auto w-fit text-xl text-[#fff2e1] rounded-full shadow-lg hover:bg-[#3B2E22] transition-transform transform hover:scale-105 whitespace-nowrap">
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

// import React, { useEffect, useRef } from "react";

// const Packages = () => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           document.querySelectorAll(".price-button").forEach((btn) => {
//             btn.classList.add("animate-vibrate");
//           });

//           setTimeout(() => {
//             document.querySelectorAll(".price-button").forEach((btn) => {
//               btn.classList.remove("animate-vibrate");
//               btn.style.transform = "translateX(0) translateY(0)"; // Reset position
//             });
//           }, 1000);
//         }
//       },
//       { threshold: 0.6 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="p-4 sm:p-10 md:p-20 flex justify-center items-center"
//     >
//       <div className="h-full w-full md:w-[600px] md:max-w-[600px] flex flex-col justify-evenly items-center gap-4 px-2 py-10 md:p-4 bg-[#3B2E22] text-[#fff2e1] rounded-xl">
//         <h2 className="text-2xl md:text-3xl font-medio ">Monthly Subscription</h2>
//         {/* <div className="text-center font-bold text-lg md:text-xl">
//           <span className="text-[#FFC300]">
//             💥 Limited Time Offer – 53% OFF!
//           </span>
//           <br />
//           <span className="text-[#FFC300]">
//             Original Fee: ₹3,850 → Now Only: ₹5,790 Save ₹6,560 today – Act
//             Fast!
//           </span>
//         </div> */}

//         <div className="w-full flex justify-evenly items-center gap-2 md:gap-4">
//           {["Rs. 3,850"].map((price, index) => (
//             <a
//               key={index}
//               // href={`/package${index + 1}`}
//               className="text-center justify-center items-center"
//             >
//               <button
//                 className={`price-button w-full ${index == 0 && "text-left"} ${
//                   index == 0 && "text-center"
//                 }  ${
//                   index == 2 && "text-right"
//                 } md:px-2 py-1 md:py-2 my-auto  text-[24px] text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 drop-shadow-md shadow-yellow-400 whitespace-nowrap rounded-full hover:bg-[#3B2E22] transition-transform transform whitespace-nowrap`}
//               >
//                 {price}
//               </button>
//             </a>
//           ))}
//         </div>

//         {/* <div className="text-center font-bold text-lg md:text-xl">
//           <span className="text-[#FFC300]">
//             Click on this price to see the value in this package!
//           </span>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default Packages;
import React, { useEffect, useRef } from "react";
import { FaCheckCircle, FaCircle } from "react-icons/fa";

const Packages = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".price-button").forEach((btn) => {
            btn.classList.add("animate-vibrate");
          });

          setTimeout(() => {
            document.querySelectorAll(".price-button").forEach((btn) => {
              btn.classList.remove("animate-vibrate");
              btn.style.transform = "translateX(0) translateY(0)";
            });
          }, 1000);
        }
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="monthly-subscriptions"
      ref={sectionRef}
      className="p-2 sm:p-10 md:p-20 flex flex-col justify-center items-center "
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#3B2E22] mt-6 text-center">
        Packages
      </h2>

      {/* <div className="flex gap-4 md:gap-8 w-full  overflow-x-scroll">

        <div className=" flex-1 bg-[#3B2E22] text-[#fff2e1] min-w-[85vw] md:min-w-[40vw] rounded-2xl p-4 md:p-8 shadow-xl flex flex-col justify-between transition-transform hover:-translate-y-1 hover:shadow-2xl">
          <div>
            <div className="flex items-center mb-2">
              <h3 className="text-2xl font-bold">
                Premium Bestseller Program
                <span className="text-xl mr-2">💎</span>
              </h3>
            </div>
            <p className="text-xl font-bold text-[#FFD700]  mb-6">₹99,000</p>
            <h4 className="text-lg font-bold mb-3">You Get:</h4>
            <ul className="list-disc list-outside pl-6 space-y-2 text-sm md:text-base leading-relaxed [text-indent:0em] [padding-left:1em]">
              <li>Guaranteed #1 Bestseller in 15–20 days</li>
              <li>2.5 months promotion with targeted ads</li>
              <li>
                Get our expert PR team with a proven strategy to elevate your
                book’s image and credibility
              </li>
              <li>Professionally designed high-quality ad visuals</li>
              <li>Your own luxury personal website to showcase your book</li>
              <li>Weekly performance reports to track your progress</li>
              <li>Boosted book sales & long-term discoverability</li>
              <li>
                Build strong credibility in the market with our PR strategy
              </li>
              <li>
                Greater media exposure, reviews, and speaking opportunities
              </li>
              <li>Earn the prestigious orange #1 Bestseller tag</li>
            </ul>
          </div>

          <a
            href={`http://wa.me/+917500030415?text=Hi%2C%20I%20want%20a%20monthly%20subscription!`}
            target="_blank"
            rel="noopener noreferrer"
            className="price-button mt-6 bg-[#fff2e1] text-[#3B2E22] text-center font-bold py-3 px-6 rounded-xl hover:bg-[#4c3a2b] transition-all duration-300"
          >
            Enroll Now
          </a>
        </div>


        <div className="flex-1  bg-[#fff2e1] text-[#3B2E22] min-w-[85vw] md:min-w-[40vw]  rounded-2xl p-8 shadow-xl flex flex-col justify-between border border-[#3B2E22] transition-transform hover:-translate-y-1 hover:shadow-2xl">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              E-Book Publishing <span className="text-xl mr-2">📚</span>
            </h3>
            <p className="text-xl font-bold text-[#b8860b]  mb-6">₹7,999</p>
            <h4 className="text-lg font-bold mb-3">You Get:</h4>
            <ul className="list-disc list-inside space-y-2 text-sm md:text-base leading-relaxed">
              <li>Amazon Kindle publishing</li>
              <li>80% royalty goes to you</li>
              <li>Author page on Amazon</li>
              <li>Proofreading</li>
              <li>Editing</li>
              <li>Book cover design</li>
              <li>Monthly royalty payments</li>
            </ul>
          </div>
          <a
            href={`http://wa.me/+917500030415?text=Hi%2C%20I%20want%20a%20monthly%20subscription!`}
            target="_blank"
            rel="noopener noreferrer"
            className="price-button mt-6 bg-[#3B2E22] text-center text-[#fff2e1] font-bold py-3 px-6 rounded-xl hover:bg-[#4c3a2b] transition-all duration-300"
          >
            Enroll Now
          </a>
        </div>
      </div> */}
      <div className="flex items-center gap-4 md:gap-8 w-full overflow-x-scroll no-scrollbar pt-4 [direction:rtl]">
        {/* Package 1 */}
        <div className="[direction:ltr] flex-1 bg-gradient-to-br from-[#3B2E22] to-[#2a1e15] text-[#fff2e1] min-w-[85vw] md:min-w-[40vw] rounded-2xl py-10 px-4 md:p-8 flex flex-col justify-between border border-[#ffffff1a] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)] hover:scale-[1.01] md:hover:-translate-y-1 md:hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)] md:scale-[1.01]">
          <div>
            <div className="flex items-center mb-2">
              <h3 className="text-2xl font-bold">
                Premium Bestseller Program{" "}
                <span className="text-xl mr-2">💎</span>
              </h3>
            </div>
            <p className="text-xl font-bold text-[#FFD700] mb-6 drop-shadow-[0_2px_6px_rgba(255,215,0,0.5)]">
              ₹99,000
            </p>
            <h4 className="text-lg font-bold mb-3">You Get:</h4>
            <ul className="list-disc list-outside pl-6 space-y-2 text-sm font-bold md:text-base leading-relaxed [text-indent:0em] [padding-left:1em]">
              <li>Guaranteed #1 Bestseller in 15–20 days</li>
              <li>Promotion with Targeted Ads</li>
              <li>
                Get our expert PR team with a proven strategy to elevate your
                book’s image and credibility
              </li>
              <li>Professionally designed high-quality ad visual</li>
              <li>Your own luxury personal website to showcase your book</li>
              <li>Weekly performance reports to track your progress</li>
              <li>Boosted book sales & long-term discoverability</li>
              <li>
                Build strong credibility in the market with our PR strategy
              </li>
              <li>
                Greater media exposure, reviews, and speaking opportunities
              </li>
              <li>Earn the prestigious orange #1 Bestseller tag</li>
            </ul>
          </div>

          <a
            href="http://wa.me/+917500030415?text=Hi%2C%20I%20want%20a%20monthly%20subscription!"
            target="_blank"
            rel="noopener noreferrer"
            className="price-button mt-6 bg-[#fff2e1] text-[#3B2E22] text-center font-bold py-3 px-6 rounded-xl hover:bg-[#4c3a2b] hover:text-[#fff2e1] transition-all duration-300 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          >
            Enroll Now
          </a>
        </div>

        {/* Package 2 */}
        <div className="[direction:ltr] flex-1 h-fit bg-gradient-to-br from-[#fff2e1] to-[#f3e7d1] text-[#3B2E22] min-w-[85vw] md:min-w-[40vw] rounded-2xl p-4  flex flex-col justify-between border border-[#3B2E22]/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)] hover:scale-[1.01] md:hover:-translate-y-1 md:hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)] md:scale-[1.01]">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              E-Book Publishing <span className="text-xl mr-2">📚</span>
            </h3>
            <p className="text-xl font-bold text-[#b8860b] mb-2 drop-shadow-[0_1px_4px_rgba(184,134,11,0.5)]">
              ₹7,999
            </p>
            <h4 className="text-lg font-bold mb-1">You Get:</h4>
            <ul className="list-disc list-outside pl-6 space-y-1 text-sm font-bold md:text-base leading-relaxed [text-indent:0em] [padding-left:1em]">
              <li>Amazon Kindle publishing</li>
              <li>80% royalty goes to you</li>
              <li>Author page on Amazon</li>
              <li>Proofreading</li>
              <li>Editing</li>
              <li>Book cover design</li>
              <li>Monthly royalty payments</li>
            </ul>
          </div>

          <a
            href="http://wa.me/+917500030415?text=Hi%2C%20I%20want%20a%20monthly%20subscription!"
            target="_blank"
            rel="noopener noreferrer"
            className="price-button mt-6 bg-[#3B2E22] text-center text-[#fff2e1] font-bold py-3 px-6 rounded-xl hover:bg-[#4c3a2b] transition-all duration-300 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Packages;
