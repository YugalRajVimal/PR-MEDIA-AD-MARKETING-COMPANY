import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Layout from "./Layout";
import PackagePage from "./Pages/PackagePage";

const App = () => {
  const packages = [
    {
      title: "₹9 Lakh Package – Premium Sales Acceleration",
      description:
        "For businesses looking to boost sales and real estate listings with expert marketing.",
      features: [
        {
          image: "cgi_ads_image.jpg",
          description:
            "High-Quality CGI Ads – Visually appealing ads to capture attention.",
        },
        {
          image: "ads_management_image.jpg",
          description:
            "Instagram & Google Ads Management – Professionally managed ad campaigns.",
        },
        {
          image: "ai_targeting_image.jpg",
          description:
            "AI-Optimized Ad Targeting – Smart audience targeting for better conversions.",
        },
        {
          image: "sales_funnel_image.jpg",
          description:
            "High-Ticket Sales Funnel Creation – Custom sales funnel to maximize revenue.",
        },
        {
          image: "copywriting_image.jpg",
          description:
            "Premium Copywriting & Ad Creatives – Persuasive content to drive action.",
        },
        {
          image: "analytics_image.jpg",
          description:
            "Performance Analytics & Optimization – Regular reports and data-driven improvements.",
        },
        {
          image: "retargeting_image.jpg",
          description:
            "Retargeting & Lead Nurturing – Recapture lost leads and increase conversions.",
        },
      ],
      management_fee:
        "For our ₹9 Lakh package, we charge an 8% management fee.",
    },
    {
      title: "₹99 Lakh Package – High-Value Business & Real Estate Growth",
      description:
        "For businesses and real estate projects aiming for market dominance.",
      features: [
        {
          image: "storytelling_ads_image.jpg",
          description:
            "Storytelling Ads That Capture Hearts – We craft emotionally compelling ads because emotions sell, not just ads.",
        },
        {
          image: "marketing_strategies_image.jpg",
          description:
            "Best-Level Marketing Strategies – Advanced techniques for high-ticket sales.",
        },
        {
          image: "social_media_growth_image.jpg",
          description:
            "High-Engagement Social Media Growth – Increase organic reach and brand authority.",
        },
        {
          image: "influencer_marketing_image.jpg",
          description:
            "Influencer & Celebrity Marketing – Collaborate with top influencers for credibility.",
        },
        {
          image: "luxury_brand_positioning_image.jpg",
          description:
            "Luxury Brand Positioning & Market Domination – Position your brand as the leader.",
        },
        {
          image: "roi_driven_image.jpg",
          description:
            "Guaranteed ROI-Driven Approach – Focused on measurable success.",
        },
      ],
      management_fee:
        "For our ₹99 Lakh package, we charge a 7% management fee.",
    },
    {
      title: "₹4.99 Crore Package – Ultra-Luxury Brand Domination",
      description:
        "For elite real estate projects and luxury brands aiming for success.",
      features: [
        {
          image: "emotion_storytelling_image.jpg",
          description:
            "Emotion-Driven Storytelling Ads – We create powerful, narrative-driven campaigns that don’t just sell but deeply connect, turning audiences into loyal buyers.",
        },
        {
          image: "exclusive_endorsements_image.jpg",
          description:
            "Exclusive Celebrity & Influencer Endorsements – Strategic partnerships to boost trust.",
        },
        {
          image: "pr_media_image.jpg",
          description:
            "Advanced PR & Media Features – Get featured in top-tier media publications.",
        },
        {
          image: "hollywood_cgi_image.jpg",
          description:
            "Hollywood-Level CGI Ad Production – Unparalleled ad quality for ultra-premium positioning.",
        },
        {
          image: "high_net_worth_clients_image.jpg",
          description:
            "Exclusive Access to High-Net-Worth Clients – Direct marketing to top-tier buyers.",
        },
        {
          image: "digital_domination_image.jpg",
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
