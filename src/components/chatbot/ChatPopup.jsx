import React, { useState, useEffect } from "react";
import ChatWindow from "./ChatWindow";
import "./chatbot.css";

const ChatPopup = ({ open, onClose }) => {

  const [visible, setVisible] = useState(open);
  const [closing, setClosing] = useState(false);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (open) setVisible(true);
  }, [open]);

  const handleClose = () => {

    setClosing(true);

    setTimeout(() => {
      setClosing(false);
      setVisible(false);
      onClose();
    }, 250);

  };

  if (!visible) return null;

  return (

    <div className={`chat-overlay ${closing ? "fade-out" : ""}`}>

      <div className={`chat-card ${closing ? "animate-close" : "animate-open"}`}>

        {/* HEADER */}

        <div className="chat-header">

          <div className="ai-status">

            <span className={`status-dot ${status}`}></span>
            <span>OrionMind</span>

          </div>

          <button className="close-btn" onClick={handleClose}>
            ✕
          </button>

        </div>

        {/* BODY */}

        <div className="chat-body">

          <ChatWindow setStatusExternal={setStatus} />

        </div>

      </div>

    </div>

  );

};

export default ChatPopup;
