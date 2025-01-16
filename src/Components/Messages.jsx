import styled from "styled-components";

export default function Messages({ own, message }) {
  return (
    <MessageContainer>
      <div className={own ? "message own" : "message"}>
        <p className="text">
          {message.text}
        </p>
        <div className="time">1:10pm</div>
      </div>
    </MessageContainer>
  );
}

const MessageContainer = styled.div`
  .message {
    display: flex;
    flex-direction: column;
  }

  .text {
    padding: 1rem;
    max-width: 60%;
    border-radius: 20px;
    background-color: yellow;
  }

  .time {
    color: white;
    font-size: 12px;
  }

  .message.own {
    align-items: flex-end;
    padding-right: 1rem;
  }

  .message.own .text {
    background-color: white;
    color: black;
  }
`;
