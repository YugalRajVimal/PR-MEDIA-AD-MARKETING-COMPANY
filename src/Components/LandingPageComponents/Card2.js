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
    <section
      ref={aboutRef3}
      className=" py-16 p-4 sm:p-10 md:px-20 bg-[#291f12]"
    >
      <div className="max-w-6xl mx-auto h-full flex flex-col md:flex-row items-center gap-12 ">
        {/* Text Section */}
        <div className="relative w-full text-center md:text-left m-5 py-20 px-4  rounded-xl flex justify-evenly items-center border border-black border-[2px]">
          <p className="text-xl">
            Speak to our team today, plus schedule your free audit call today.
          </p>
          <div className="absolute bottom-4 right-4 text-2xl flex justify-end gap-4">
            <span className="text-[#2cb317]">
              <FaWhatsapp />
            </span>
            <span>
              <FiMail />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card2;
