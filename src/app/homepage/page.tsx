'use client'

import Footer from "@/components/footer";

import FrancisDetails from "@/components/francis_details";

import MarginWidthWrapper from "@/components/margin-width-wrapper";

import Link from "next/link";

import React, { useState, useEffect } from "react";

import Image from "next/image";

const HomePage = () => {

    const [currentDateTime, setCurrentDateTime] = useState(new Date());



    useEffect(() => {

        const intervalId = setInterval(() => {

            setCurrentDateTime(new Date());

        }, 1000);



        return () => clearInterval(intervalId);

    }, []);



    const formattedDateTime = currentDateTime.toLocaleString('en-US', {

        month: 'long',

        day: 'numeric',

        year: 'numeric',

        hour: 'numeric',

        minute: 'numeric',

        hour12: true,

    });





    const [isLaptopScreen, setIsLaptopScreen] = useState(false);



    useEffect(() => {

        const handleResize = () => {

            setIsLaptopScreen(window.matchMedia("(min-width: 1000px)").matches);

        };

        window.addEventListener("resize", handleResize);

        handleResize(); // Check on initial render



        return () => window.removeEventListener("resize", handleResize);

    }, []);



    return (

        <><main>

            <FrancisDetails />



            <MarginWidthWrapper>



                <section className="body-font bg-Lgrey">

                    <div className="container mx-auto flex px-5   md:py-3 flex-col">

                        <div className="text-center w-full text-royalBlue">

                            <Link href={'/'}> <h1 className="title-font text-4xl sm:text-6xl lg:text-7xl font-bold break-words text-royalBlue mb-4 hover:text-gold">

                                LHydra

                            </h1></Link>

                            <p className="mb-8">

                                Welcome to the LHydra research platform developed by PhD

                                candidate Francis Martinson to support his doctoral work under

                                the guidance of faculty advisor Dr. Zubair M. Muhammad at North

                                Dakota State University (NDSU). This website serves as an

                                interactive portal for Mr. Martinson's studies into artificial

                                intelligent system algorithms - an area of focus building on

                                expertise in machine learning.

                                <br />

                                <br />

                                The primary aim is creating a trusted space for system

                                evaluations, dataset collections, and participatory trials

                                governed by research ethics oversight. User interactions,

                                feedback loops, and crowdsourced insights are instrumental to

                                exploring techniques for balancing accuracy, explainability, and

                                relevance as Mr. Martinson works towards his dissertation guided

                                by NDSU's research integrity safeguards.

                                <br />

                                <br />

                                He welcomes you to responsibly join this shared journey through

                                your experiences with the education-focused systems hosted here.

                            </p>

                            {/*  szxxc*/}

                            <Image

                                width={140} height={140}

                                src="/logo.png"

                                alt="Logo"

                                className="w-40 h-40 mt-4 .logo-image mx-auto transition duration-300 ease-in-out hover:scale-110"

                            />

                            <div className="mt-4 text-gray-700 ">{formattedDateTime}</div>



                            <div className="w-full flex-col items-center md:flex-row md:justify-center md:space-x-4 p-4 md:p-10">

                                <button
                                    className="inline-flex text-gold bg-royalBlue mx-2 lg:mx-0 border-0 py-2 px-4 md:px-5 focus:outline-none hover:bg-gold hover:text-royalBlue rounded text-base md:text-lg mb-2"
                                    onClick={() => (window.location.href = "/questionnaires")}
                                >
                                    Questionnaires
                                </button>

                                <button
                                    className="inline-flex text-gold bg-royalBlue border-0 py-2 mx-2 lg:mx-0 px-4 md:px-5 focus:outline-none hover:bg-gold hover:text-royalBlue rounded text-base md:text-lg mb-2"
                                    onClick={() => (window.location.href = "/recommender-system")}
                                >
                                    Recommender{isLaptopScreen ? <br /> : null} System
                                </button>

                                <button

                                    className="inline-flex text-gold bg-royalBlue border-0 py-2 mx-2 lg:mx-0 px-4 md:px-5 focus:outline-none hover:bg-gold hover:text-royalBlue rounded text-base md:text-lg mb-2"

                                    onClick={() =>

                                        (window.location.href = "/in-progress/persona-mapping-system")

                                    }

                                >

                                    Persona Mapping{isLaptopScreen ? <br /> : null}System

                                </button>

                                <button

                                    className="inline-flex text-gold bg-royalBlue border-0 py-2 mx-2 lg:mx-0 px-4 md:px-5 focus:outline-none hover:bg-gold hover:text-royalBlue rounded text-base md:text-lg mb-2"

                                    onClick={() =>

                                        (window.location.href = "/in-progress/persona-specific-chat-bot")

                                    }

                                >

                                    Persona Specific{isLaptopScreen ? <br /> : null} Chat Bot

                                </button>

                                <button

                                    className="inline-flex text-gold bg-royalBlue border-0 py-2 px-4 mx-2 lg:mx-0 md:px-5 focus:outline-none hover:bg-gold hover:text-royalBlue rounded text-base md:text-lg mb-2"

                                    onClick={() =>

                                        (window.location.href = "/in-progress/exploratory-data-analysis")

                                    }

                                >

                                    Exploratory Data{isLaptopScreen ? <br /> : null}Analysis

                                </button>

                                <button

                                    className="inline-flex text-gold bg-royalBlue border-0 py-2 mx-2 lg:mx-0 px-9 md:px-9 focus:outline-none hover:bg-gold hover:text-royalBlue rounded text-base md:text-lg mb-2"

                                    onClick={() =>

                                        (window.location.href = "/in-progress/publications-used")

                                    }

                                >

                                    Publications{isLaptopScreen ? <br /> : null} Used

                                </button>

                                <button

                                    className="inline-flex text-gold bg-royalBlue border-0 py-2 mx-2 lg:mx-0 px-6 md:px-7 focus:outline-none hover:bg-gold hover:text-royalBlue rounded text-base md:text-lg mb-2"

                                    onClick={() => (window.location.href = "/in-progress/analytics")}

                                >

                                    Analytics

                                </button>

                                <button

                                    className="inline-flex text-gold bg-royalBlue border-0 mx-2 lg:mx-0 py-2 px-8 md:px-5 focus:outline-none hover:bg-gold hover:text-royalBlue rounded text-base md:text-lg mb-2"

                                    onClick={() => (window.location.href = "/in-progress/about")}

                                >

                                    About

                                </button>

                            </div>

                            <div className="p-8"></div>



                        </div>

                    </div>

                </section>

                <Footer />

            </MarginWidthWrapper>

        </main>

        </>

    );

};



export default HomePage;

