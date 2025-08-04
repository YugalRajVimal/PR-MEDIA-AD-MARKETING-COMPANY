import React, { useEffect, useRef, useState } from "react";
import { FaPaperPlane, FaTimes, FaExpandAlt, FaEye } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useCustomerAuth } from "../../context/CustomerAuthContext";
import { toast } from "react-toastify";
// Utility to get a random number in a given range
const getRandomInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Get the min/max based on India timezone
const getRangeForCurrentTime = () => {
  const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
  const hour = new Date(now).getHours();

  if (hour === 1) return [60000, 80000];
  if (hour === 2) return [30000, 60000];
  if (hour === 3) return [20000, 30000];
  if (hour === 4) return [10000, 20000];
  if (hour === 5) return [5000, 10000];
  if (hour === 6) return [500, 5000];
  if (hour === 7) return [500, 10000];
  if (hour === 8) return [10000, 30000];
  if (hour === 9) return [30000, 50000];
  if (hour === 10) return [50000, 70000];
  if (hour === 11) return [70000, 90000];
  if (hour === 12) return [90000, 110000];
  if (hour === 13) return [110000, 130000];
  if (hour === 14) return [130000, 150000];
  if (hour === 15) return [150000, 165000];
  if (hour === 16) return [165000, 180000];
  if (hour === 17) return [180000, 200000];
  if (hour === 18) return [200000, 220000];
  if (hour === 19) return [200000, 220000];
  if (hour === 20) return [180000, 200000];
  if (hour === 21) return [150000, 180000];
  if (hour === 22) return [120000, 150000];
  if (hour === 23) return [100000, 120000];
  return [80000, 100000]; // 11PM to 1AM
};

const MessageBox = ({ setIsCustomerLoginVisible }) => {
  const messagesContainerRef = useRef(null);
  const messagesEndRef = useRef(null);
  const [isUserScrolledUp, setIsUserScrolledUp] = useState(false);
  const { isCustomerAuthenticated, getAllNameCommentAndImagesCombined } =
    useCustomerAuth();

  const [isMessageBoxOpen, setIsMessageBoxOpen] = useState(true);
  const [isExpandToFullScreen, setIsExpandToFullScreen] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [userMessage, setUserMessage] = useState([]);
  const [shuffledMessages, setShuffledMessages] = useState([]);
  const [needsReshuffle, setNeedsReshuffle] = useState(false);
  const originalMessagesRef = useRef([]);

  const [livePeopleCount, setLivePeopleCount] = useState(70000);
  const [livePeopleCountText, setLivePeopleCountText] = useState("70k");

  useEffect(() => {
    const formatCount = (count) => {
      if (count >= 1000) {
        return (count / 1000).toFixed(1).replace(/\.0$/, "") + "k";
      } else {
        return count.toString();
      }
    };

    setLivePeopleCountText(formatCount(livePeopleCount));
  }, [livePeopleCount]);

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

    const getDelayBasedOnTime = () => {
      const now = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
      });
      const hour = new Date(now).getHours();

      // 01:00 AM - 08:00 AM → 1.5 to 2 minutes
      if (hour >= 1 && hour < 8)
        return Math.floor(Math.random() * 30000) + 90000;

      // 08:00 AM - 10:00 AM → 8 to 10 seconds
      if (hour >= 8 && hour < 10)
        return Math.floor(Math.random() * 2000) + 8000;

      // 10:00 AM - 09:00 PM → 2 to 4 seconds
      if (hour >= 10 && hour < 21)
        return Math.floor(Math.random() * 2000) + 2000;

      // 09:00 PM - 01:00 AM → 15 to 20 seconds
      return Math.floor(Math.random() * 5000) + 15000;
    };

    const showNextMessage = () => {
      if (indexRef.current < shuffledMessages.length) {
        setVisibleMessages((prev) => [
          ...prev,
          shuffledMessages[indexRef.current],
        ]);
        indexRef.current += 1;

        const dynamicDelay = getDelayBasedOnTime();
        timeoutId = setTimeout(showNextMessage, dynamicDelay);
      } else {
        setNeedsReshuffle(true); // when all messages shown
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

  useEffect(() => {
    const updateCount = () => {
      const [min, max] = getRangeForCurrentTime();
      const randomCount = getRandomInRange(min, max);
      setLivePeopleCount(randomCount);
    };

    updateCount(); // Initial update
    const interval = setInterval(updateCount, 5 * 60 * 1000); // Every 5 minutes

    return () => clearInterval(interval);
  }, []);

  // const handleUserMessage = () => {
  //   if (!isCustomerAuthenticated) {
  //     toast.error("Please Login before sending a message");
  //     return;
  //   }
  //   if (!userMessage.trim()) return;

  //   setVisibleMessages((prev) => [
  //     ...prev,
  //     { name: "YRV", comment: userMessage },
  //   ]);
  //   setUserMessage("");
  // };

  const handleUserMessage = () => {
    if (!isCustomerAuthenticated) {
      toast.error("Please Login before sending a message");
      return;
    }

    const trimmedMessage = userMessage.trim();
    if (!trimmedMessage) return;

    // Open in WhatsApp
    const phone = "+917500010933";
    const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(
      trimmedMessage
    )}`;
    window.open(whatsappURL, "_blank");

    // Also show in chat UI if needed
    // setVisibleMessages((prev) => [
    //   ...prev,
    //   { name: "YRV", comment: trimmedMessage },
    // ]);
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

  const handleToggleFullScreen = () => {
    setIsExpandToFullScreen((prevState) => !prevState);
  };

  const handleToggleBoxScreen = () => {
    setIsMessageBoxOpen((prevState) => !prevState);
    setIsExpandToFullScreen(false);
  };

  return (
    <div
      className={`fixed  z-40 border border-black
    ${
      isExpandToFullScreen
        ? "w-full h-full bottom-[22px] pt-[22px] bg-black/80 right-0 pt-2"
        : isMessageBoxOpen
        ? "w-[280px] h-[350px] bg-black/80 bottom-[22px] right-[20px] rounded-t-xl rounded-b-md border border-black"
        : "w-[280px] h-[40px] bg-black/80 bottom-[22px] border-b-0 right-[20px] rounded-t-xl border border-black"
    }`}
    >
      <div className="relative h-full w-full font-mono flex justify-start items-center">
        {isMessageBoxOpen ? (
          <div className="h-full w-full overflow-y-scroll   flex flex-col justify-between">
            <div className="px-3  py-1 flex flex-col  justify-between items-center text-white items-center border-b border-white ">
              <span className="text-white text-sm mb-4 font-aeris">
                3L+ Students Joined{" "}
              </span>
              <div className="flex  justify-between w-full">
                <span className="text-green-500 text-base font-serif flex items-center gap-2">
                  Live People
                  <span className="h-[6px] w-[6px] rounded-full bg-green-500 blink mr-2"></span>
                  <FaEye className="text-sm text-green-500" />
                  <span className="text-sm font-aeris">
                    {livePeopleCountText}
                  </span>
                </span>

                <div className="flex gap-2 items-center">
                  {isExpandToFullScreen && (
                    <button onClick={() => setIsExpandToFullScreen(false)}>
                      <FaTimes className="text-white" />
                    </button>
                  )}
                  {isMessageBoxOpen && !isExpandToFullScreen && (
                    <FaTimes onClick={() => setIsMessageBoxOpen(false)} />
                  )}
                  <FaExpandAlt onClick={handleToggleFullScreen} />
                </div>
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
              className="p-3 flex flex-col overflow-y-auto space-y-2 min-h-[220px] font-serif"
            >
              <AnimatePresence>
                {visibleMessages.map((msgObj, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                    className="relative bg-gray-100 px-3 py-2 rounded-t-2xl rounded-br-2xl text-sm text-gray-800 w-fit"
                  >
                    <div className="absolute bottom-0 -left-[8px] w-0 h-0 border-t-[12px] border-l-[12px] border-t-gray-100 border-l-transparent rounded-sm rotate-[90deg]"></div>

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
            <div className="relative w-full h-[50px] border-t border-black flex justify-end items-center p-1">
              {!isCustomerAuthenticated && (
                <div
                  onClick={() => {
                    if (!isCustomerAuthenticated) {
                      setIsCustomerLoginVisible(true);
                    }
                  }}
                  className="absolute h-full w-full z-50"
                ></div>
              )}
              <input
                type="text"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                disabled={!isCustomerAuthenticated}
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
          <div className="px-3  py-1 flex flex-col  justify-between items-center text-white items-center">
            <span className="text-green-500 text-base font-serif flex items-center gap-2">
              Live People
              <span className="h-[6px] w-[6px] rounded-full bg-green-500 blink"></span>
            </span>
            <div
              onClick={() => setIsMessageBoxOpen(true)}
              className="absolute top-1/2 right-[5px] -translate-x-1/2 -translate-y-1/2"
            >
              <FaExpandAlt />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBox;
