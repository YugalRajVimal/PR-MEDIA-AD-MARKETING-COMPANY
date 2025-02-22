import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import { gsap } from "gsap";
import { useMediaQuery } from "react-responsive";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);

  // Media query to detect if the screen is larger than md (768px)
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });

  useEffect(() => {
    // Reset menu state and remove animations on large screens
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        height: "auto",
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.fromTo(
        linksRef.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    }
  }, [isMenuOpen, isLargeScreen]);

  return (
    <nav className=" px-6 py-2 flex justify-between items-center gap-4 relative border border-zinc-400 border-b-2 sticky top-0 z-20 backdrop-blur-md">
      <div
        ref={logoRef}
        className="flex flex-col justify-center items-center text-center font-mono"
      >
        <a href="/">
          <h1 className="text-lg sm:text-xl">The PR</h1>
          <span className="text-xl sm:text-3xl -mt-2">Media</span>
        </a>
      </div>

      {/* Hamburger Icon for Mobile */}
      {/* <button
        className="block md:hidden z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu className="h-8 w-8" />
      </button> */}

      {/* Navigation Links */}
      {/* <ul
        ref={menuRef}
        className={`overflow-hidden ${
          isMenuOpen || isLargeScreen ? "block" : "hidden"
        } absolute top-full left-0 w-full bg-white shadow-md md:flex md:static md:w-auto md:bg-transparent md:shadow-none gap-6 z-40`}
      >
        {["Home", "About", "Services", "Contact Us"].map((linkText, index) => (
          <li
            key={linkText}
            ref={(el) => (linksRef.current[index] = el)}
            className="p-2 md:p-0"
          >
            <a
              href={`/${linkText.toLowerCase().replace(/\s+/g, "")}`}
              className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
            >
              {linkText}
            </a>
          </li>
        ))}
      </ul> */}
      <div className="text-center text-xl">
        <h5>Premium</h5>
        <h5>Ads</h5>
      </div>
    </nav>
  );
};

export default Nav;
