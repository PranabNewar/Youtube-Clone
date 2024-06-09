import React from "react";
import User from "../assets/png/user.png";

function Comment({ comments }) {
  return (
    <>
      <div className="w-full flex flex-col border-[1px] border-[#000] p-4  ">
        <div className="flex gap2">
          <img src={User} alt="user" className="w-5 h-5"></img>
          <h1>{comments.name}</h1>
        </div>
        <h6>{comments.comment}</h6>
      </div>
    </>
  );
}

export default Comment;
