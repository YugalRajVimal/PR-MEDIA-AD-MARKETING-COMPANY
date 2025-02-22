import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Layout from "./Layout";
import PackagePage from "./Pages/PackagePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/package1" element={<PackagePage packagePrice={"4.99 Crore"} />}/>
          <Route path="/package2" element={<PackagePage packagePrice={"99 Lakh"}/>}/>
          <Route path="/package3" element={<PackagePage packagePrice={"9 Lakh"}/>}/>
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
