import React from "react";
import ChatMessage from "./ChatMessage";

function LiveChat() {
  return (
    <div className=" p-2  bg-slate-50 border w-[27.54rem] h-[32rem]">
      <ChatMessage name="unknown" message="hii how are you" />
      <ChatMessage name="unknown" message="hii how are you" />
      <ChatMessage name="unknown" message="hii how are you" />
      <ChatMessage name="unknown" message="hii how are you" />
      <ChatMessage name="unknown" message="hii how are you" />
      <ChatMessage name="unknown" message="hii how are you" />
    </div>
  );
}

export default LiveChat;
