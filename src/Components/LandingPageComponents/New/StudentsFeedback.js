// import React, { useEffect, useRef, useState } from "react";
// import {
//   FaPaperPlane,
//   FaTimes,
//   FaExpandAlt,
//   FaEye,
//   FaCheckCircle,
//   FaWhatsapp,
//   FaWhatsappSquare,
//   FaUserCircle,
// } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import { toast } from "react-toastify";
// import { IoLogoWhatsapp } from "react-icons/io";
// import { X } from "lucide-react";
// import { useCustomerAuth } from "../../../context/CustomerAuthContext";

// const StudentsFeedback = () => {
//   const [data, setData] = useState();

//   // const socket = new WebSocket("ws://localhost:8090");

//   const socketRef = useRef(null);

//   useEffect(() => {
//     socketRef.current = new WebSocket("wss://api.theprmediaa.com");
//     // socketRef.current = new WebSocket("ws://localhost:8080");

//     socketRef.current.addEventListener("open", () => {
//       socketRef.current.send("Hello from client!");
//     });

//     socketRef.current.addEventListener("message", (event) => {
//       const data = JSON.parse(event.data);

//       setData(data);
//     });

//     return () => {
//       socketRef.current.close();
//     };
//   }, []);

//   return (
//     <div className="w-full flex flex-col items-center pt-10 px-4 ">
//       <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#3B2E22] font-bold tracking-tight">
//         Student Feedback
//       </h2>

//       <div className="max-w-xl w-full rounded-2xl p-6 transition-transform hover:-translate-y-1">
//         <h3 className="text-xl font-semibold text-[#3B2E22] mb-3 text-center">
//           {data?.name}
//         </h3>
//         <p className="text-gray-700 text-base leading-relaxed text-center ">
//           “{data?.comment}”
//         </p>
//       </div>
//     </div>
//   );
// };

// export default StudentsFeedback;

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";

const StudentsFeedback = () => {
  const [data, setData] = useState(null);
  const [prevData, setPrevData] = useState(null);
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = new WebSocket("wss://api.theprmediaa.com");

    socketRef.current.addEventListener("open", () => {
      console.log("Connected to feedback stream");
      socketRef.current.send("Client connected to PR Media feedbacks.");
    });

    socketRef.current.addEventListener("message", (event) => {
      const newData = JSON.parse(event.data);
      setPrevData(data); // keep previous message
      setData(newData); // set new one
    });

    return () => {
      socketRef.current.close();
    };
  }, [data]);

  return (
    <div className="w-full flex flex-col items-center pt-10 px-4 relative overflow-visible">
  <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#3B2E22]   font-serif tracking-tight mb-8">
    {/* Student Feedback */}
    Clients' Feedbacks 

  </h2>

  <div className="relative w-full z-50 max-w-md h-[130px] flex flex-col items-center justify-end overflow-visible">
    {/* AnimatePresence for smooth enter/exit */}
    <AnimatePresence>
      {prevData && (
        <motion.div
          key={`prev-${prevData.name}`}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: -100 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0, ease: "easeInOut" }}
          className="absolute inset-0 w-full flex flex-col items-center justify-center text-center"
        >
          <div className="relative w-[85%] sm:w-[60%] bg-gray-100 px-4 py-3 rounded-t-2xl rounded-br-2xl shadow-md mx-auto overflow-visible">
            <div className="absolute bottom-2 left-[-10px] w-0 h-0 border-t-[12px] border-l-[12px] border-t-gray-100 border-l-transparent rounded-sm rotate-[90deg]"></div>

            <h3 className="text-lg sm:text-xl font-semibold text-[#3B2E22]">
              {prevData.name}
            </h3>
            <p className="text-gray-700 italic text-sm sm:text-base max-w-xs mx-auto">
              “{prevData.comment}”
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>

    <AnimatePresence>
      {data && (
        <motion.div
          key={data.name}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <div className="relative bg-gray-100 px-4 py-3 rounded-t-2xl rounded-br-2xl shadow-md w-[90%] sm:w-[60%] mx-auto overflow-visible">
            <div className="absolute bottom-0 left-[-10px] w-0 h-0 border-t-[12px] border-l-[12px] border-t-gray-100 border-l-transparent rounded-sm rotate-[90deg]"></div>

            <h3 className="text-lg sm:text-xl font-semibold text-[#3B2E22]">
              {data.name}
            </h3>
            <p className="text-gray-700 italic text-sm sm:text-base max-w-xs mx-auto">
              “{data.comment}”
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>

  {/* Subtle gradient fade for realism */}
  {/* <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-[#FAF7F3] to-transparent pointer-events-none"></div> */}
</div>

  );
};

export default StudentsFeedback;
