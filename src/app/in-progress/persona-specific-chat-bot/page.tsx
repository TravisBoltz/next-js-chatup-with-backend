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
                <section className='h-screen bg-Lgrey flex justify-center  text-center'>

                    <div className="container mx-auto flex  px-5 py-10 items-center justify-center flex-col"> <img

                        src="/logo.png"
                        alt="Logo"
                        className="w-40 h-40  .logo-image mb-5 transition duration-300 ease-in-out hover:scale-110"
                    />
                        <div className="text-center lg:w-2/3 w-full">
                            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-royalBlue">
                                Persona Specific Chat Bot                       </h1>
                            <p className="mb-8 leading-relaxed">
                                The specialized chatbot technology linking personalized recommendations to mapped personas is still being perfected before going live. This page will eventually host a tailored conversant agent integrating user preferences sourced from persona interpretations. Follow our progress to witness ongoing upgrades to this AI-powered system. For now, head back to our homepage using the button below to discover what else our platform offers!

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
