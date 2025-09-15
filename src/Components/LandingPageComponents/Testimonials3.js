import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gsap from "gsap";

const videos = [
  { src: "/videos/Vdo1.mp4", text: "This is sample text for video 1" },
  // { src: "/videos/Vdo2.mp4", text: "This is sample text for video 2" },
  // { src: "/videos/Vdo3.mp4", text: "This is sample text for video 3" },
  // { src: "/videos/Vdo5.mp4", text: "This is sample text for video 5" },
  // { src: "/videos/Vdo6.mp4", text: "This is sample text for video 6" },
  // { src: "/videos/Vdo7.mp4", text: "This is sample text for video 7" },
  // { src: "/videos/Vdo8.mp4", text: "This is sample text for video 8" },
  // { src: "/videos/Vdo9.mp4", text: "This is sample text for video 9" },
  // { src: "/videos/Vdo11.mp4", text: "This is sample text for video 11" },
  // { src: "/videos/Vdo12.mp4", text: "This is sample text for video 12" },
  // { src: "/videos/Vdo13.mp4", text: "This is sample text for video 13" },
  // { src: "/videos/Vdo14.mp4", text: "This is sample text for video 14" },
  // { src: "/videos/Vdo15.mp4", text: "This is sample text for video 15" },
  // { src: "/videos/Vdo17.mp4", text: "This is sample text for video 17" },
  // { src: "/videos/Vdo18.mp4", text: "This is sample text for video 18" },
  // { src: "/videos/Vdo20.mp4", text: "This is sample text for video 20" },
  // { src: "/videos/Vdo21.mp4", text: "This is sample text for video 21" },
  // { src: "/videos/Vdo22.mp4", text: "This is sample text for video 22" },
  // { src: "/videos/Vdo23.mp4", text: "This is sample text for video 23" },
  // { src: "/videos/Vdo24.mp4", text: "This is sample text for video 24" },
  // { src: "/videos/Vdo25.mp4", text: "This is sample text for video 25" },
  // { src: "/videos/Vdo26.mp4", text: "This is sample text for video 26" },
];

const Testimonials3 = ({ timer, remainingSeconds, FULL_TIME }) => {
  const videoRefs = useRef([]);

  const marqueeRef = useRef(null);

  const [name, setName] = useState("");

  useEffect(() => {
    const n = localStorage.getItem("name");
    if (n) {
      setName(n);
    }
    gsap.fromTo(
      marqueeRef.current.querySelector("span"),
      { x: "100%" }, // start from right
      {
        x: "0%", // overshoot so that the span centers itself
        duration: 8,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <>
      {/* Marquee Text - Ensuring it appears above the image */}
      <div
        ref={marqueeRef}
        className="relative text-[#3B2E22] w-fit pt-4 flex justify-center "
      >
        <span className="text-2xl md:text-3xl lg:text-4xl flex flex-col md:flex-row justify-center w-screen text-center font-bold inline-block whitespace-nowrap">
          <span>Become a Freelancer,</span>
          <span> One life, One chance, Take the risk!</span>
        </span>
      </div>
      {name && (
        <div className="max-w-xl mx-auto w-[95vw] my-6 p-6 rounded-2xl shadow-xl bg-gradient-to-r from-orange-100 via-white to-yellow-100 border border-orange-300">
          {localStorage.getItem("token") && (
            <div className="text-black font-semibold text-base sm:text-lg mb-4 text-center">
              {/* Timer */}
              <span className="text-red-500 tracking-widest">{timer}</span>

              {/* Progress Bar */}
              <div className="w-2/3 max-w-xs mx-auto mt-3">
                <div className="relative w-full bg-gray-300 rounded-full h-5 overflow-hidden">
                  {/* Background separators */}
                  <div className="absolute inset-0 flex justify-between">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="h-full w-px bg-white/60" />
                    ))}
                  </div>

                  {/* Progress bar */}
                  <div
                    className="bg-green-500 h-full transition-all duration-500 ease-linear text-sm font-mono "
                    style={{ width: `${(remainingSeconds / FULL_TIME) * 85}%` }}
                  />

                  {/* Percentage label */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-mono text-gray-800 drop-shadow">
                      {Math.round((remainingSeconds / FULL_TIME) * 85)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-4">
            {name}
          </h1>

          <p className="text-base md:text-lg text-gray-800 leading-relaxed text-center">
            🚀{" "}
            <span className="font-semibold text-orange-600">
              This batch is about to get FULL
            </span>{" "}
            <br />
            Hurry — spots are almost gone!
            <br />
            🔥 One step today can change everything. ✨
          </p>

          <p className=" text-base md:text-lg text-gray-800 leading-relaxed text-center">
            👉 Don’t wait, your moment is NOW! 💯
          </p>
        </div>
      )}
      {/* {videos.length > 0 && ( */}
      <div
        id="testimonials"
        className="flex flex-col justify-center items-center px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-6xl text-[#3B2E22] font-semibold p-6 pt-10 pb-2">
          Today's Update
        </h2>

        <div className="w-full max-w-6xl flex justify-center items-center">
          <Swiper
            modules={[Mousewheel]}
            className="flex justify-center items-center"
            spaceBetween={30}
            slidesPerView={3}
            cssMode={true}
            centeredSlides={true}
            mousewheel={true}
            loop={true}
            onSlideChange={(swiper) => {
              videoRefs.current.forEach((video, idx) => {
                if (video) {
                  if (idx === swiper.realIndex) {
                    video.play().catch(() => {});
                  } else {
                    video.pause();
                    video.currentTime = 0;
                  }
                }
              });
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                if (videoRefs.current[swiper.realIndex]) {
                  videoRefs.current[swiper.realIndex].play().catch(() => {});
                }
              }, 100);
            }}
            allowTouchMove={true}
          >
            {videos.map((video, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col justify-center items-center"
              >
                {({ isActive }) => (
                  <div className="flex flex-col justify-center items-center transition-all duration-500 h-full py-10">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      className={`rounded-xl object-cover shadow-xl border-[1px] border-[#3B2E22] 
                    ${
                      isActive
                        ? "z-10 min-w-[130px] w-[100%] md:w-[100%] aspect-[19/10] scale-[1.4] "
                        : "z-0 min-w-[110px] w-[95%] md:w-[60%] aspect-[19/10]  opacity-50 scale-90 "
                    } 
                    transition-all duration-500 `}
                      src={video.src}
                      muted
                      playsInline
                      controls
                    />
                    <p
                      className={`rounded-xl object-cover
                  ${
                    isActive
                      ? "z-10 min-w-[130px] w-[100%] md:w-[80%] scale-[1.1] translate-y-[40px]"
                      : "mt-3 text-gray-700 text-sm md:text-base font-medium max-w-[80%]"
                  } 
                  transition-all duration-500 `}
                    >
                      {video.text}
                    </p>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          (Swipe or scroll to switch videos)
        </p>
      </div>
      {/* )} */}
    </>
  );
};

export default Testimonials3;
