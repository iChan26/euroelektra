"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  HiOutlineX,
  HiPaperAirplane,
  HiOutlinePaperClip,
  HiOutlineEmojiHappy,
} from "react-icons/hi";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

export default function ChatWidget({ language, translations, changeLanguage }) {


  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [attachedFile, setAttachedFile] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showButton, setShowButton] = useState(false);
  
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Load translations based on browser language
  useEffect(() => {
  if (!translations?.chat) return;

  // Set initial bot greeting when translations are ready
  setMessages([
    {
      type: "bot",
      text: translations.chat.bot_greeting || "Hi there! How can we assist you today?",
      timestamp: new Date(),
    },
  ]);
}, [translations]);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowButton(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowEmojiPicker(false);
  };

  const sendMessage = () => {
    if (!input.trim() && !attachedFile) return;

    const newMessages = [];

    if (input.trim()) {
      newMessages.push({
        type: "user",
        text: input,
        timestamp: new Date(),
      });
    }

    if (attachedFile) {
      const fileURL = URL.createObjectURL(attachedFile);
      newMessages.push({
        type: "user",
        text: `📎 ${attachedFile.name}`,
        file: fileURL,
        isImage: attachedFile.type.startsWith("image/"),
        timestamp: new Date(),
      });
    }

    setMessages((prev) => [...prev, ...newMessages]);
    setInput("");
    setAttachedFile(null);
    setShowEmojiPicker(false);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text:
            translations?.chat?.bot_reply ||
            "Thanks for the message. Our team is offline 💤 We will contact you back as soon as we can 🙂",
          timestamp: new Date(),
        },
      ]);
    }, 1000);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setAttachedFile(file);
  };

  const handleEmojiSelect = (emoji) => {
    setInput((prev) => prev + emoji.native);
    setShowEmojiPicker(false);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const formatTime = (date) =>
    new Date(date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  // Return null if translations are not yet loaded
  if (!translations) return null;

  return (
   <>
  {showButton && (
    <button
      onClick={toggleChat}
      className={`fixed bottom-[60px] sm:bottom-20 right-4 sm:right-6 z-50 w-16 h-16 sm:w-[100px] sm:h-[100px] p-1 flex items-center justify-center transition-all duration-500 ${
        isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
      } animate-fade-in`}
    >
      <Image
        src="/svg/chats-widget.gif"
        alt="Chat Widget"
        width={100}
        height={100}
        className="rounded-full w-full h-full object-cover"
      />
    </button>
  )}

  {isOpen && (
    <div className="fixed bottom-4 right-2 sm:bottom-6 sm:right-6 z-50 w-[95vw] sm:w-[360px] max-w-[95vw] bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col border border-gray-200 animate-fade-in">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2987bf] to-[#00B4DB] text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image src="/svg/profile-bg.png" alt="Logo" width={32} height={32} className="rounded-full" />
          <div className="text-sm leading-tight">
            <p className="font-semibold">{translations.chat?.company || "EuroElektra"}</p>
            <p className="text-xs text-white/80">{translations.chat?.send_us_msg || "Send us a message"}</p>
            <p className="text-xs text-white/80">{translations.chat?.happy_to_answer || "Happy to answer you later"}</p>
          </div>
        </div>
        <button onClick={toggleChat}>
          <HiOutlineX className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Messages */}
      <div className="h-[50vh] sm:h-[450px] px-3 py-3 space-y-3 bg-white text-sm overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thumb-rounded">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex items-end space-x-2 ${
              msg.type === "user" ? "justify-end" : "justify-start"
            } animate-fade-in`}
          >
            {msg.type === "bot" && (
              <Image src="/svg/profile-bg.png" alt="Bot" width={28} height={28} className="rounded-full border" />
            )}
            <div
              className={`px-3 py-2 rounded-lg max-w-[80%] relative ${
                msg.type === "user"
                  ? "bg-[#2987bf] text-white rounded-br-none"
                  : "bg-gray-100 text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.isImage ? (
                <img src={msg.file} alt="attachment" className="w-full rounded-lg mb-1" />
              ) : (
                <p>{msg.text}</p>
              )}
              <span className="text-[10px] block text-right mt-1 opacity-60">{formatTime(msg.timestamp)}</span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t p-2 bg-white">
        <div className="flex items-center gap-2 relative">
          <input
            type="file"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="text-gray-500 hover:text-[#2987bf]"
          >
            <HiOutlinePaperClip className="w-5 h-5" />
          </button>

          <div className="relative flex-1">
            <input
              type="text"
              className="w-full px-3 pr-10 py-2 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#2987bf]"
              placeholder={translations.chat?.placeholder || "Type a message..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#2987bf]"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            >
              <HiOutlineEmojiHappy className="w-5 h-5" />
            </button>
          </div>

          <button
            onClick={sendMessage}
            className="text-[#2987bf] hover:text-[#1f6fa5]"
          >
            <HiPaperAirplane className="w-5 h-5 rotate-45" />
          </button>

          {/* Emoji Picker */}
          {showEmojiPicker && (
           <div className="absolute bottom-14 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 z-50 w-[90vw] sm:w-auto sm:max-w-[18rem] md:max-w-[20rem] lg:max-w-[22rem] bg-white rounded-xl shadow-xl overflow-hidden">
    <Picker
                data={data}
                onEmojiSelect={handleEmojiSelect}
                theme="light"
                previewPosition="none"
                emojiSize={24}
                emojiButtonSize={36}
                navPosition="top"
                maxFrequentRows={2}
              />
            </div>
          )}
        </div>

        {/* File preview */}
        {attachedFile && (
          <div className="mt-2 text-xs text-gray-500 truncate">
            📎 {attachedFile.name}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="text-[11px] text-center text-gray-400 py-1 bg-white border-t">
        {translations.chat?.powered_by || "Powered by"}{" "}
        <span className="font-medium text-[#2987bf]">
          {translations.chat?.company || "EuroElektra"}
        </span>
      </div>
    </div>
  )}
</>

  );
}
