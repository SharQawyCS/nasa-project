import React, { useState } from "react";
import { MdSmartToy } from "react-icons/md"; // Import the smart toy icon
import { FaPaperPlane } from "react-icons/fa"; // Import the send icon
import { RiCloseLine } from "react-icons/ri"; // Import the close icon
import { BiComment } from "react-icons/bi"; // Import the comment icon
import "./Chatbot.css"; // Import CSS

const Chatbot = () => {
  const [userMsg, setUserMsg] = useState(""); // To handle user input
  const [messages, setMessages] = useState([
    {
      text: "Hi, I'm a smart toy. How can I help you today?",
      type: "Incoming",
    },
  ]); // Initial messages
  const [isChatVisible, setChatVisible] = useState(false); // State to manage chat visibility

  // Create a chat element for rendering
  const createChatElem = (msg, type) => {
    return { text: msg, type, id: Date.now() }; // Return an object with the message
  };

  // Handle sending the chat message
  const handleChat = () => {
    const trimmedMsg = userMsg.trim();
    if (trimmedMsg !== "") {
      setMessages((prev) => [
        ...prev,
        createChatElem(trimmedMsg, "Outgoing"),
      ]);
      setUserMsg(""); // Clear input after sending

      // Simulate thinking response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          createChatElem("Thinking...", "Incoming"),
        ]);
      }, 600);
    }
  };

  return (
    <div>
      <button className="chatbot-toggler" onClick={() => setChatVisible((prev) => !prev)}>
        {isChatVisible ? (
          <RiCloseLine size={24} color="white" />
        ) : (
          <BiComment size={24} color="white" />
        )}
      </button>
      {isChatVisible && (
        <div className="chatbot show-chatbot">
          <header>
            <h2>Chatbot</h2>
            <span className="close-icon" onClick={() => setChatVisible(false)}>
              <RiCloseLine size={24} color="white" />
            </span>
          </header>
          <ul className="chatbox">
            {messages.map((msg) => (
              <li key={msg.id} className={`chat ${msg.type}`}>
                {msg.type === "Incoming" && (
                  <MdSmartToy size={32} color="darkblue" />
                )}
                <p>{msg.text}</p>
              </li>
            ))}
          </ul>
          <div className="chat-input">
            <textarea
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              placeholder="Enter a message"
              required
            ></textarea>
            <span id="send-btn" onClick={handleChat}>
              <FaPaperPlane size={24} color="darkblue" />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;