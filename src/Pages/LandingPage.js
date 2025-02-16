import React from "react";
import Carousel from "../Components/LandingPageComponents/Carousel";
import AboutUs from "../Components/LandingPageComponents/AboutUs";
import Services from "../Components/LandingPageComponents/Services";
import Testimonials from "../Components/LandingPageComponents/Testimonials";
import ContactUs from "../Components/LandingPageComponents/ContactUs";


const LandingPage = () => {
  return (
    <div>
      <Carousel />
      <AboutUs />
      <Services />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default LandingPage;
