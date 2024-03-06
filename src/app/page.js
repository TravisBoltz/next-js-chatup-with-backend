'use client';

import React from 'react';

import Link from 'next/link';

import Footer from '@/components/footer';
import MarginWidthWrapperAtBothSides from '@/components/margin-width-wrapper-at-both-sides';

const PersonaMappingSystem = () => {
  return (
    <>
      <MarginWidthWrapperAtBothSides>
        <section className="h-screen bg-Lgrey   text-center">
          <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold break-words">
              LHydra
              <span className="text-2xl sm:text-3xl text-slate-400 ml-2 sm:ml-4">
                Many heads, infinite wisdom
              </span>
            </h1>
            <h3 className="my-5 text-lg sm:text-2xl font-bold">
              Ready to join me on this endeavour?
            </h3>
            <Link href="/homepage">
              <button className="text-gold bg-royalBlue px-6 sm:px-20 py-3 sm:py-5 rounded-full hover:bg-gold hover:text-royalBlue font-bold text-lg sm:text-2xl cursor-pointer hover:opacity-80">
                Count Me In
              </button>
            </Link>
            <Link href="/cuisine-recsys">
              <button className="text-royalBlue bg-gold px-2 my-4 sm:px-10 py-2 sm:py-2 rounded-full hover:bg-royalBlue hover:text-gold font-bold text-lg sm:text-2xl cursor-pointer hover:opacity-80">
                Cuisine-Recsys
              </button>
            </Link>
            <p className="mt-5 text-gold text-sm sm:text-base">
              To bridge the gap between man’s natural limitations and man’s
              intended proficiencies, can we train machine learning algorithms
              to seamlessly pull a thematic story out of any area of interest on
              prompt? And can we place an endless loop within this algorithm to
              provide intended insights and analysis?
            </p>
            <span className="text-gold text-xs sm:text-sm">
              - Francis Martinson
            </span>
          </div>
        </section>
      </MarginWidthWrapperAtBothSides>
    </>
  );
};
export default PersonaMappingSystem;
