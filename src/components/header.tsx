"use client";
import React from "react";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const scrollPosition = useScrollPosition();
    return (
        <header
            className={`sticky top-0 bg-Lgrey z-50 transition-shadow ${scrollPosition > 0
                ? "shadow bg-opacity-10 backdrop-blur-lg backdrop-filter"
                : "shadow-none"
                }`}
        >
            <div className=" container mx-auto p-2 flex flex-wrap  flex-col md:flex-row ">
                <a
                    onClick={() => window.history.back()}
                    className="flex title-font font-medium text-royalblue-500 mb-4 md:mb-0"
                    style={{
                        color: 'royalblue',
                        cursor: 'pointer',  // Added pointer style on hover
                    }}
                >
                    <Image
                        src={"/back.png"}
                        width={30}
                        height={20}
                        alt={"back"}
                        style={{
                            filter: 'invert(15%) sepia(87%) saturate(284%) hue-rotate(192deg) brightness(88%) contrast(93%)',
                        }}
                    />
                    <span className="p-1 text-royalBLue hover:text-gold">Back</span>
                </a>

                {/* <button className="inline-flex  bg-Lgrey border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base  md:mt-0">
                    Home
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 mt-1 ml-3"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button> */}
            </div>
        </header>
    );
};

export default Header;