import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import axios from "axios";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router";

const socket = io("http://localhost:5000");

export default function ChatBox() {
  const [message, setMessage] = useState("");
  const {user:currentUser}=useSelector((state)=>state.auth)
  const [chats, setChats] = useState([]);
  const [user, setUser] = useState(null);
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
// Replace with actual recipient
console.log('chat',chats)
  const scrollRef = useRef(null);

  useEffect(() => {
    if (currentUser && email) {
      setUser(currentUser);
      socket.emit("register", currentUser?.email);

      // Fetch past messages
      axios
        .get("http://localhost:5000/messages", {
          params: {
            user1: currentUser?.email,
            user2: email,
          },
        })
        .then((res) => setChats(res.data));
    }

    // Listen for messages
    socket.on("private_message", (msg) => {
      setChats((prev) => [...prev, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, [currentUser,email]);

  const sendChat = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const msgData = {
      senderEmail: currentUser?.email,
      receiverEmail: email,
      message,
    };

    socket.emit("private_message", msgData);
    setChats((prev) => [
      ...prev,
      { ...msgData, timeStamp: new Date().toISOString() },
    ]);
    setMessage("");
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  return (
    <div className="flex relative flex-col h-screen bg-white border">
      {/* Chat Header */}
      <div className="p-4 font-semibold text-lg border-b">
        Chat with {email}
      </div>

      {/* Chat messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {chats?.map((chat, index) => (
          <div
            key={index}
            className={`flex ${
              chat.senderEmail === user?.email ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-xl text-sm ${
                chat.senderEmail === user?.email
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-gray-100 text-black rounded-bl-none"
              }`}
            >
              {chat.message}
              <div className="text-xs text-gray-500 mt-1">
                {new Date(chat.timeStamp).toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
        <div ref={scrollRef} />
      </div>

      {/* Message input */}
      <form onSubmit={sendChat} className="flex items-center gap-2 p-3 border-t">
        <button type="button" className="text-xl text-gray-500">➕</button>
        <button type="button" className="text-xl text-gray-500">📷</button>
        <button type="button" className="text-xl text-gray-500">🎤</button>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Aa"
          className="flex-1 border rounded-full px-4 py-2 text-sm"
        />
        <button type="submit" className="text-xl text-blue-500">Send</button>
      </form>
    </div>
  );
}
