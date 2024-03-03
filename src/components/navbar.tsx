'use client';
import React from "react";
import SignIn from "@/app/signin/page";
import { auth } from "@/dbConfig/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import SignOut from "@/app/signout/page";
const NavBar = () => {
  const [user] = useAuthState(auth);
  console.log(user); //show logged in user's details
  return (
    <div className="bg-gray-800 flex justify-between items-center p-4">
      <h1 className="text-white text-3xl">Chat App</h1>
      {user ? <SignOut /> : <SignIn />}
      {/* if user is log in, show sign out button or else sign in button */}

    </div>
  );
};

export default NavBar;
