'use client';

import React from 'react';

import Footer from '@/components/footer';
import Header from '@/components/header';
import MarginWidthWrapperAtBothSides from '@/components/margin-width-wrapper-at-both-sides';

const PersonaMappingSystem = () => {
  return (
    <>
      <Header />
      <section className="h-screen bg-Lgrey justify-center flex text-center">
        <div className="container mx-auto flex  px-5 py-10 items-center justify-center flex-col">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-40 h-40  .logo-image mb-5 transition duration-300 ease-in-out hover:scale-110"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-royalBlue">
              Generative AI
            </h1>
            <p className="mb-8 leading-relaxed">
            The formative questionnaire intended to guide development priorities for my generative conversational agent is still under construction. This preliminary survey will shape early functionality based on participant preferences before launching initial prototype interactions. I welcome you to check back as the questionnaire takes form. Your perspectives before ever conversing with my AI will ensure first impressions cater to ethical standards surrounding sensitive automated engagements. Please feel free to explore my site further from the homepage as I finalize this critical planning instrument.!
            </p>
            <div className="flex justify-center mb-10">
              <button
                className="inline-flex text-gold bg-royalBlue border-0 py-2 px-5 focus:outline-none hover:bg-gold hover:text-royalBlue rounded text-lg mb-2"
                onClick={() => (window.location.href = '/questionnaires')}
              >
                Back to questionnaires
              </button>
            </div>
          </div>
        </div>
      </section>
      <MarginWidthWrapperAtBothSides>
        <Footer />
      </MarginWidthWrapperAtBothSides>
    </>
  );
};

export default PersonaMappingSystem;
