'use client'
import Footer from '@/components/footer';
import Header from '@/components/header';
import MarginWidthWrapperAtBothSides from '@/components/margin-width-wrapper-at-both-sides';
import React from 'react';

const PersonaMappingSystem = () => {
    return (
        <>
            <Header />
            <MarginWidthWrapperAtBothSides>
                <section className='h-screen bg-Lgrey flex justify-center text-center'>

                    <div className="container mx-auto flex  px-5 py-10 items-center justify-center flex-col">
                        <img

                            src="/logo.png"
                            alt="Logo"
                            className="w-40 h-40  .logo-image mb-5 transition duration-300 ease-in-out hover:scale-110"
                        />
                        <div className="text-center lg:w-2/3 w-full">
                            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-royalBlue">

                                Publications Used
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                The full bibliography and archives of published papers used to guide and support conclusions drawn from my doctoral research are actively being gathered to share publicly. This page will eventually contain a searchable index of academic works consulted alongside this project. In the spirit of transparency and reproducible investigation, the aim is acknowledging all external sources built upon with links enabling open access where permissible. Please revisit for these metadata annotations at a later date or proceed back to our homepage in the interim!
                            </p>
                            <div className="flex justify-center mb-10">
                                <button
                                    className="inline-flex text-gold bg-royalBlue border-0 py-2 px-5 focus:outline-none hover:bg-gold hover:text-royalBlue rounded text-lg mb-2"
                                    onClick={() => (window.location.href = "/homepage")}
                                >Back to home HomePage</button>

                            </div>
                        </div>
                    </div>

                </section>
                <Footer /></MarginWidthWrapperAtBothSides>



        </>
    );
};

export default PersonaMappingSystem;
