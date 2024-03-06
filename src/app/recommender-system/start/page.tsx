'use client'
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import SideNav from '@/components/sideNav';
import Avater from '@/components/Avater';
const RecommenderSystem = () => {
    // const session = useSession({
    //   required: true,
    //   onUnauthenticated() {
    //     redirect('/authentication/signin')
    //   }
    // });
  
    const [term, setTerm] = useState('');
    const [response, setResponse] = useState(null);




    return (
        <>
        <section className='bg-grey'>
    <div className="flex bg-Lgrey ">
        <SideNav/>
        <Avater/>

       
        {/* body */}
        <section className="flex mx-auto flex-col relative  font-raleway items-center  ">
        <h1 className="text-4xl sm:text-5xl text-center md:text-6xl text-primary font-bold mt-20">
    LHydra's <span className="text-active">Music App</span>
</h1>
<h2 className="text-active text-base text-center sm:text-xl mt-6">
    Discover your music playlist with us using our recommender system.
</h2>


            <div className="mt-12 sm:mx-auto justify-center sm:w-full sm:flex">
                <input
                    type="text"
                    className="block border border-transparent rounded-md px-5 py-3 text-base  shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-active"
                    placeholder="Search for a song or an artist"
                    onChange={(e) => setTerm(e.target.value)}
                />
                <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button
                        className="block w-full rounded-md  border border-royalBlue px-5 py-3 bg-active text-base font-medium text-primary focus:outline-none focus:ring-2 focus:ring-primary sm:px-10">
                        Search
                    </button>
                </div>
            </div>
            {/* {response && (
                <div className="mt-16">
                    <h3 className="text-secondary text-2xl">Search Results</h3>
                    <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {response.map(song => (
                            <div key={song.track.title} className="pt-6">
                                <div className="flow-root bg-light rounded-lg px-4 pb-8">
                                    <div className="-mt-6">
                                        <div className="flex items-center justify-center">
                                            <span className="p-3 rounded-md shadow-lg">
                                                <Image
                                                 width={28}
                height={28}
                                                    src={
                                                        song.track.images
                                                            .coverart
                                                    }
                                                    width={140}
                                                    height={140}
                                                    alt={song.track.title}
                                                />
                                            </span>
                                        </div>
                                        <div className="text-center justify-center items-center">
                                            <h3 className="mt-2 text-lg text-center font-medium text-primary tracking-tight">
                                                {song.track.title}
                                            </h3>
                                            <span className="mt-2 mb-4 max-w-xs text-sm text-secondary block">
                                                {song.track.subtitle}
                                            </span>
                                            <a
                                                className="mt-5 text-sm text-active"
                                                href={song.track.url}
                                            >
                                                Thanksfor your involement
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )} */}
        </section>

    </div>
    </section>
    </>
    );

};


export default RecommenderSystem;
RecommenderSystem.requireAuth = true