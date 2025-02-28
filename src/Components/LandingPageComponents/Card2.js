import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const Card2 = () => {
  const aboutRef3 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        aboutRef3.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef3.current,
            start: "top 80%", // Start when top of section is 80% in view
            toggleActions: "play none none none", // Play once, no repeat
          },
        }
      );
    }, aboutRef3);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section className="  px-4 sm:px-10 md:px-20  ">
      <div className=" mx-auto   flex flex-col md:flex-row items-center gap-12 ">
        {/* Text Section */}
        <div className="relative w-full text-center bg-[#3B2E22] md:text-left m-4 py-20 px-4 rounded-xl flex justify-evenly items-center shadow-[0_10px_30px_rgba(0,0,0,0.7)]">
          <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 drop-shadow-md shadow-yellow-400">
            Speak to our team today, plus schedule your free audit call today.
          </p>
          <div className="absolute bottom-4 right-4 text-3xl h-[30px] flex justify-end gap-1">
            <span>
              <img src="mailIcon.png" className="h-full object-contain" />
            </span>
            <span className="text-[#2cb317]">
              <FaWhatsapp />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card2;
