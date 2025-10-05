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
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ y: -50, opacity: 0 }} // start slightly above
            animate={{ y: 0, opacity: 1 }} // slide into view
            exit={{ y: -50, opacity: 0 }} // slide back up when removed
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-4 left-[10px] transform z-50"
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
      </AnimatePresence>

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
        <Card1 />
        <Packages />
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
