'use client';
import Footer from '@/components/footer';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image'
export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>

            <body className='bg-Lgrey'>

                <div className="2xl:container h-screen m-auto">
                    <div hidden className="fixed inset-0 w-7/12 lg:block">
                        <Image src="/logo.png" alt='Lhydra logo' width={160} height={160} className="w-full  h-full object-cover" />
                    </div>
                    <div hidden role="hidden" className="fixed inset-0 w-6/12 ml-auto bg-white bg-opacity-70 backdrop-blur-xl lg:block"></div>
                    <div className="relative h-full ml-auto lg:w-6/12">
                        <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
                            <div className="space-y-4">
                                <a href="">
                                    <Image src="/logo.png" width={160} height={160} className="w-40 m-auto grayscale" alt="" />
                                </a>
                                <h2 className="font-bold text-5xl text-center text-royalBlue"> Login </h2>
                                <p className="pt-5 text-center text-royalBlue">We humbly welcome you back dear neighbour</p>

                            </div>

                            {/* <div className="mt-12 grid gap-6 sm:grid-cols-2">
                               
                                            {/* <Image idth={160} height={160}  src="https://img.icons8.com/?size=48&id=17949&format=png" className="w-10 h-10 grayscale" alt=""/>
    <span className="font-medium tracking-wide text-sm text-gold">  with Google</span> */}
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                            <span className="block w-max font-medium tracking-wide text-sm text-gold">with Github</span> 
                        
                            </div>*/}



                            <section className="space-y-6 py-6">
                                <div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        required placeholder="Your Email"
                                        className="w-full placeholder-royalBlue py-3 px-6 ring-1 ring-gray-300 rounded-xl "
                                    />
                                </div>

                                <div className="flex flex-col items-end">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        placeholder="Password"
                                        className="w-full placeholder-royalBlue py-3 px-6 ring-1 ring-gray-300 rounded-xl "
                                    />

                                </div>
                                <div>
                                    <button
                                        disabled={!email || !password}
                                        onClick={() => signIn('credentials', { email, password, redirect: true, callbackUrl: '/recommender-system' })} className="w-full px-6 py-3 rounded-xl  bg-gold transition hover:bg-royalBlue focus:bg-gold  active:text-royalBlue font-semibold text-royalBlue hover:text-gold text-lg">Login </button>
                                    {/* <a href="#" type="reset" className="w-max p-3 -ml-3">
                            <span className="text-sm tracking-wide text-royalBlue"><Link href='/authentication/signup'>Create new account</Link></span>
                        </a> */}
                                </div>
                                <div role="hidden" className="mt-12 border-t">
                                    <span className="block w-max mx-auto  mt-5 px-4 text-center text-gold bg-royalBlue rounded-full p-2">
                                        Or
                                    </span>
                                </div>
                                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                                    <button className="py-3 px-6 rounded-xl bg-darkGray transition hover:bg-royalBlue active:bg-gray-600 focus:bg-gray-700">
                                        <Link href='/authentication/signup'>
                                            <div className="flex gap-4 items-center justify-center text-gold">

                                                <span className="block w-max font-bold tracking-wide text-sm text-gold">Create an Account</span>
                                            </div>
                                        </Link>
                                    </button>

                                    <button className="py-3 px-6 rounded-xl bg-darkGray transition hover:bg-royalBlue active:bg-gray-600 focus:bg-gray-700">
                                        <Link href='/authentication/forgot-password'>
                                            <div className="flex gap-4 items-center justify-center text-gold">

                                                <span className="block w-max font-bold tracking-wide text-sm text-gold">Forgot Password </span>
                                            </div>
                                        </Link>
                                    </button>
                                </div>

                            </section>

                            {/* <div className="border-t pt-12">
                                <div className="space-y-2 text-center">
                                    <Footer />

                                </div>
                            </div> */}
                        </div>

                    </div>

                </div>
            </body>

        </>
    )
}
