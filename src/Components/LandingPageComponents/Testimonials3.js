import React, { useRef, useState, useEffect } from "react";

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
  "/videos/Vdo27.mp4",
  "/videos/Vdo28.mp4",
  "/videos/Vdo29.mp4",



];
const Testimonials3 = () => {
  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    const playVideo = async () => {
      try {
        await videoRef.current?.play();
      } catch (err) {
        console.error("Playback failed:", err);
      }
    };

    playVideo();
  }, [currentIndex]);

  return (
    <div
      id="testimonials"
      className="flex flex-col justify-center items-center px-6  text-center"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-center text-[#3B2E22] font-semibold p-6 pt-10 pb-2">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 gap-6 mt-6 w-full max-w-2xl text-white">
        <div className="rounded-xl transition-all flex flex-col justify-center items-center">
          <video
            ref={videoRef}
            key={videos[currentIndex]} // forces React to remount the video
            className="w-[70%] h-full rounded-lg object-cover"
            src={videos[currentIndex]}
            autoPlay
            playsInline
            onEnded={handleVideoEnd}
            controls
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Testimonials3;
