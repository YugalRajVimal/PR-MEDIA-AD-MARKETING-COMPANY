import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Layout from "./Layout";
import PackagePage from "./Pages/PackagePage";

const App = () => {
  const packages = [
    {
      title: "₹99 Lakh Package – Premium Sales Acceleration",
      description:
        "For businesses looking to boost sales and real estate listings with expert marketing.",
      features: [
        {
          image: "/packages/13.png",
          description:
            "High-Quality CGI Ads – Visually appealing ads to capture attention.",
        },
        {
          image: "/packages/14.png",
          description:
            "Instagram & Google Ads Management – Professionally managed ad campaigns.",
        },
        {
          image: "/packages/15.png",
          description:
            "AI-Optimized Ad Targeting – Smart audience targeting for better conversions.",
        },
        {
          image: "/packages/16.png",
          description:
            "High-Ticket Sales Funnel Creation – Custom sales funnel to maximize revenue.",
        },
        {
          image: "/packages/17.png",
          description:
            "Premium Copywriting & Ad Creatives – Persuasive content to drive action.",
        },
        {
          image: "/packages/18.png",
          description:
            "Performance Analytics & Optimization – Regular reports and data-driven improvements.",
        },
        {
          image: "/packages/19.png",

          description:
            "Retargeting & Lead Nurturing – Recapture lost leads and increase conversions.",
        },
      ],
      management_fee:
        "For our ₹99 Lakh package, we charge an 8% management fee.",
    },
    {
      title: "₹3.99 Crore Package – High-Value Business & Real Estate Growth",
      description:
        "For businesses and real estate projects aiming for market dominance.",
      features: [
        {
          image: "/packages/07.png",
          description:
            "Storytelling Ads That Capture Hearts – We craft emotionally compelling ads because emotions sell, not just ads.",
        },
        {
          image: "/packages/08.png",
          description:
            "Best-Level Marketing Strategies – Advanced techniques for high-ticket sales.",
        },
        {
          image: "/packages/09.png",
          description:
            "High-Engagement Social Media Growth – Increase organic reach and brand authority.",
        },
        {
          image: "/packages/10.png",
          description:
            "Influencer & Celebrity Marketing – Collaborate with top influencers for credibility.",
        },
        {
          image: "/packages/11.png",
          description:
            "Luxury Brand Positioning & Market Domination – Position your brand as the leader.",
        },
        {
          image: "/packages/12.png",
          description:
            "Guaranteed ROI-Driven Approach – Focused on measurable success.",
        },
      ],
      management_fee:
        "For our ₹3.99 Crore package, we charge a 7% management fee.",
    },
    {
      title: "₹4.99 Crore Package – Ultra-Luxury Brand Domination",
      description:
        "For elite real estate projects and luxury brands aiming for success.",
      features: [
        {
          image: "/packages/01.png",
          description:
            "Emotion-Driven Storytelling Ads – We create powerful, narrative-driven campaigns that don’t just sell but deeply connect, turning audiences into loyal buyers.",
        },
        {
          image: "/packages/02.png",
          description:
            "Exclusive Celebrity & Influencer Endorsements – Strategic partnerships to boost trust.",
        },
        {
          image: "/packages/03.png",
          description:
            "Advanced PR & Media Features – Get featured in top-tier media publications.",
        },
        {
          image: "/packages/04.png",
          description:
            "Hollywood-Level CGI Ad Production – Unparalleled ad quality for ultra-premium positioning.",
        },
        {
          image: "/packages/05.png",
          description:
            "Exclusive Access to High-Net-Worth Clients – Direct marketing to top-tier buyers.",
        },
        {
          image: "/packages/06.png",
          description:
            "Full-Scale Digital Domination Strategy – A complete, hands-on marketing takeover.",
        },
      ],
      management_fee:
        "For our ₹4.99 Crore package, we charge a 5% management fee.",
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route
            path="/package1"
            element={<PackagePage packageDetails={packages[2]} />}
          />
          <Route
            path="/package2"
            element={<PackagePage packageDetails={packages[1]} />}
          />
          <Route
            path="/package3"
            element={<PackagePage packageDetails={packages[0]} />}
          />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/services" element={<Services />} /> */}
          {/* Catch-all route to redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
