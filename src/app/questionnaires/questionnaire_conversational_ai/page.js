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
              Conversational AI
            </h1>
            <p className="mb-8 leading-relaxed">
           
The foundational questionnaire slated to appear prior to accessing our Persona Specific Chat Bots is actively being developed. This important setup survey will empower aligned conversational experiences suited to the needs of diverse visitors from the start. I greatly value upfront input scoping these emerging solutions allowing individuals like yourself to preview and shape direction through constructive criticism. Please return soon as I finalize what I hope strikes the appropriate balance between learning about preferences, describing realities around limitations in machine abilities at our disposal, and supporting aspirational thinking regarding future standard setting. In the interim, please explore my wider platform via the homepage banner to discover complimentary dimensions presently available covering everything from  strictly voluntary data donation that fuels discovery to interpretability concepts powering complex but accountable algorithmic assistance.
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
