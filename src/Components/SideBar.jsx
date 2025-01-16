import { Fragment } from "react";
import styled from "styled-components";

export default function SideBar() {
  return (
    <SideBarContainer>
      <aside className="asideBar">
        <h2 className="hHeading">Your Chats</h2>
        <button className="addButton">
          + Add New Chat
        </button>
      </aside>
    </SideBarContainer>
  );
}

const SideBarContainer = styled.div`
  .asideBar {
    height: 100vh;
    width: 18rem;
    padding: 4rem 2rem;
    color: rgb(226 232 240);
    background-color: rgb(51 65 85);
  }
  
  .hHeading {
    font-size: 1.25rem;
    color: white;
    margin: 0 0 2rem 0;
  }

  .addButton {
    padding: 0.5rem 0.25rem;
    border: 1px;
    border-color: black;
    border-radius: 0.375rem;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    background-color: #206A5D;
  }
  .addButton:hover {
    background-color: #379777
  }
`