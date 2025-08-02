import React, { useEffect, useRef, useState } from "react";
import { FaPaperPlane, FaTimes, FaExpandAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useCustomerAuth } from "../../context/CustomerAuthContext";
import { toast } from "react-toastify";

const MessageBox = () => {
  const messagesContainerRef = useRef(null);
  const messagesEndRef = useRef(null);
  const [isUserScrolledUp, setIsUserScrolledUp] = useState(false);
  const { isCustomerAuthenticated, getAllNameCommentAndImagesCombined } =
    useCustomerAuth();

  const [isMessageBoxOpen, setIsMessageBoxOpen] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [userMessage, setUserMessage] = useState([]);
  const [shuffledMessages, setShuffledMessages] = useState([]);
  const indexRef = useRef(0);

  const shuffleArray = (arr) => {
    return arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  useEffect(() => {
    const fetchComments = async () => {
      const res = await getAllNameCommentAndImagesCombined();
      if (res && res.data) {
        const shuffled = shuffleArray(res.data);
        setShuffledMessages(shuffled);
        indexRef.current = 0;
      }
    };

    fetchComments();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < shuffledMessages.length) {
        setVisibleMessages((prev) => [
          ...prev,
          shuffledMessages[indexRef.current],
        ]);
        indexRef.current += 1;
      } else {
        // Reshuffle and restart
        const reshuffled = shuffleArray(shuffledMessages);
        setShuffledMessages(reshuffled);
        setVisibleMessages([]);
        indexRef.current = 0;
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [shuffledMessages]);

  useEffect(() => {
    if (!isUserScrolledUp) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [visibleMessages]);

  const handleUserMessage = () => {
    if (!isCustomerAuthenticated) {
      toast.error("Please Login before sending a message");
      return;
    }
    if (!userMessage.trim()) return;

    setVisibleMessages((prev) => [
      ...prev,
      { name: "YRV", comment: userMessage },
    ]);
    setUserMessage("");
  };

  return (
    <div
      className={`absolute bottom-0 right-[20px] ${
        isMessageBoxOpen
          ? "h-[350px] bg-[#f7dbb6]/80"
          : "h-[40px] bg-[#f7dbb6] border-b-0 border border-black"
      } w-[280px] rounded-t-md z-50`}
    >
      <div className="relative h-full w-full font-mono flex justify-start items-center">
        {isMessageBoxOpen ? (
          <div className="h-full w-full overflow-y-scroll border border-black rounded-t-md flex flex-col justify-between">
            <div
              onClick={() => setIsMessageBoxOpen(false)}
              className="px-3 py-3 flex justify-between items-center border-b border-black"
            >
              <span>Active Peoples</span>
              <FaTimes />
            </div>

            {/* Messages */}
            <div
              ref={messagesContainerRef}
              onScroll={() => {
                const container = messagesContainerRef.current;
                if (!container) return;
                const isAtBottom =
                  container.scrollHeight - container.scrollTop <=
                  container.clientHeight + 5;
                setIsUserScrolledUp(!isAtBottom);
              }}
              className="p-3 flex flex-col overflow-y-auto space-y-2 h-[220px]"
            >
              <AnimatePresence>
                {visibleMessages.map((msgObj, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                    className="bg-gray-100 px-3 py-2 rounded-md text-sm text-gray-800 w-fit"
                  >
                    <span className="text-xs font-bold underline">
                      {msgObj?.name}
                    </span>
                    <br />
                    <span>{msgObj?.comment}</span>
                    {msgObj?.image && (
                      <div className="w-full">
                        <img
                          src={`${process.env.REACT_APP_API_URL}/${msgObj.image}`}
                          alt="commented-img"
                          className="w-full mt-2"
                          onLoad={() => {
                            if (!isUserScrolledUp) {
                              messagesEndRef.current?.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Input Box */}
            <div className="w-full h-[50px] border-t border-black flex justify-end items-center p-1">
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                className="bg-white w-full p-2 border-r-0 rounded-l-md border border-black"
              />
              <div className="h-full">
                <div
                  onClick={handleUserMessage}
                  className="aspect-[1/1] h-full flex justify-center items-center p-2 bg-black text-white text-xl rounded-sm cursor-pointer"
                >
                  <FaPaperPlane />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <span className="pl-4">Active Peoples</span>
            <div
              onClick={() => setIsMessageBoxOpen(true)}
              className="absolute top-1/2 right-[5px] -translate-x-1/2 -translate-y-1/2"
            >
              <FaExpandAlt />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MessageBox;
