import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

const Layout = () => {
  return (
    <div className="relative bg-[#291f12] w-screen h-screen">
      <div className="">
        <Nav />

        {/* <LandingPageBackground /> */}

        <Outlet />

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
