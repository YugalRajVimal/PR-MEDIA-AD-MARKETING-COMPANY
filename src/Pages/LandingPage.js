import React, { useEffect, useState } from "react";
import Testimonials3 from "../Components/LandingPageComponents/Testimonials3";
import Headline from "../Components/LandingPageComponents/Headline";
import AboutUs from "../Components/LandingPageComponents/AboutUs";
import Card3 from "../Components/LandingPageComponents/Card3";
import VideoCard1 from "../Components/LandingPageComponents/VideoCard1";
import Card1 from "../Components/LandingPageComponents/Card1";
import Packages from "../Components/LandingPageComponents/Packages";
import Testimonials2 from "../Components/LandingPageComponents/Testimonials2";
import DemoCallCard from "../Components/LandingPageComponents/DemoCallCard";
import Card2 from "../Components/LandingPageComponents/Card2";
import AuditCallCard from "../Components/LandingPageComponents/AuditCallCard";
import Services from "../Components/LandingPageComponents/Services";
import { motion, AnimatePresence } from "framer-motion";
import HowItWorks from "../Components/LandingPageComponents/HowItWorks";
import BookSamples from "../Components/LandingPageComponents/BookSamples";

const LandingPage = () => {
  const [hideTimer, setHideTimer] = useState(false);
  const FULL_TIME = 48 * 3600; // 48 hours in seconds
  const [remainingSeconds, setRemainingSeconds] = useState(FULL_TIME);

  // Format time as "00hr 00min 00sec"
  const formatTime = (totalSeconds) => {
    if (totalSeconds <= 0) return "00hr 00min 00sec";

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours.toString().padStart(2, "0")}hr ${minutes
      .toString()
      .padStart(2, "0")}min ${seconds.toString().padStart(2, "0")}sec`;
  };

  useEffect(() => {
    // Store login timestamp if not already stored
    if (!localStorage.getItem("lastLoginTime")) {
      const loginTime = Date.now(); // store UTC epoch
      localStorage.setItem("lastLoginTime", loginTime);
    }

    const loginTime = parseInt(localStorage.getItem("lastLoginTime"), 10);

    const updateTimer = () => {
      const nowEpoch = Date.now();
      const elapsedSeconds = Math.floor((nowEpoch - loginTime) / 1000);
      const remaining = Math.max(FULL_TIME - elapsedSeconds, 0);

      if (remaining < 1 || remaining > FULL_TIME) {
        setRemainingSeconds(0);
        setHideTimer(true);
        clearInterval(timerId);
      } else {
        setRemainingSeconds(remaining);
      }

      if (remaining === 0) {
        setHideTimer(true);
        clearInterval(timerId); // stop the timer when done
      }
    };

    const timerId = setInterval(updateTimer, 1000);
    updateTimer(); // initialize immediately

    return () => clearInterval(timerId);
  }, []);

  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    // Automatically hide popup after 5 seconds
    const timeoutId = setTimeout(() => {
      setShowPopup(false);
    }, 5000);

    return () => clearTimeout(timeoutId); // cleanup
  }, []);

  return (
    <div className="pt-[70px] text-[#3B2E22] bg-[#dbc3ab] md:bg-[#f7dbb6]">
      {/* <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ y: -50, opacity: 0 }} // start slightly above
            animate={{ y: 0, opacity: 1 }} // slide into view
            exit={{ y: -50, opacity: 0 }} // slide back up when removed
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-4 left-[10px] transform z-30"
          >
            <div className="bg-white/90 dark:bg-black/80 text-black dark:text-white px-5 py-2 rounded-3xl shadow-lg backdrop-blur-md flex items-center justify-center max-w-md mx-auto">
              <span className="mr-2 text-base md:text-xl animate-bounce">
                ⬇️
              </span>
              <span className="text-center text-[10px] md:text-base font-medium">
                Scroll down to see today’s video updates!
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}

      <div className="z-[10] bg-[#dbc3ab] md:bg-[#f7dbb6] backdrop-blur-md">
        <Testimonials3
          timer={formatTime(remainingSeconds)}
          remainingSeconds={remainingSeconds}
          FULL_TIME={FULL_TIME}
          hideTimer={hideTimer}
        />

        <Headline />
        {/* <AboutUs /> */}
        <Card3 />

        <VideoCard1 />
        <div className="mx-auto w-fit py-12">
          <img
            src="/books1.jpeg"
            className="w-[90vw] md:w-[40vw] my-4 rounded-xl max-w-[400px]"
          />
        </div>
        <Card1 />
        <Packages />

        <div className="flex flex-col items-center space-y-10  p-2 md:p-8 rounded-xl">
          <div className="  w-full md:w-full rounded-lg  p-4 md:p-6  relative">
            {/* <h2 className="text-2xl font-bold text-center pt-3">
            Learn Real Skills
          </h2>
          <div className="w-[90%] md:w-[70%] lg:w-[60%] border border-black mx-auto my-4"></div> */}

            <div className="w-fit mx-auto rounded-lg p-1 md:p-1 relative ">
              <div className="h-full w-full absolute top-4 left-4 bg-zinc-500 z-[-2] rounded-xl"></div>
              <div className="h-full w-full absolute top-[6px] left-[6px] bg-[#dbc3ab] md:bg-[#f7dbb6] z-[-1] rounded-xl"></div>
              <div className="max-w-[700px] mx-auto  w-fit mx-auto text-left space-y-4 p-10 text-black bg-[#dbc3ab] md:bg-[#f7dbb6] border-[2px] rounded-xl border border-black">
                <h2 className="text-2xl font-bold text-left pt-3">
                  Premium Bestseller Program for Authors
                </h2>
                <p className="text-lg md:text-xl font-semibold">Hi Author 🙂</p>
                <p className="text-base md:text-lg">
                  Are you ready to make your book a{" "}
                  <span className="font-extrabold">#1 Amazon Bestseller</span>{" "}
                  in just 15–20 days?
                </p>

                {/* <p className="text-base md:text-lg font-semibold mt-6">
                  Promotion Duration: 2.5 months
                </p> */}
                <ul className="mt-2 space-y-2 text-base md:text-lg">
                  <li className="flex items-start gap-2">
                    <span className="shrink-0">✅</span>
                    <span>Targeted Ad promotion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0">✅</span>
                    <span>Professionally designed high-quality ad visual</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0">✅</span>
                    <span>
                      Your own luxury, personalized website to showcase your
                      book
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0">✅</span>
                    <span>Significantly boost your book sales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0">✅</span>
                    <span>Build strong credibility in the market</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0">✅</span>
                    <span>
                      Earn the prestigious orange{" "}
                      <span className="font-extrabold">#1 Bestseller tag</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="shrink-0">✅</span>
                    <span>
                      Receive weekly performance reports to track your book’s
                      progress
                    </span>
                  </li>
                </ul>

                <p className="text-lg md:text-xl font-bold mt-6">
                  💰 Investment: ₹99,000 — unmatched value for{" "}
                  <span className="font-extrabold">guaranteed results</span>
                </p>
                <p className="text-base md:text-lg">
                  If you’re interested, send us a message on WhatsApp today 🙂
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto w-fit">
          <img
            src="/books3.jpeg"
            className="w-[90vw] md:w-[40vw] my-4 rounded-xl max-w-[400px]"
          />
        </div>

        <HowItWorks />

        <BookSamples />
        <Card3 />
        <Testimonials2 />
        <DemoCallCard />
        <Card2 />
        <AuditCallCard />
        <Services />
        <div className="pb-10">
          <Card3 />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
