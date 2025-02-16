import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        aboutRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%", // Start when top of section is 80% in view
            toggleActions: "play none none none", // Play once, no repeat
          },
        }
      );
    }, aboutRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section ref={aboutRef} className=" py-16 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto h-full flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="w-full h-[500px] md:w-1/2 flex justify-center items-center">
          <img
            src="/LandingPage/AboutUs/AboutUsImages.jpeg"
            alt="About Us"
            className="w-full h-[80%] rounded-xl shadow-xl object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are passionate about crafting unique and professional web experiences.
            Our goal is to deliver cutting-edge solutions tailored to your needs.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#4E3C2C] text-white rounded-lg shadow-lg hover:bg-[#3B2E22] transition-transform transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
