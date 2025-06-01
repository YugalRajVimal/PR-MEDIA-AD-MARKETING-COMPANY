import React, { useRef, useEffect, useState, useCallback } from "react";

const videos = [
  "/videos/Vdo1.mp4",
  "/videos/Vdo2.mp4",
  "/videos/Vdo3.mp4",
  "/videos/Vdo5.mp4",
  "/videos/Vdo6.mp4",
  "/videos/Vdo7.mp4",
  "/videos/Vdo8.mp4",
  "/videos/Vdo9.mp4",
  "/videos/Vdo11.mp4",
  "/videos/Vdo12.mp4",
  "/videos/Vdo13.mp4",
  "/videos/Vdo14.mp4",
  "/videos/Vdo15.mp4",
  "/videos/Vdo17.mp4",
  "/videos/Vdo18.mp4",
  "/videos/Vdo20.mp4",
  "/videos/Vdo21.mp4",
  "/videos/Vdo22.mp4",
  "/videos/Vdo23.mp4",
  "/videos/Vdo24.mp4",
  "/videos/Vdo25.mp4",
  "/videos/Vdo26.mp4",
];

const Testimonials3 = () => {
  const centerVideoRef = useRef(null);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  

  const handleVideoEnd = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const handleScroll = useCallback(
    (e) => {
      // Only react to horizontal scrolling
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;

      e.preventDefault();
      if (scrolling) return;

      setScrolling(true);

      if (e.deltaX > 0) {
        // Scroll right -> next video
        setCurrentIndex((prev) => (prev + 1) % videos.length);
      } else {
        // Scroll left -> previous video
        setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
      }

      // Delay to prevent fast scroll
      setTimeout(() => setScrolling(false), 800);
    },
    [scrolling]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const playCenterVideo = async () => {
      try {
        await centerVideoRef.current?.play();
      } catch (err) {
        console.error("Video playback error:", err);
      }
    };
    playCenterVideo();
  }, [currentIndex]);

  const getPrevIndex = (index) => (index - 1 + videos.length) % videos.length;
  const getNextIndex = (index) => (index + 1) % videos.length;

  const prevIndex = getPrevIndex(currentIndex);
  const nextIndex = getNextIndex(currentIndex);

  return (
    <div
      id="testimonials"
      ref={containerRef}
      className="flex flex-col justify-center items-center px-6 text-center overflow-hidden"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#3B2E22] font-semibold p-6 pt-10 pb-2">
        Testimonials
      </h2>

      <div className="flex justify-center items-center gap-4 mt-6 w-full max-w-6xl">
        {/* Left Video */}
        <video
          className="w-[20%] md:w-[25%]  rounded-lg  object-cover opacity-50 scale-90 transition-transform duration-500"
          src={videos[prevIndex]}
          muted
          loop
          playsInline
        />

        {/* Center Playing Video */}
        <video
          ref={centerVideoRef}
          key={videos[currentIndex]}
          className="w-[60%] sm:w-[50%] md:w-[40%] rounded-xl object-cover scale-100 transition-all duration-500 shadow-xl border-4 border-[#3B2E22]"
          src={videos[currentIndex]}
          autoPlay
          muted // 🔥 this is mandatory for autoplay to work!
          playsInline
          controls
          controlsList="nodownload"
          onEnded={handleVideoEnd}
          onLoadedData={() => {
            centerVideoRef.current?.play().catch((err) => {
              console.error("Autoplay failed:", err);
            });
          }}
          onClick={() => {
            const video = centerVideoRef.current;
            if (video) {
              if (video.paused) {
                video.play();
              } else {
                video.pause();
              }
            }
          }}
        />

        {/* Right Video */}
        <video
          className="w-[20%] md:w-[25%] rounded-lg object-cover opacity-50 scale-90 transition-transform duration-500"
          src={videos[nextIndex]}
          muted
          loop
          playsInline
        />
      </div>

      <p className="mt-4 text-sm text-gray-500">(Scroll to switch videos)</p>
    </div>
  );
};

export default Testimonials3;
