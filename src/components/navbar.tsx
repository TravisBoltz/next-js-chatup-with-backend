import SignIn from "@/app/signin/page";
// import auth from "@/dbconfig/firebase";
// import useAuthstate from "react-firebase-hooks/auth";
const NavBar = () => {
  // const [user] = useAuthstate(auth);
  return (
    <div className="bg-gray-800 flex justify-between items-center p-4">
      <h1 className="text-white text-3xl">Chat App</h1>
      <SignIn />
    </div>
  );
};

export default NavBar;
