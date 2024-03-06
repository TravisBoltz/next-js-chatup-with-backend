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
                <section className='h-screen bg-Lgrey justify-center flex text-center'>

                    <div className="container mx-auto flex  px-5 py-10 items-center justify-center flex-col">
                        <img

                            src="/logo.png"
                            alt="Logo"
                            className="w-40 h-40  .logo-image mb-5 transition duration-300 ease-in-out hover:scale-110"
                        />
                        <div className="text-center lg:w-2/3 w-full">
                            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-royalBlue">

                                Analysis</h1>
                            <p className="mb-8 leading-relaxed">
                                Robust evaluative analysis spanning models constructed, datasets utilized, and benchmark testing procedures followed throughout the PhD research lifecycle requires additional work before being shared interactively. Pending responsible transparency reviews concerning proprietary methods, this page will allow both statistical summaries and access to testing documentation instruments. We thank visitors intrigued by our commitment to analytically validating quality and efficacy. For available site sections visit our homepage!

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
