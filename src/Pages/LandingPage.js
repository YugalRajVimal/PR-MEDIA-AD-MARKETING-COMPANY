import React from "react";
import Carousel from "../Components/LandingPageComponents/Carousel";
import AboutUs from "../Components/LandingPageComponents/AboutUs";
import Services from "../Components/LandingPageComponents/Services";
import Testimonials from "../Components/LandingPageComponents/Testimonials";
import ContactUs from "../Components/LandingPageComponents/ContactUs";
import Headline from "../Components/LandingPageComponents/Headline";
import Card1 from "../Components/LandingPageComponents/Card1";
import Packages from "../Components/LandingPageComponents/Packages";
import Testimonials2 from "../Components/LandingPageComponents/Testimonials2";
import DemoCallCard from "../Components/LandingPageComponents/DemoCallCard";
import Card2 from "../Components/LandingPageComponents/Card2";
import AuditCallCard from "../Components/LandingPageComponents/AuditCallCard";

const LandingPage = () => {
  return (
    <div className="bg-white pt-[70px]">
      <Headline />

      {/* <Carousel /> */}
      <AboutUs />
      <Card1 />
      <Packages />
      <Testimonials2 />
      <DemoCallCard />
      <Card2 />
      <AuditCallCard />
      <Services />
      {/* <Testimonials />
      <ContactUs /> */}
    </div>
  );
};

export default LandingPage;
