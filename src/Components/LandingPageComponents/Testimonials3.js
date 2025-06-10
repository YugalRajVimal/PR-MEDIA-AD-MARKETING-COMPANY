import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard } from "lucide-react";

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
  const videoRefs = useRef([]);

  return (
    <div
      id="testimonials"
      className="flex flex-col justify-center items-center px-6 text-center"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#3B2E22] font-semibold p-6 pt-10 pb-2">
        Testimonials
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
          // pagination={{ clickable: true }}
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
              className="flex justify-center items-center"
            >
              {({ isActive }) => (
                <div className="flex justify-center items-center transition-all duration-500 h-full">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    className={`rounded-xl object-cover shadow-xl border-4 border-[#3B2E22] 
                      ${
                        isActive
                          ? "w-[70%] md:w-[80%] scale-100"
                          : "w-[50%] md:w-[60%]  opacity-50 scale-90"
                      } 
                      transition-all duration-500 `}
                    src={video}
                    muted
                    playsInline
                    controls
                  />
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
  );
};

export default Testimonials3;
