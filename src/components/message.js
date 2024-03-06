import { auth } from "@/dbConfig/firebase";
import React from "react";

const style = {
  message:
    "flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full",
  sent: " bg-green-500  text-white flex-row-reverse text-end float-right rounded-br-full",
  received: "bg-blue-500 text-black float-left rounded-br-full",
};

const Message = ({ message }) => {
  // Determine the message class based on the sender
  const messageClass =
    message.uid === auth.currentUser.uid ? style.sent : style.received;

  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        {/* Display sender's name */}
        <p className="mt-[-4rem] text-gray-600 text-xs">{message.name}</p>

        {/* Display message content */}
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
