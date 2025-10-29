// components/OtherBooks.js

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const books = [
  {
    title: "Best Of Enimies",
    price: "40$",
    image: "/Books/book1.jpg",
  },
  {
    title: "Instant Cookbook",
    price: "40$",
    image: "/Books/book2.jpg",
  },
  {
    title: "A Man Of The People",
    price: "40$",
    image: "/Books/book3.jpg",
  },
  {
    title: "Penguin Classics",
    price: "40$",
    image: "/Books/book4.jpg",
  },
  {
    title: "Sample Book 5",
    price: "40$",
    image: "/Books/book5.jpg",
  },
  {
    title: "Sample Book 6",
    price: "40$",
    image: "/Books/book6.jpg",
  },
  {
    title: "Sample Book 7",
    price: "40$",
    image: "/Books/book7.jpg",
  },
  {
    title: "Sample Book 8",
    price: "40$",
    image: "/Books/book8.jpg",
  },
  {
    title: "Sample Book 9",
    price: "40$",
    image: "/Books/book9.jpg",
  },
  {
    title: "Sample Book 10",
    price: "40$",
    image: "/Books/book10.jpg",
  },
  {
    title: "Sample Book 11",
    price: "40$",
    image: "/Books/book11.jpg",
  },
  {
    title: "Sample Book 12",
    price: "40$",
    image: "/Books/book12.jpg",
  },
  {
    title: "Sample Book 13",
    price: "40$",
    image: "/Books/book13.jpg",
  },
  {
    title: "Sample Book 14",
    price: "40$",
    image: "/Books/book14.jpg",
  },
  {
    title: "Sample Book 15",
    price: "40$",
    image: "/Books/book15.jpg",
  },
  {
    title: "Sample Book 16",
    price: "40$",
    image: "/Books/book16.jpg",
  },
  {
    title: "Sample Book 17",
    price: "40$",
    image: "/Books/book17.jpg",
  },
  {
    title: "Sample Book 18",
    price: "40$",
    image: "/Books/book18.jpg",
  },
  {
    title: "Sample Book 19",
    price: "40$",
    image: "/Books/book19.jpg",
  },
  {
    title: "Sample Book 20",
    price: "40$",
    image: "/Books/book20.jpg",
  },
  {
    title: "Sample Book 21",
    price: "40$",
    image: "/Books/book21.jpg",
  },
  {
    title: "Sample Book 22",
    price: "40$",
    image: "/Books/book22.jpg",
  },
  {
    title: "Sample Book 23",
    price: "40$",
    image: "/Books/book23.jpg",
  },
  {
    title: "Sample Book 24",
    price: "40$",
    image: "/Books/book24.jpg",
  },
  {
    title: "Best Of Enimies",
    price: "40$",
    image: "/Books/Books/kindle1.jpg",
  },
  {
    title: "Instant Cookkindle",
    price: "40$",
    image: "/Books/Books/kindle2.jpg",
  },
  {
    title: "A Man Of The People",
    price: "40$",
    image: "/Books/Books/kindle3.jpg",
  },
  {
    title: "Penguin Classics",
    price: "40$",
    image: "/Books/Books/kindle4.jpg",
  },
  {
    title: "Sample kindle 5",
    price: "40$",
    image: "/Books/Books/kindle5.jpg",
  },
  {
    title: "Sample kindle 6",
    price: "40$",
    image: "/Books/Books/kindle6.jpg",
  },
  {
    title: "Sample kindle 7",
    price: "40$",
    image: "/Books/Books/kindle7.jpg",
  },
  {
    title: "Sample kindle 8",
    price: "40$",
    image: "/Books/Books/kindle8.jpg",
  },
  {
    title: "Sample kindle 9",
    price: "40$",
    image: "/Books/Books/kindle9.jpg",
  },
  {
    title: "Sample kindle 10",
    price: "40$",
    image: "/Books/Books/kindle10.jpg",
  },
  {
    title: "Sample kindle 11",
    price: "40$",
    image: "/Books/Books/kindle11.jpg",
  },
  {
    title: "Sample kindle 12",
    price: "40$",
    image: "/Books/Books/kindle12.jpg",
  },
  {
    title: "Sample kindle 13",
    price: "40$",
    image: "/Books/Books/kindle13.jpg",
  },
  {
    title: "Sample kindle 14",
    price: "40$",
    image: "/Books/Books/kindle14.jpg",
  },
  {
    title: "Sample kindle 15",
    price: "40$",
    image: "/Books/Books/kindle15.jpg",
  },
  {
    title: "Sample kindle 16",
    price: "40$",
    image: "/Books/Books/kindle16.jpg",
  },
  {
    title: "Sample kindle 17",
    price: "40$",
    image: "/Books/Books/kindle17.jpg",
  },
];

export default function BookSamples() {
  return (
    <section
      id="our-work"
      className="py-10 flex flex-col justify-center items-center w-screen"
    >
      <h2 className="px-6 md:px-16 text-3xl font-medio md:text-4xl font-bold text-[#3c2b61] mb-8">
        Samples
      </h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        className="pb-10 px-6 md:px-16 w-screen"
      >
        {books.map((book, index) => (
          <SwiperSlide key={index}>
            <div className="text-center flex flex-col justify-center items-center">
              <img
                src={book.image}
                alt={book.title}
                className="w-[290px] object-cover shadow-md rounded"
              />
              {/* <h3 className="mt-4 text-lg font-semibold text-[#3c2b61]">
                {book.title}
              </h3> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
