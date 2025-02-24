import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Mehta",
    review:
      "Their App Development service is top-notch! They built a seamless mobile app for our business, and the experience was amazing.",
  },
  {
    name: "Sneha Kapoor",
    review:
      "The ERP system they developed streamlined our business operations perfectly. Highly professional team and great support!",
  },
  {
    name: "Vikas Anand",
    review:
      "Their Digital Marketing strategies significantly boosted our online presence. Our sales have doubled within months!",
  },
  {
    name: "Ananya Rao",
    review:
      "Their Real Estate Solutions helped me find the perfect property effortlessly. Highly recommend their service!",
  },
  {
    name: "Rohan Gupta",
    review:
      "The BMI Calculator they designed is extremely accurate and user-friendly. A must-have tool for fitness enthusiasts!",
  },
  {
    name: "Neha Sharma",
    review:
      "The AI-powered chatbot they developed for our website is fantastic. It has improved customer interactions tremendously!",
  },
  {
    name: "Amit Verma",
    review:
      "Their Gym & Diet Plans are well-structured and effective. I’ve seen great results in just a few months!",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const testimonialRef = useRef(null);

  const slideTestimonial = (direction) => {
    const outgoingX = direction === "next" ? "-100%" : "100%";
    const incomingX = direction === "next" ? "100%" : "-100%";

    // Animate current testimonial out
    gsap.to(testimonialRef.current, {
      x: outgoingX,
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        // Change testimonial index
        setCurrent((prev) =>
          direction === "next"
            ? (prev + 1) % testimonials.length
            : (prev - 1 + testimonials.length) % testimonials.length
        );

        // Reset position before animating new testimonial in
        gsap.set(testimonialRef.current, { x: incomingX, opacity: 0 });

        // Animate new testimonial in
        gsap.to(testimonialRef.current, {
          x: "0%",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 relative text-center bg-[#dbc3ab]">
      <h2 className="text-[130px] text-gray-200 font-serif italic opacity-70">
        Testimonial
      </h2>
      <div className="h-[250px] flex items-center justify-evenly w-full">
        {/* Left Button */}
        <button
          onClick={() => slideTestimonial("prev")}
          className="text-black text-4xl mx-4"
        >
          <FaChevronLeft className="p-2 bg-[#dca73a] rounded-full" />
        </button>

        {/* Testimonial Content */}
        <div
          ref={testimonialRef}
          className="flex flex-col gap-6 justify-center items-center w-full max-w-2xl p-6 "
        >
          <h3 className="text-lg font-semibold text-gray-700">
            {testimonials[current].name}
          </h3>
          <p className="flex text-yellow-500 gap-1 text-2xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
          <p className="text-gray-600 mt-2">{testimonials[current].review}</p>
        </div>

        {/* Right Button */}
        <button
          onClick={() => slideTestimonial("next")}
          className="text-black text-4xl mx-4"
        >
          <FaChevronRight className="p-2 bg-[#dca73a] rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
