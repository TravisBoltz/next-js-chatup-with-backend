import React, { useState } from "react";
import { auth, db } from "@/dbConfig/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import EmojiPicker from "@/components/emojiPicker"; // Importing EmojiPicker component

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState(""); //input state
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); // State to toggle emoji picker visibility

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

  const handleEmojiClick = (emoji) => {
    setInput(input + emoji); // Append selected emoji to the input
  };

  return (
    <form
      onSubmit={sendMessage}
      className="h-14 w-full flex text-xl fixed bottom-0 z-10 bg-white shadow-xl"
    >
      {/* Emoji Picker Button */}
      <button
        className="w-[15%] bg-gray-900 text-white font-bold"
        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        type="button"
      >
        😀
      </button>
      {/* Emoji Picker */}
      {showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)} //updates input state
        className="w-full text-xl p-3 bg-gray-900 text-white outline-none border-none"
        type="text"
        placeholder="Type a message"
      />
      {/* Send Button */}
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
