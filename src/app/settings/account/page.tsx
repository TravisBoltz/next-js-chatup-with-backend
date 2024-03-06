'use client'
import React from 'react';
import SideNav from '@/components/sideNav';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

const AccountPage = () => {
  const { data: session } = useSession();
  const fetchDisplayName = () => {
    return session?.user?.name || 'FM';
  };

  const avatar = {
    name: fetchDisplayName(),
    email: session?.user?.email || 'user@example.com',
  }
  return (
    <section className='bg-grey'>
      <div className="flex bg-Lgrey ">
        <SideNav />
        <section className='flex mx-auto flex-col'>
          <span className="font-bold text-4xl ml-4">Account</span>
          <span className='text-2xl ml-4 pt-5'>Manage Account Settings</span>

          {/* <div
              className="w-40 h-40 rounded-full flex items-center justify-center"
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >            </div> */}

          <div className="ml-4 flex-grow">
            <h2 className='text-2xl font-bold'>#######</h2>
            <p>{avatar.email}</p>
          </div>
          <div className=' hidden md:flex flex-col items-end ml-10'>
            <a href="#" className="text-purple-500 px-3 py-1 font-bold text-md">Logout</a>
            <a href="#" className="text-purple-500 px-3 py-1 font-bold text-md">Contact</a>
            <a href="#" className="text-purple-500 px-3 py-1 font-bold text-md">Help</a>
            <a href="#" className="text-purple-500 px-3 py-1 font-bold text-md">Analysis</a>
          </div>


          <div className="flex mt-4 md:flex-row flex-col mx-auto space-x-4">
            {/* //contianer 1*/}

            <div className="border border-gray-500 p-4 rounded-md flex-grow">
              <h1 className="text-xl font-bold mb-2 text-purple-500">Container 1</h1>
              <hr className="my-2" />
              <p className="mb-4 text-gray-600">This is the content for the first new container. It can be longer.</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Left</span>
                <span>Right</span>
              </div>
              <hr className="my-2" />
              <h2 className="text-lg font-bold text-purple-500">Subtitle</h2>
            </div>
            {/* //contianer 2*/}

            <div className="border border-gray-500 p-4 rounded-md flex-grow">
              <h1 className="text-xl font-bold mb-2 text-purple-500">Container 2</h1>
              <hr className="my-2" />
              <p className="mb-4 text-gray-600">This is the content for the second new container. It can also be longer.</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Left</span>
                <span>Right</span>
              </div>
              <hr className="my-2" />
              <h2 className="text-lg font-bold text-purple-500">Subtitle</h2>
            </div>
          </div>
          {/* //contianer 3*/}
          <div className="max-w-screen-md mx-auto">
            <div className="border border-gray-500 p-4 rounded-md mx-4">
              <h1 className="text-xl font-bold mb-2 text-purple-500">Container 3</h1>
              <hr className="my-2" />
              <p className="mb-4 text-gray-600">This is the content for the third new container. It can be longer.</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Left</span>
                <span>Right</span>
              </div>
              <hr className="my-2" />
              <h2 className="text-lg font-bold text-purple-500">Subtitle</h2>
            </div>
          </div>
        </section>
      </div>

    </section>


  );
};

export default AccountPage;
