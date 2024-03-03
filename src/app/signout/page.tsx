'use client';
import { signOut } from "firebase/auth";
import { auth } from "@/dbConfig/firebase";
const LogOut = () => {
    const signOut = () => {
        // signOut{ auth };

    };
};
const SignOut = () => {
    return (
        <div className=" px-4 py-2 bg-white text-gray-700 border border-gray-700 rounded font-bold text-sm shadow-md hover:bg-gray-100 focus:outline-none focus:border-blue-500 focus:shadow-outline">
            <button onClick={() => auth.signOut()}>
                LogOut
            </button>
        </div>
    );
};

export default SignOut;
