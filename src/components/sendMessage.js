import React, { useState } from "react";
import { auth, db } from "@/dbConfig/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState(""); //input state
  const sendMessage = async (e) => {
    //sends message to the database
    e.preventDefault();
    if (input === "") {
      //prevents sending empty message
      alert("Please enter a message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser; //gets the current user
    await addDoc(collection(db, "messages"), {
      //creates a new document in the collection
      text: input,
      name: displayName,
      uid, //user id
      period: serverTimestamp(), //timestamp
    });
    setInput(""); //makes input empty after sending message
    scroll.current.scrollIntoView({ behavior: "smooth" }); //scrolls to the bottom of the page
  };

  return (
    <form
      onSubmit={sendMessage}
      className="h-14 w-full max-w-[728px] flex text-xl absolute bottom-0"
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)} //updates input state
        className="w-full text-xl p-3 bg-gray-900 text-white outline-none border-none"
        type="text"
        placeholder="Type a message"
      />
      <button
        className="w-[28%] bg-green-500 text-white font-bold"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default SendMessage;
