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

  const [isMessageBoxOpen, setIsMessageBoxOpen] = useState(true);
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [userMessage, setUserMessage] = useState([]);
  const [shuffledMessages, setShuffledMessages] = useState([]);
  const [needsReshuffle, setNeedsReshuffle] = useState(false);
  const originalMessagesRef = useRef([]);

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
        originalMessagesRef.current = res.data;
        const shuffled = shuffleArray(res.data);
        setShuffledMessages(shuffled);
        indexRef.current = 0;
      }
    };

    fetchComments();
  }, []);

  useEffect(() => {
    let timeoutId;

    const showNextMessage = () => {
      if (indexRef.current < shuffledMessages.length) {
        setVisibleMessages((prev) => [
          ...prev,
          shuffledMessages[indexRef.current],
        ]);
        indexRef.current += 1;

        const randomDelay = Math.floor(Math.random() * 3000) + 3000;
        timeoutId = setTimeout(showNextMessage, randomDelay);
      } else {
        // Wait for reshuffle via useEffect
        setNeedsReshuffle(true);
      }
    };

    if (shuffledMessages.length > 0 && !needsReshuffle) {
      showNextMessage();
    }

    return () => clearTimeout(timeoutId);
  }, [shuffledMessages, needsReshuffle]);

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

  useEffect(() => {
    if (needsReshuffle) {
      const reshuffled = shuffleArray(originalMessagesRef.current);
      setShuffledMessages(reshuffled);
      indexRef.current = 0;
      setNeedsReshuffle(false);
    }
  }, [needsReshuffle]);

  return (
    <div
      className={`absolute bottom-0 right-[20px] ${
        isMessageBoxOpen
          ? "h-[350px] bg-black/80"
          : "h-[40px] bg-[#f7dbb6] border-b-0 border border-black"
      } w-[280px] rounded-t-xl z-50`}
    >
      <div className="relative h-full w-full font-mono flex justify-start items-center">
        {isMessageBoxOpen ? (
          <div className="h-full w-full overflow-y-scroll border border-black rounded-t-xl flex flex-col justify-between">
            <div
              onClick={() => setIsMessageBoxOpen(false)}
              className="px-3  py-1 flex flex-col  justify-between items-center text-white items-center border-b border-white "
            >
              <span className="text-white font-sans text-sm mb-4">
                3L+ Students Joined{" "}
              </span>
              <div className="flex  justify-between w-full">
                <span className="text-green-500 text-base font-serif">
                  Live People
                </span>
                <span className="h-2 rounded-full bg-green"></span>
                <FaTimes />
              </div>
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
              className="p-3 flex flex-col overflow-y-auto space-y-2 h-[220px] font-serif"
            >
              <AnimatePresence>
                {visibleMessages.map((msgObj, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                    className="bg-gray-100 px-3 py-2 rounded-2xl text-sm text-gray-800 w-fit"
                  >
                    <span className="text-xs font-bold underline font-sans">
                      {msgObj?.name}
                    </span>
                    <br />
                    <span className="text-xs">{msgObj?.comment}</span>
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
                className="bg-white w-full p-2 border-r-0 rounded-l-2xl border border-black"
              />
              <div className="h-full">
                <div
                  onClick={handleUserMessage}
                  className="aspect-[1/1] h-full flex justify-center items-center p-2 bg-black text-white text-xl rounded-sm rounded-r-lg cursor-pointer"
                >
                  <FaPaperPlane />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <span className="pl-4">Live Peoples</span>
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
