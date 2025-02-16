import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

const Layout = () => {
  return (
    <div className="relative bg-gray-100 w-screen">
      <Nav />

      {/* <LandingPageBackground /> */}

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
