import React from "react";

function ChatMessage({ name, message }) {
  return (
    <div className=" flex gap-2">
      {/* <div> */}

      <img src="" alt="usericon"></img>
      <span>{name}</span>
      <span>{message}</span>

      {/* </div> */}
    </div>
  );
}

export default ChatMessage;
