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
    if (!lastLogInTimePresent) {
      setLastLogInTimePresent(false);
    } else {
      setLastLogInTimePresent(true);
    }

    if (!loggedInTime) return;

    const loginTime = new Date(loggedInTime).getTime();
    const now = Date.now();
    const elapsedSeconds = Math.floor((now - loginTime) / 1000);

    // how many 2-hour cycles have passed since login
    const cyclesPassed = Math.floor(elapsedSeconds / RESET_INTERVAL);

    // start of current cycle
    const cycleStart = loginTime + cyclesPassed * RESET_INTERVAL * 1000;

    // elapsed seconds in current cycle
    const elapsedInCycle = Math.floor((now - cycleStart) / 1000);

    // remaining = 48hr - elapsedInCycle
    setRemainingSeconds(Math.max(FULL_TIME - elapsedInCycle, 0));

    // update every second
    const timerId = setInterval(() => {
      const currentNow = Date.now();
      const elapsedSinceLogin = Math.floor((currentNow - loginTime) / 1000);
      const cyclesPassedNow = Math.floor(elapsedSinceLogin / RESET_INTERVAL);
      const cycleStartNow = loginTime + cyclesPassedNow * RESET_INTERVAL * 1000;
      const elapsedInCycleNow = Math.floor((currentNow - cycleStartNow) / 1000);

      setRemainingSeconds(Math.max(FULL_TIME - elapsedInCycleNow, 0));
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="pt-[70px] text-[#3B2E22] bg-[#dbc3ab] md:bg-[#f7dbb6]">
      <div className="z-[10] bg-[#dbc3ab] md:bg-[#f7dbb6] backdrop-blur-md">
        {localStorage.getItem("token") && (
          <div className="text-black font-semibold text-base sm:text-lg my-4 text-center">
            <span className="text-black">{formatTime(remainingSeconds)}</span>
            <p></p>
          </div>
        )}

        <Testimonials3 />
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
