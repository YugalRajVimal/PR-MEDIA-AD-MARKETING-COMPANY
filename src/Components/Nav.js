// import { useState, useEffect, useRef } from "react";
// import { Menu } from "lucide-react";
// import { gsap } from "gsap";
// import { useMediaQuery } from "react-responsive";

// const Nav = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const menuRef = useRef(null);
//   const logoRef = useRef(null);
//   const linksRef = useRef([]);

//   // Media query to detect if the screen is larger than md (768px)
//   const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });

//   useEffect(() => {
//     // Reset menu state and remove animations on large screens
//     if (isMenuOpen) {
//       gsap.to(menuRef.current, {
//         height: "auto",
//         duration: 0.5,
//         ease: "power2.out",
//       });

//       gsap.fromTo(
//         linksRef.current,
//         { opacity: 0, y: -20 },
//         {
//           opacity: 1,
//           y: 0,
//           stagger: 0.1,
//           duration: 0.5,
//           ease: "power2.out",
//         }
//       );
//     }
//   }, [isMenuOpen, isLargeScreen]);

//   return (
//     <nav className="h-[70px] px-6 py-2 flex justify-between items-center gap-4  fixed top-0 left-0 w-full z-20 backdrop-blur-md">
//       <div
//         ref={logoRef}
//         className="flex flex-col justify-center items-center text-center"
//       >
//         <a href="/">
//           <h1 className="text-lg sm:text-xl">The PR</h1>
//           <span className="text-xl sm:text-3xl -mt-2 font-semibold">Media</span>
//         </a>
//       </div>

//       {/* Hamburger Icon for Mobile */}
//       {/* <button
//         className="block md:hidden z-50"
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//       >
//         <Menu className="h-8 w-8" />
//       </button> */}

//       {/* Navigation Links */}
//       {/* <ul
//         ref={menuRef}
//         className={`overflow-hidden ${
//           isMenuOpen || isLargeScreen ? "block" : "hidden"
//         } absolute top-full left-0 w-full bg-[#dbc3ab] shadow-md md:flex md:static md:w-auto md:bg-transparent md:shadow-none gap-6 z-40`}
//       >
//         {["Home", "About", "Services", "Contact Us"].map((linkText, index) => (
//           <li
//             key={linkText}
//             ref={(el) => (linksRef.current[index] = el)}
//             className="p-2 md:p-0"
//           >
//             <a
//               href={`/${linkText.toLowerCase().replace(/\s+/g, "")}`}
//               className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
//             >
//               {linkText}
//             </a>
//           </li>
//         ))}
//       </ul> */}
//       <div className="text-center text-xl">
//         <h5>Premium</h5>
//         <h5>Ads</h5>
//       </div>
//     </nav>
//   );
// };

// export default Nav;

// import { useState, useEffect, useRef } from "react";
// import { Menu } from "lucide-react";
// import { gsap } from "gsap";
// import { useMediaQuery } from "react-responsive";

// const Nav = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const menuRef = useRef(null);
//   const logoRef = useRef(null);
//   const linksRef = useRef([]);

//   // Media query to detect if the screen is larger than md (768px)
//   const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });

//   useEffect(() => {
//     // Track Scroll Position
//     const handleScroll = () => {
//       setScrollPosition(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     // Reset menu state and remove animations on large screens
//     if (isMenuOpen) {
//       gsap.to(menuRef.current, {
//         height: "auto",
//         duration: 0.5,
//         ease: "power2.out",
//       });

//       gsap.fromTo(
//         linksRef.current,
//         { opacity: 0, y: -20 },
//         {
//           opacity: 1,
//           y: 0,
//           stagger: 0.1,
//           duration: 0.5,
//           ease: "power2.out",
//         }
//       );
//     }
//   }, [isMenuOpen, isLargeScreen]);

//   return (
//     <nav
//       className={`h-[70px] px-6 py-2 flex justify-between items-center gap-4 fixed top-0 left-0 w-full z-20 backdrop-blur-md transition-colors duration-300 ${
//         scrollPosition > 0 ? "text-[#FFD700]" : "text-black"
//       }`}
//     >
//       <div
//         ref={logoRef}
//         className="flex flex-col justify-center items-center text-center"
//       >
//         <a href="/">
//           <h1 className="text-lg sm:text-xl">The PR</h1>
//           <span className="text-xl sm:text-3xl -mt-2 font-semibold">Media</span>
//         </a>
//       </div>

//       <div className="text-center text-xl">
//         <h5>Premium</h5>
//         <h5>Ads</h5>
//       </div>
//     </nav>
//   );
// };

// export default Nav;

// import { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { useMediaQuery } from "react-responsive";

// const Nav = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [isAtBottom, setIsAtBottom] = useState(false);
//   const menuRef = useRef(null);
//   const logoRef = useRef(null);
//   const linksRef = useRef([]);

//   // Media query to detect if the screen is larger than md (768px)
//   const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });

//   useEffect(() => {
//     // Track Scroll Position
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const documentHeight = document.body.offsetHeight;

//       setScrollPosition(scrollY);
//       setIsAtBottom(windowHeight + scrollY >= documentHeight - 1);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     // Reset menu state and remove animations on large screens
//     if (isMenuOpen) {
//       gsap.to(menuRef.current, {
//         height: "auto",
//         duration: 0.5,
//         ease: "power2.out",
//       });

//       gsap.fromTo(
//         linksRef.current,
//         { opacity: 0, y: -20 },
//         {
//           opacity: 1,
//           y: 0,
//           stagger: 0.1,
//           duration: 0.5,
//           ease: "power2.out",
//         }
//       );
//     }
//   }, [isMenuOpen, isLargeScreen]);

//   return (
//     <nav
//       className={`h-[70px]  px-6 py-2 flex justify-between items-center gap-4 fixed top-0 left-0 w-full z-20 backdrop-blur-md transition-colors duration-300 ${
//         scrollPosition === 0 || isAtBottom ? "text-black" : "text-[#FFD700]"
//       }`}
//     >
//       <div
//         ref={logoRef}
//         className="flex flex-col justify-center items-center text-center"
//       >
//         <a href="/">
//           <h1 className="text-lg sm:text-xl">The PR</h1>
//           <span className="text-xl sm:text-3xl -mt-2 font-semibold">Media</span>
//         </a>
//       </div>

//       <div className="text-center text-xl">
//         <h5>Premium</h5>
//         <h5>Ads</h5>
//       </div>
//     </nav>
//   );
// };

// export default Nav;

// import { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { useMediaQuery } from "react-responsive";

// const Nav = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [isAtBottom, setIsAtBottom] = useState(false);
//   const menuRef = useRef(null);
//   const logoRef = useRef(null);
//   const linksRef = useRef([]);

//   // Media query to detect if the screen is larger than md (768px)
//   const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });

//   useEffect(() => {
//     // Track Scroll Position
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const documentHeight = document.body.offsetHeight;

//       setScrollPosition(scrollY);
//       setIsAtBottom(windowHeight + scrollY >= documentHeight - 1);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     // Reset menu state and remove animations on large screens
//     if (isMenuOpen) {
//       gsap.to(menuRef.current, {
//         height: "auto",
//         duration: 0.5,
//         ease: "power2.out",
//       });

//       gsap.fromTo(
//         linksRef.current,
//         { opacity: 0, y: -20 },
//         {
//           opacity: 1,
//           y: 0,
//           stagger: 0.1,
//           duration: 0.5,
//           ease: "power2.out",
//         }
//       );
//     }
//   }, [isMenuOpen, isLargeScreen]);

//   return (
//     <nav
//       className={`h-[70px] px-6 py-2 flex justify-between items-center gap-4 fixed top-0 left-0 w-full z-20 backdrop-blur-md transition-colors duration-300 ${
//         scrollPosition === 0 || isAtBottom ? "text-black" : "text-[#ffd700]"
//       }`}
//     >
//       <div
//         ref={logoRef}
//         className="flex flex-col justify-center items-center text-center"
//       >
//         <a href="/">
//           {/* <h1 className="text-lg sm:text-xl">The PR</h1>
//           <span className="text-xl sm:text-3xl -mt-2 font-semibold">Media</span> */}
//           <img src="logo1.svg" className="h-40 object-contain" />
//         </a>
//       </div>

//       <div className="text-center text-xl">
//         <h5>Premium</h5>
//         <h5>Ads</h5>
//       </div>
//     </nav>
//   );
// };

// export default Nav;

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useMediaQuery } from "react-responsive";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const menuRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);

  // Media query to detect if the screen is larger than md (768px)
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });

  useEffect(() => {
    // Track Scroll Position
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setScrollPosition(scrollY);
      setIsAtBottom(windowHeight + scrollY >= documentHeight - 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav
      className="h-[70px] px-6 py-2 bg-[#dbc3ab] flex justify-between items-center gap-4 fixed top-0 left-0 w-full z-20 backdrop-blur-md transition-colors duration-300"
      style={{
        color: scrollPosition === 0 || isAtBottom ? "black" : "#FFD700",
      }}
    >
      <div
        ref={logoRef}
        className="flex flex-col justify-center items-center text-center"
      >
        <a href="/">
          <img src="logo1.svg" className="h-40 object-contain" alt="Logo" />
        </a>
      </div>

      <div className="text-center text-xl">
        <h5>Premium</h5>
        <h5>Ads</h5>
      </div>
    </nav>
  );
};

export default Nav;
