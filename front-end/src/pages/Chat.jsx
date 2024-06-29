import React, { useState, useEffect, useRef } from "react";

import "./Chat.css";

const Chat = () => {
  const [user, setUser] = useState({ id: "", name: "" });
  const [messages, setMessages] = useState([]);
  const [loginSubmitted, setLoginSubmitted] = useState(false);
  const [messageInput, setMessageInput] = useState("");

  const chatMessagesRef = useRef(null);
  const websocketRef = useRef(null);

  useEffect(() => {
    if (loginSubmitted) {
      // Set up WebSocket connection
      const ws = new WebSocket("ws://localhost:8080");
      websocketRef.current = ws;

      ws.onopen = () => {
        console.log("WebSocket connected");
      };

      ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        setMessages((prevMessages) => [...prevMessages, message]);
        scrollChatToBottom();
      };

      return () => {
        ws.close();
      };
    }
  }, [loginSubmitted]);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const userName = event.target.elements.username.value.trim();
    if (userName) {
      setUser({ id: crypto.randomUUID(), name: userName });
      setLoginSubmitted(true);
    }
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    const messageContent = messageInput.trim();
    if (messageContent) {
      const message = {
        userId: user.id,
        userName: user.name,
        content: messageContent,
      };
      websocketRef.current.send(JSON.stringify(message));
      setMessageInput("");
    }
  };

  const scrollChatToBottom = () => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  };

  return (
    <section className="container">
      {!loginSubmitted && (
        <section className="login">
          <h2>Login</h2>
          <form className="login__form" onSubmit={handleLoginSubmit}>
            <input
              type="text"
              className="login__input"
              placeholder="Seu nome"
              name="username"
              required
            />
            <button type="submit" className="login__button">
              Entrar
            </button>
          </form>
        </section>
      )}

      {loginSubmitted && (
        <section className="chat">
          <section className="chat__messages" ref={chatMessagesRef}>
            {messages.map((msg, index) => (
              <div key={index} className="message">
                <span className="message__user">{msg.userName}: </span>
                <span className="message__content">{msg.content}</span>
              </div>
            ))}
          </section>
          <form className="chat__form" onSubmit={handleSendMessage}>
            <input
              type="text"
              className="chat__input"
              placeholder="Digite uma mensagem"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              required
            />
            <button type="submit" className="chat__button">
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </section>
      )}
    </section>
  );
};

export default Chat;
