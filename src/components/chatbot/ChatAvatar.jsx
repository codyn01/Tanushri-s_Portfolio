import React, { useState } from "react";
import ChatPopup from "./ChatPopup";
import "./chatbot.css";

const ChatAvatar = () => {

  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <>
      <div
        className="chat-avatar-wrapper"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >

        {/* Tooltip */}
        {hover && (
          <div className="chat-tooltip">
            Click to talk with me 👋
          </div>
        )}

        {/* Avatar */}
        <img
          src="/avatar.png"
          alt="avatar"
          className="chat-avatar"
          onClick={() => setOpen(true)}
        />

      </div>

      <ChatPopup
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default ChatAvatar;
