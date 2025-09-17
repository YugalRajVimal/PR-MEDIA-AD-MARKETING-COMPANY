import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Plus, MessageSquare, ArrowLeft } from "lucide-react";

export default function ChatRooms() {
  const [rooms, setRooms] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const wsRef = useRef(null);

  // ✅ Fetch chat rooms
  useEffect(() => {
    async function fetchRooms() {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/chat`);
        const data = await res.json();
        setRooms(data);
      } catch (err) {
        console.error("Failed to fetch chats:", err);
      }
    }
    fetchRooms();
  }, []);

  // ✅ Fetch messages for selected room
  useEffect(() => {
    if (!selectedId) return;
    async function fetchMessages() {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/api/chat/${selectedId}`
        );
        const data = await res.json();
        setMessages(data.privateChats || []);
      } catch (err) {
        console.error("Failed to fetch messages:", err);
      }
    }
    fetchMessages();
  }, [selectedId]);

  // ✅ Setup WebSocket
  useEffect(() => {
    const ws = new WebSocket("wss://api.theprmedia.com");
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(JSON.stringify({ type: "register", role: "admin" }));
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "new_message") {
        if (data.customerId === selectedId) {
          setMessages((m) => [...m, data.message]);
        }
        setRooms((prev) =>
          prev.map((r) =>
            r.customerId === data.customerId
              ? {
                  ...r,
                  lastMessage: data.message.text,
                  unread:
                    data.customerId === selectedId ? 0 : (r.unread || 0) + 1,
                }
              : r
          )
        );
      }
    };

    return () => ws.close();
  }, [selectedId]);

  // ✅ Search filter
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rooms;
    return rooms.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.lastMessage?.toLowerCase().includes(q)
    );
  }, [query, rooms]);

  // ✅ Send message
  async function sendMessage() {
    if (!input.trim() || !selectedId) return;
    const text = input.trim();
    setInput("");

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/chat/${selectedId}/messages`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sender: "admin", text }),
        }
      );
      const msg = await res.json();

    //   setMessages((m) => [...m, msg]);
      setRooms((prev) =>
        prev.map((r) =>
          r.customerId === selectedId
            ? { ...r, lastMessage: msg.text, unread: 0 }
            : r
        )
      );
    } catch (err) {
      console.error("Failed to send:", err);
    }
  }

  const selected = rooms.find((r) => r.customerId === selectedId) || null;

  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-md overflow-hidden flex flex-col lg:grid lg:grid-cols-3">
      {/* Sidebar (chat list) */}
      <div
        className={`${
          selectedId ? "hidden lg:block" : "block"
        } col-span-1 border-r px-4 py-4`}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold">Private Chats</h3>
            <span className="text-sm text-slate-400">({rooms.length})</span>
          </div>
          <button
            onClick={() => alert("New chat via API TBD")}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-sm"
          >
            <Plus size={14} />
            New
          </button>
        </div>

        <div className="mb-4">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search size={16} />
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="placeholder:text-slate-400 block bg-white w-full border border-slate-200 rounded-md py-2 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="Search people or message"
            />
          </label>
        </div>

        <div className="space-y-2 max-h-[70vh] overflow-auto pr-2">
          <AnimatePresence initial={false}>
            {filtered.map((room) => (
              <motion.button
                key={room.customerId}
                layout
                onClick={() => setSelectedId(room.customerId)}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors border hover:bg-slate-50 ${
                  selectedId === room.customerId
                    ? "bg-indigo-50 border-indigo-100"
                    : "border-transparent"
                }`}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center font-semibold text-indigo-700">
                  {room.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium truncate">{room.name}</p>
                    <p className="text-xs text-slate-400 ml-2">
                      {room.lastMessage ? room.time || "" : ""}
                    </p>
                  </div>
                  <p className="text-xs text-slate-500 truncate">
                    {room.lastMessage || "No messages yet"}
                  </p>
                </div>
                {room.unread > 0 && (
                  <div className="ml-2 flex items-center">
                    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold rounded-full bg-rose-500 text-white">
                      {room.unread}
                    </span>
                  </div>
                )}
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Chat Window */}
      <div
        className={`${
          selectedId ? "flex" : "hidden lg:flex"
        } col-span-2 flex-col p-6 min-h-[320px]`}
      >
        {selected ? (
          <>
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              {/* Back button (mobile only) */}
              <button
                onClick={() => setSelectedId(null)}
                className="lg:hidden p-2 rounded-full bg-slate-100 hover:bg-slate-200"
              >
                <ArrowLeft size={20} />
              </button>

              <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center text-xl font-semibold text-indigo-700">
                {selected.name[0]}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg">{selected.name}</h4>
                <div className="text-sm text-slate-500">Private conversation</div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 bg-slate-50 rounded-lg p-4 border border-slate-100 overflow-auto space-y-3">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[75%] px-3 py-2 rounded-lg text-sm ${
                    msg.sender === "admin"
                      ? "bg-indigo-600 text-white ml-auto"
                      : "bg-white border text-slate-700"
                  }`}
                >
                  {msg.text}
                  <div className="text-[10px] text-slate-400 mt-1 text-right">
                    {new Date(msg.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="pt-3 border-t flex items-center gap-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 rounded-full border border-slate-200 py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                placeholder={`Message ${selected.name}...`}
              />
              <button
                onClick={sendMessage}
                className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm"
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-slate-400">
            <div className="p-6 rounded-full bg-slate-100">
              <MessageSquare size={48} />
            </div>
            <div className="text-lg">Select a chat to start messaging</div>
          </div>
        )}
      </div>
    </div>
  );
}
