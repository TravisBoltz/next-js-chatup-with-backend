'use client'
import React from 'react';
import Link from 'next/link';
import Footer from '@/components/footer';
import MarginWidthWrapperAtBothSides from '@/components/margin-width-wrapper-at-both-sides';
import Image from 'next/image';
import Header from '@/components/header';
import { track } from '@vercel/analytics';

const QuestionnairesPage = () => {
  const RecommenderQuestionnaireButton = () => {
    // Track the button click for the first button as a Vercel Analytics event
    track('Recommender_Questionnaire button has been clicked', {
      buttonType: 'recommendation_preference', // or any other identifier
    });

    // Redirect to the respective questionnaire page
    window.location.href = '/questionnaires/questionnaire_recommendation_preference';
  };
  return (
    <>
      <Header />
      <MarginWidthWrapperAtBothSides>
        <main>

          <section className="p-5 text-left md:text-center bg-Lgrey">

            {/* Circle with Back Arrow */}
            {/* <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className="circle-with-arrow" onClick={() => window.history.back()}>
                <div className="circle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="royalBlue" width="50px" height="60px">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <circle cx="12" cy="12" r="11" stroke="royalBlue" strokeWidth="2" fill="transparent" />
                    <path d="M7.99 13H20v-2H7.99V8L4 12l3.99 4z" />
                  </svg>
                </div>
              </div>    
            </div> */}
            <h1 className="title-font text-3xl sm:text-4xl lg:text-5xl font-bold break-words text-royalBlue text-center  pb-4">GREETINGS RESEARCH PARTICIPANTS</h1>

            <p>
              I kindly request your support in completing three vital questionnaires to guide and empower my PhD research into generative algorithms and recommendation systems.
            </p>

            <p>
              Your candid perspectives on expectations, priorities, and areas of possible concern related to AI assistants will establish critical baselines as I work to complete my North Dakota State University dissertation on “Incorporating User Experiences through Generative Modeling of Personalized AI Personas.”
            </p>

            <p>
              Specifically, links are provided to surveys focused on:
            </p>
          </section>

          <div className="flex flex-col items-center  bg-Lgrey space-y-1 md:flex-row md:items-center md:justify-center md:space-x-4 py-9">
            <button className="w-full md:w-auto inline-flex text-gold bg-royalBlue border-0 py-2 px-6 focus:outline-none hover:bg-gold hover:text-royalBlue rounded-full md:rounded-lg  text-lg" onClick={RecommenderQuestionnaireButton}>
              Preferences in Recommendation Performance
            </button>
            <button className="w-full md:w-auto inline-flex text-gold bg-royalBlue border-0 py-2 px-6 focus:outline-none hover:bg-gold hover:text-royalBlue rounded-full md:rounded-lg  text-lg" onClick={() => window.location.href = '/questionnaires/questionnaire_generative_ai'}>
              Persona Mapping Generative AI
            </button>
            <button className="w-full md:w-auto inline-flex text-gold bg-royalBlue border-0 py-2 px-6 focus:outline-none hover:bg-gold hover:text-royalBlue  rounded-full md:rounded-lg  text-lg" onClick={() => window.location.href = '/questionnaires/questionnaire_conversational_ai'}>
              Persona Specific Chat Bots
            </button>
          </div>

          <section className="p-5 text-left  bg-Lgrey md:text-center">
            <p>
              The academic benefit involves understanding initial preferences so I can tune tailored system prototypes to better address over months of private testing by volunteer participants like yourselves.
            </p>

            <p>
              Ultimately, contrasting feedback before and after this cooperative design process will help answer core research questions related to nurturing algorithmic transparency through sustained user dialogues - ensuring development stays aligned with public priorities.
            </p>

            <p>
              I sincerely thank you in advance for generously lending your voice during 10-15 minutes of reflection geared to responsibly advance AI innovations we can one day universally trust via research-powered oversight. Please reach out with any questions while navigating the forms.
            </p>

            <div className="container  bg-Lgrey py-3 mx-auto">
              <Image className="mx-auto w-40 h-40 rounded-full  transition duration-300 ease-in-out hover:scale-110 " src="/FM.JPG" width={160} height={160} alt="FM" />
              <h2 className='text-center font-bold p-10'>Francis Martinson</h2>
            </div>

          </section>
        </main>

        <Footer />

      </MarginWidthWrapperAtBothSides>
    </>
  );
};

export default QuestionnairesPage;
