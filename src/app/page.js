"use client";
import React from "react";
import NavBar from "@/components/navbar";
import Chat from "./chatPage/page";
import { auth } from "@/dbConfig/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
function Main() {
  const [user] = useAuthState(auth);
  // console.log(user);
  return (
    <body className="max-w-[728px] mx-auto text-center">
      <section className="flex flex-col bg-gray-100 shadow-xl border relative">
        <NavBar />
        {user ? <Chat /> : null}
      </section>
    </body>
  );
}
export default Main;
