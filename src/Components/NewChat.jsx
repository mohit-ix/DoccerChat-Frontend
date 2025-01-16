import { useEffect, useRef, useState } from "react";

import axios from "axios";
import styled from "styled-components";

import Messages from "./Messages";

let count = 0;

export default function NewChat() {
  const [newMessage, setNewMessage] = useState();
  const scrollRef = useRef();
  const [messages, setMessages] = useState([]);

  const handleInput = async (event) => {
    setNewMessage(event.target.value);
  }

  const handleSubmit = async () => {
    const messageToSent = newMessage;
    setNewMessage("");
    const message = {
      sender: "user",
      text: messageToSent,
    };

    count += 1;
    setMessages((prevMessages) => {
      return [...prevMessages, message];
    });

    const res = await axios.post("http://localhost:8000/chat", {
      content: messageToSent,
      thread_id: "room123"
    });

    const resMessage = {
      sender: "AI",
      text: res.data.message,
    }

    setMessages((prevMessages) => {
      return [...prevMessages, resMessage];
    });
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

  return (
    <NewChatContainer>
      {/* <div className="screenSection"> */}
      <div className="chatSection">
        {messages.map((message) => {
          return (
            <div ref={scrollRef}>
              <Messages
                key={count}
                message={message}
                own={message.sender == "user"}
              />
            </div>
          );
        })}
      </div>
      <div className="inputSection">
        <input
          className="inputMessage"
          type="text"
          placeholder="Type..."
          onChange={handleInput}
          value={newMessage}
        />
        <button className="sendButton" onClick={handleSubmit}>
          Send
        </button>
      </div>
      {/* </div> */}
    </NewChatContainer>
  );
}

const NewChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 0 2rem;
  background-color: black;

  .chatSection {
    height: 100%;
    padding: 2rem 0 0 0;
    overflow-y: scroll;
  }

  .inputSection {
    display: flex;
    align-self: flex-end;
    width: 100%;
    padding: 2rem 0;
    gap: 0.5rem;
  }

  .inputMessage {
    width: 100%;
    border-radius: 1rem;
    padding: 1rem;
    color: white;
    background-color: rgb(30 41 59);
  }

  .sendButton {
    color: white;
    padding: 0.5rem 1rem;
  }
`;
