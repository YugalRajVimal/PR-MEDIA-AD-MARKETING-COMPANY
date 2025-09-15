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

const LandingPage = () => {
  const [lastLogInTimePresent, setLastLogInTimePresent] = useState(false);

  const FULL_TIME = 48 * 3600; // 48 hours in seconds
  const RESET_INTERVAL = 2 * 3600; // 2 hours in seconds

  const [remainingSeconds, setRemainingSeconds] = useState(FULL_TIME);

  // Format time as 00hr 00min 00sec
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
    const loggedInTime = localStorage.getItem("lastLoginTime");
    if (!loggedInTime) return;

    const loginTime = parseInt(loggedInTime, 10); // epoch ms

    const updateTimer = () => {
      const now = Date.now();
      const elapsedSeconds = Math.floor((now - loginTime) / 1000);

      // modulo 48h to restart correctly
      const remaining = FULL_TIME - (elapsedSeconds % FULL_TIME);

      setRemainingSeconds(remaining);
    };

    updateTimer(); // run once immediately
    const timerId = setInterval(updateTimer, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="pt-[70px] text-[#3B2E22] bg-[#dbc3ab] md:bg-[#f7dbb6]">
      <div className="z-[10] bg-[#dbc3ab] md:bg-[#f7dbb6] backdrop-blur-md">
        <Testimonials3
          timer={formatTime(remainingSeconds)}
          remainingSeconds={remainingSeconds}
          FULL_TIME={FULL_TIME}
        />

        <Headline />
        <AboutUs />
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
