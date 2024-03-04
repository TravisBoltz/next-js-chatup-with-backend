import { auth } from "@/dbConfig/firebase";
import React from "react";
const style = {
  message:
    "flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full",
  sent: "bg-blue-500 text-white flex-row-reverse text-end float-right rounded-br-full",
  received: "bg-gray-300 text-black float-left rounded-br-full",
};
const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `$(style.sent)`
      : `$(style.received)`;
  return (
    <div>
      <div className={`$(style.message) $(style.messageClass)`}>
        <p className="fixed mt-[-4rem] text-gray-600 text-xs">{message.name}</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
