import React, { useState, useRef, useEffect } from "react";
import "./chatbot.css";

const ChatWindow = ({ setStatusExternal }) => {

  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello 👋" },
    { sender: "bot", text: "Before we talk, tell me who are you ?" },
    { sender: "bot", text: "Recruiter / Friend / Teacher" },
  ]);

  const [input, setInput] = useState("");
  const [role, setRole] = useState(null);
  const [typing, setTyping] = useState(false);
  const [status, setStatus] = useState("idle");

  const bottomRef = useRef(null);
  const inputRef = useRef(null);


  // AUTO SCROLL
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);


  // focus input
  useEffect(() => {
    inputRef.current?.focus();
  }, [messages]);


  // STREAM TEXT
  const streamText = (text, callback) => {

    let i = 0;

    const interval = setInterval(() => {

      callback(text.slice(0, i));

      i++;

      if (i > text.length) {

        clearInterval(interval);

        setTyping(false);
        setStatus("idle");

        if (setStatusExternal) {
          setStatusExternal("idle");
        }

      }

    }, 15);

  };


  // SEND MESSAGE
  const sendMessage = async () => {

    if (!input.trim()) return;

    const userMsg = input;

    setMessages(m => [
      ...m,
      { sender: "user", text: userMsg }
    ]);

    setInput("");


    // ROLE VALIDATION
    if (!role) {

      const r = userMsg.toLowerCase().trim();

      let detectedRole = null;

      if (r.includes("recruiter")) detectedRole = "recruiter";
      else if (r.includes("friend")) detectedRole = "friend";
      else if (r.includes("teacher")) detectedRole = "teacher";

      if (!detectedRole) {

        setTyping(true);
        setStatus("thinking");

        const reply =
          "Please select role first 🙂\nRecruiter / Friend / Teacher";

        setMessages(m => [
          ...m,
          { sender: "bot", text: "" }
        ]);

        streamText(reply, (t) => {
          setMessages(m => {
            const copy = [...m];
            copy[copy.length - 1].text = t;
            return copy;
          });
        });

        return;
      }

      setRole(detectedRole);

      setTyping(true);
      setStatus("thinking");

      const reply =
        `Okay👍 You are my ${detectedRole}. Now you can ask about my Portfolio.`;

      setMessages(m => [
        ...m,
        { sender: "bot", text: "" }
      ]);

      streamText(reply, (t) => {
        setMessages(m => {
          const copy = [...m];
          copy[copy.length - 1].text = t;
          return copy;
        });
      });

      return;
    }


    // API CALL
    try {

      setTyping(true);
      setStatus("thinking");

      if (setStatusExternal) {
        setStatusExternal("thinking");
      }

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMsg,
          role: role,
        }),
      });

      const data = await res.json();

      const reply = data.reply || "Error";

      setMessages(m => [
        ...m,
        { sender: "bot", text: "" }
      ]);

      streamText(reply, (t) => {

        setMessages(m => {

          const copy = [...m];
          copy[copy.length - 1].text = t;

          return copy;

        });

      });

    } catch (err) {

      setTyping(false);
      setStatus("error");

      if (setStatusExternal) {
        setStatusExternal("error");
      }

      setMessages(m => [
        ...m,
        { sender: "bot", text: "Error connecting AI" }
      ]);

    }

  };


  // ENTER KEY
  const handleKeyDown = (e) => {

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }

  };


  return (

    <div className="chat-window">

      <div className="chat-messages">

        {messages.map((msg, i) => (

          <div
            key={i}
            className={
              msg.sender === "user"
                ? "msg user"
                : "msg bot"
            }
          >

            {msg.text}

            {typing && i === messages.length - 1 && (
              <span className="cursor">|</span>
            )}

          </div>

        ))}

        {typing && (

          <div className="msg bot thinking">

            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>

          </div>

        )}

        <div ref={bottomRef} />

      </div>


      <div className="chat-input-box">

        <textarea
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type message..."
          rows={1}
        />

        <button onClick={sendMessage}>
          Send
        </button>

      </div>

    </div>

  );

};

export default ChatWindow;