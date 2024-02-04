// 'use client'
// import Image from "next/image";
// import 'firebase/firestore';
// import 'firebase/auth';
// import { firebase } from "firebase/app";
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';
// // import firebase from 'firebase/app';
// // firebase.initializeApp({
// //   apiKey: "AIzaSyAxt9OrXPdpS2kAf0piZ35ESGbvckstQWQ",
// //   authDomain: "me-and-you-c8882.firebaseapp.com",
// //   projectId: "me-and-you-c8882",
// //   storageBucket: "me-and-you-c8882.appspot.com",
// //   messagingSenderId: "603517917478",
// //   appId: "1:603517917478:web:3d5e322047ca2697eb49e7",

// // })

// // const auth = firebase.auth();
// // const firestore = firebase.firestore();
// import { app, db, auth, firebase } from "@/dbconfig/firebase";

// export default function Home() {
//   const [user] = useAuthState(auth);

//   function SignIn() {
//     const signInWithGoogle = () => {
//       const provider = new firebase.auth.GoogleAuthProvider();
//       auth.signInWithPopup(provider);
//     }

//     return (
//       <button onClick={signInWithGoogle}>Sign in with Google</button>
//     );
//   }

//   function SignOut() {
//     return auth.currentUser && (
//       <button onClick={() => auth.signOut()}>Sign Out</button>
//     );
//   }

//   function ChatRoom() {
//     // Implement your ChatRoom component logic here
//   }

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <section>
//         {user ? <ChatRoom /> : <SignIn />}
//       </section>
//     </main>
//   );
// }
import React from "react";
import NavBar from "@/components/navbar";

function Main() {
  return (
    <body className="max-w-[728px] mx-auto text-center">
      <NavBar />

      <section className="flex flex-col h-[90vh] bg-gray-100 shadow-xl border relative"></section>
    </body>
  )
}
export default Main;