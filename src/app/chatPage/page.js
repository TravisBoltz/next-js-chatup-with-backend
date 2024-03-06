"use client";
import Message from "@/components/message";
import React from "react";
import SendMessage from "@/components/sendMessage";
import { useRef, useState, useEffect } from "react";
import { db } from "@/dbConfig/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
const Chat = () => {
  const [messages, setMessages] = useState([]); // message state
  const scroll = useRef();

  //updates in realtime from firebase
  useEffect(() => {
    //where to look for the data
    const q = query(collection(db, "messages"), orderBy("period"));
    //onSnapshot is a listener that listens to the changes in the database
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <>
      <main className="flex flex-col p-[10px] relative">
        {/* chat message */}
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      {/* Send Message */}
      <SendMessage scroll={scroll} />
      {/* scrolls to the bottom of the page */}
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
