'use client';
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "@/dbConfig/firebase";
const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};
const SignIn = () => {
  return (
    <div className="flex justify-center">
      <button onClick={googleSignIn} className="flex items-center justify-center px-4 py-2 bg-white text-gray-700 border border-gray-700 rounded font-bold text-sm shadow-md hover:bg-gray-100 focus:outline-none focus:border-blue-500 focus:shadow-outline">
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo" className="h-5 mr-2" />
        Sign in with Google
      </button>
    </div>
  );
};

export default SignIn;
