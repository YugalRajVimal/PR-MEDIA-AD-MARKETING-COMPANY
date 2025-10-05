import React, { useEffect, useRef, useState } from "react";
import {
  FaPaperPlane,
  FaTimes,
  FaExpandAlt,
  FaEye,
  FaCheckCircle,
  FaWhatsapp,
  FaWhatsappSquare,
  FaUserCircle,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import { IoLogoWhatsapp } from "react-icons/io";
import { X } from "lucide-react";
import { useCustomerAuth } from "../../../context/CustomerAuthContext";

const StudentsFeedback = () => {
  const [data, setData] = useState();

  // const socket = new WebSocket("ws://localhost:8090");

  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = new WebSocket("wss://api.theprmediaa.com");
    // socketRef.current = new WebSocket("ws://localhost:8080");

    socketRef.current.addEventListener("open", () => {
      socketRef.current.send("Hello from client!");
    });

    socketRef.current.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);

      setData(data);
    });

    return () => {
      socketRef.current.close();
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center py-10 px-4 ">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#3B2E22] font-bold tracking-tight">
        Student Feedback
      </h2>

      <div className="max-w-xl w-full rounded-2xl p-6 transition-transform hover:-translate-y-1">
        <h3 className="text-xl font-semibold text-[#3B2E22] mb-3 text-center">
          {data?.name}
        </h3>
        <p className="text-gray-700 text-base leading-relaxed text-center ">
          “{data?.comment}”
        </p>
      </div>
    </div>
  );
};

export default StudentsFeedback;
