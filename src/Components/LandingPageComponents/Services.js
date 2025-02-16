import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  { title: "App Development", icon: "📱" },
  { title: "ERP Development", icon: "🖥️" },
  { title: "Digital Marketing", icon: "📈" },
  { title: "Real Estate Solutions", icon: "🏡" },
  { title: "BMI Calculator", icon: "⚖️" },
  { title: "AI Applications", icon: "🤖" },
  { title: "Gym & Diet Plans", icon: "🏋️" },
];

const Services = () => {
  const servicesRef = useRef(null);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    // Animation for fade-in effect
    gsap.fromTo(
      servicesRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section ref={servicesRef} className="bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Our Services
        </h2>

        {/* Services Grid (Desktop) / Collapsible (Mobile) */}
        <div className=" md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 my-4 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition"
            >
              <span className="text-4xl mb-4">{service.icon}</span>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Services;
