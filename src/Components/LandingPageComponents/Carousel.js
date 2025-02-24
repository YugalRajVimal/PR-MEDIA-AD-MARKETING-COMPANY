import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Carousel = () => {
  const images = [
    "/LandingPage/Carousel/CarouselImage1.jpeg",
    "/LandingPage/Carousel/CarouselImage2.jpeg",
  ];

  const sampleText = ["Explore the Future of Tech", "Innovate and Create"];

  const carouselRef = useRef(null);
  const textRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        carouselRef.current.children[0],
        { x: 100 * direction, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
      );

      gsap.fromTo(
        textRef.current,
        { x: -100 * direction, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
    }, carouselRef);

    return () => ctx.revert();
  }, [currentIndex, direction]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative bg-gray-100 h-[80vh] w-full mx-auto overflow-hidden px-4 sm:px-10 py-8">
      {/* Image Carousel */}
      <div
        ref={carouselRef}
        className="flex h-full w-full items-center justify-center"
      >
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt="carousel slide"
          className="h-full w-full object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-5 top-1/2 transform -translate-y-1/2 bg-black text-[#fff2e1] p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-5 top-1/2 transform -translate-y-1/2 bg-black text-[#fff2e1] p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
      >
        ▶
      </button>

      {/* Text Overlay */}
      <div
        ref={textRef}
        className="absolute top-1/2 left-12 sm:left-20 transform -translate-y-1/2 
                bg-[#dbc3ab]/20 backdrop-blur-md border border-white/40 shadow-lg text-[#fff2e1] 
                text-lg sm:text-2xl md:text-4xl font-semibold rounded-xl p-4 sm:p-6 w-3/5 sm:w-1/2 
                flex justify-start items-center"
      >
        {sampleText[currentIndex]}
      </div>
    </div>
  );
};

export default Carousel;
