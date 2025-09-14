import React, { useEffect, useRef, useState } from "react";
import {
  FaPaperPlane,
  FaTimes,
  FaExpandAlt,
  FaEye,
  FaCheckCircle,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useCustomerAuth } from "../../context/CustomerAuthContext";
import { toast } from "react-toastify";
import { IoLogoWhatsapp } from "react-icons/io";
import { X } from "lucide-react";
// Utility to get a random number in a given range

const MessageBox2 = ({ setIsCustomerLoginVisible }) => {
  const [isSignInOpen, setIsSignInOpen] = useState(true);
  const messagesContainerRef = useRef(null);
  const messagesEndRef = useRef(null);
  const [isUserScrolledUp, setIsUserScrolledUp] = useState(false);
  const {
    name,
    isCustomerAuthenticated,
    getAllNameCommentAndImagesCombined,
    isCustomerApproved,
    setIsUserApproved,
    isUserApproved,
  } = useCustomerAuth();

  useEffect(() => {
    const fetchLiveCount = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/api/customer/live-count`
        );
        const data = await res.json();
        setLivePeopleCount(data?.livePeopleCount);
      } catch (err) {
        console.error("Failed to fetch live count", err);
      }
    };

    fetchLiveCount(); // Initial fetch
    const interval = setInterval(fetchLiveCount, 10000); // Repeat every 10s

    return () => clearInterval(interval);
  }, []);

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

  useEffect(() => {
    // const fetchComments = async () => {
    //   const res = await getAllNameCommentAndImagesCombined();
    //   if (res && res.data) {
    //     originalMessagesRef.current = res.data; // ✅ FIXED: Store original
    //     const shuffled = shuffleArray(res.data);
    //     setShuffledMessages(shuffled);
    //     indexRef.current = 0;
    //   }
    // };

    const checkUserApproval = async () => {
      await isUserApproved();
    };

    // fetchComments();
    checkUserApproval();
  }, []);

  // const socket = new WebSocket("ws://localhost:8090");

  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = new WebSocket("wss://api.theprmedia.com");
    // socketRef.current = new WebSocket("ws://localhost:8080");

    socketRef.current.addEventListener("open", () => {
      socketRef.current.send("Hello from client!");
    });

    socketRef.current.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      setVisibleMessages((prev) => [...prev, data]);
    });

    return () => {
      socketRef.current.close();
    };
  }, []);

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

    if (!isCustomerApproved) {
      const phone = "+917500030415";
      const whatsappURL = `https://wa.me/${phone}?text=Hi, I am ready for the paid training}`;
      window.open(whatsappURL, "_blank");

      return;
    }

    const trimmedMessage = userMessage.trim();
    if (!trimmedMessage) return;

    // Also show in chat UI if needed
    setVisibleMessages((prev) => [
      ...prev,
      { name: name, comment: trimmedMessage },
    ]);
    setUserMessage("");
  };

  const handleToggleFullScreen = () => {
    setIsExpandToFullScreen((prevState) => !prevState);
  };

  const handleGoogleLogin = () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/auth/google`;
  };

  return (
    <>
      {!isCustomerAuthenticated && (
        <AnimatePresence>
          {!isCustomerAuthenticated && isSignInOpen && (

            <motion.div
              initial={{ y: -100, opacity: 0 }} // start above
              animate={{ y: 0, opacity: 1 }} // slide into view
              exit={{ y: -100, opacity: 0 }} // slide back up when removed
              transition={{ delay: 3, duration: 0.5, ease: "easeOut" }}
              className="absolute top-0 py-[20px] h-screen bg-black/50  w-screen flex items-center justify-center z-50 "
            >
              <div className="relative rounded-2xl flex justify-center  items-center shadow-4xl h-full w-screen  flex flex-col items-center">
                <div
                  onClick={() => setIsSignInOpen(false)}
                  className="absolute top-[10px] right-[20px] text-white"
                >
                  <X />
                </div>
                <button
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center w-fit px-10 py-4 border border-gray-300 rounded-md shadow-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                >
                  <img
                    src="/google.png"
                    alt="Google"
                    className="h-6 w-6 mr-2"
                  />
                  Sign in with Google
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
      <div
        className={`fixed  z-40 border border-black
  ${
    isExpandToFullScreen
      ? "w-full h-full bottom-[22px] pt-[22px] bg-black/80 right-0 pt-2"
      : isMessageBoxOpen
      ? "w-[280px] h-[360px] bg-black/80 bottom-[22px] right-[20px] rounded-t-xl rounded-b-md border border-black"
      : "w-[280px] h-[40px] bg-black/80 bottom-[22px] border-b-0 right-[20px] rounded-t-xl border border-black"
  }`}
      >
        <div className="relative h-full w-full font-mono flex justify-start items-center">
          {isMessageBoxOpen ? (
            <div className="h-full w-full overflow-y-scroll   flex flex-col justify-between">
              <div className="px-3  py-1 flex flex-col  justify-between items-center text-white items-center border-b border-white ">
                <div className="flex justify-between w-full  mt-1 items-center">
                  <span className="text-white text-sm  font-aeris">
                    3Lakh+ Students Joined{" "}
                  </span>
                  <a
                    href={`http://wa.me/+917500030415`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoWhatsapp className="text-2xl text-[#08c241] drop-shadow-[0_0_10px_#08c241] animate-pulse" />
                  </a>
                </div>
                <p className="text-xs mb-1">Message! Start Now!</p>

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
                      className="relative text-sm text-gray-800 w-fit"
                    >
                      <div className=" relative bg-gray-100 px-3 py-2 rounded-t-2xl rounded-br-2xl ">
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
                      </div>

                      <div className="pr-2 mt-2 mb-2 flex w-full text-xs text-white justify-end items-center gap-1">
                        <p>Verified by The PR Media</p>
                        <span>
                          <FaCheckCircle className="text-blue-500 text-xs" />
                        </span>
                      </div>
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
                  placeholder="Chat with students..."
                  className="bg-white text-sm w-full p-2 border-r-0 rounded-l-2xl border border-black"
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
    </>
  );
};

export default MessageBox2;
