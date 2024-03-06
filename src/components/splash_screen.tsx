import React, { useState, useEffect } from "react"
import Image from "next/image"
// import anime from "animejs"

// const SplashScreen = ({ finishLoading }) => {
//   const [isMounted, setIsMounted] = useState(false)
//   const animate = () => {
//     const loader = anime.timeline({
//       complete: () => finishLoading(),
//     })

//     loader
//       .add({
//         targets: "#logo",
//         delay: 0,
//         scale: 1,
//         duration: 500,
//         easing: "easeInOutExpo",
//       })
//       .add({
//         targets: "#logo",
//         delay: 100,
//         scale: 1.25,
//         duration: 500,
//         easing: "easeInOutExpo",
//       })
//       .add({
//         targets: "#logo",
//         delay: 100,
//         scale: 1,
//         duration: 500,
//         easing: "easeInOutExpo",
//       })
//       .add({
//         targets: "#logo",
//         delay: 100,
//         scale: 1.25,
//         duration: 500,
//         easing: "easeInOutExpo",
//       })
//       .add({
//         targets: "#logo",
//         delay: 100,
//         scale: 1,
//         duration: 500,
//         easing: "easeInOutExpo",
//       })
//   }

//   useEffect(() => {
//     const timeout = setTimeout(() => setIsMounted(true), 10)
//     animate()
//     return () => clearTimeout(timeout)
//   }, [])

//   return (
//     <div
//       className="flex h-screen items-center justify-center"
//       isMounted={isMounted}
//     >
//       <Image id="logo" src="/logo.png" alt="" width={60} height={60} />
//     </div>
//   )
const SplashScreen = () => {
  return (
    <>
      <span className="font-bold text-4xl">Help</span>

      <div className="border-dashed border border-zinc-500 w-full h-12 rounded-lg"></div>
      <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
    </>
  );
};



export default SplashScreen
