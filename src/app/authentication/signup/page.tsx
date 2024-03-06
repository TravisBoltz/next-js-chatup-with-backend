'use client';
import Footer from '@/components/footer';
import React, { useState } from 'react';
import Selector from '@/components/Selector';
import Link from 'next/link';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth,db } from '@/dbConfig/firebase';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Firestore, collection, addDoc, doc, setDoc } from 'firebase/firestore';

export default function Signup() {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [date, setDate] = useState('');
    const [username, setUsername] = useState('');


    const signup = async () => {
        try {
            if (!email || password.length < 6 || !date || !selectedCountry || !username) {
                let errorMessage = '';
                if (!email && password.length < 6 && !date && !selectedCountry && !username) errorMessage = 'Please fill in all the fields.';
                else if (!email) errorMessage = 'Please enter your email.';
                else if (password.length < 6) errorMessage = 'Password must be at least 6 characters.';
                else if (!date) errorMessage = 'Please select your date of birth.';
                else if (!selectedCountry) errorMessage = 'Please select your country.';
                else if (!username) errorMessage = 'Please enter your username.';
            
                alert(errorMessage );
                return;

                
            }
            
            
      
          // Create user in Firebase authentication
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
          // Get the current date and time
          const currentDate = new Date();
      
          // Format date and time separately
          const formattedDate = currentDate.toISOString().split('T')[0];
          const formattedTime = currentDate.toISOString().split('T')[1].split('.')[0];
      
          // Save user details to Firestore
          await setDoc(doc(db, 'users', userCredential.user.uid), {
            Email: email,
            Username: username,
            Date_of_birth: date,
            Date_created: formattedDate,
            Time_created: formattedTime,
            Country: selectedCountry,
            uid: userCredential.user.uid, // Include uid as a field in the


          });
      
          
          // Add any additional logic or redirect to another page upon successful signup
          window.location.href = '/authentication/signin';

          console.log('User signed up successfully!');
        } catch (error: any) {
          if (error.code === 'auth/email-already-in-use') {
            // Handle the case where the email is already in use
            console.error('Error signing up:', 'Email already in use');
            // Show an alert or use any other method to notify the user
            alert('Account with this email already exists. Please sign in or use a different email.');
          } else {
            // Handle other errors
            console.error('Error signing up:', error.message);
          }
        }
      };
      
    
    return (
        <>
            <body className='bg-Lgrey'>

                <div className="2xl:container h-screen m-auto">
                    <div hidden className="fixed  ml-auto inset-10 w-7/12 lg:block">
                        <Image src="/logo.png" alt='Lhydra logo' width={160} height={160} className="w-full  h-full object-cover" />
                    </div>
                    <div hidden role="hidden" className="fixed inset-0 w-6/12 mr-auto bg-white bg-opacity-70 backdrop-blur-xl lg:block"></div>
                    <div className="relative h-full mr-auto lg:w-6/12">
                        <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
                            <div className="space-y-4">
                                <a href="">
                                    <Image width={160} height={160} src="/logo.png" className="w-40 m-auto grayscale" alt="Lhydra logo" />
                                </a>
                                <h2 className="font-bold text-5xl text-center text-royalBlue">Create an account </h2>
                                <p className="pt-5 text-center text-royalBlue">I appreciate your intent to join the community</p>

                            </div>

                            {/* <div className="mt-12 grid gap-6 sm:grid-cols-1">
                                {/* <button className="py-3 px-6 rounded-xl bg-darkGray hover:bg-royalBlue focus:bg-bg-black active:bg-white flex items-center">
                                    <Image width={160} height={160}  src="https://img.icons8.com/?size=48&id=17949&format=png" className="w-10 h-10 grayscale" alt="" />
                                    <span className="font-medium tracking-wide text-sm text-gold">  with Google</span>
                                </button> 
                                <Link href='/authentication/signin'>
                                    <button className="py-3 px-6 rounded-xl bg-darkGray transition hover:bg-royalBlue active:bg-gray-600 focus:bg-gray-700">
                                        <div className="flex gap-4 items-center justify-center text-gold">
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                        <span className="block w-max font-medium tracking-wide text-sm text-gold">with Github</span> 
                                            <span className="font-medium tracking-wide text-sm text-gold">Back to Login Page </span>
                                        </div>
                                    </button>
                                </Link>

                            </div> */}
                           

                            <section className="space-y-6 py-6">
                                <div className="flex flex-col items-end">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        autoComplete="username"
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                        placeholder="Username"
										className="w-full placeholder-royalBlue py-3 px-6 ring-1 ring-gray-300 rounded-xl "
                                    />
                                </div>
                                <div className="flex flex-col items-end">
                                    <input
                                        id="date"
                                        name="date"
                                        type="date"
                                        autoComplete="date"
                                        onChange={(e) => setDate(e.target.value)}
                                        required
                                        placeholder="Date of Birth"
										className="w-full placeholder-royalBlue py-3 px-6 ring-1 ring-gray-300 rounded-xl "
                                    />
                                </div>
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
                                <Selector onCountrySelect={setSelectedCountry}/>
                                <div>
                                <button
  onClick={() => signup()}
  className="w-full px-6 py-3 rounded-xl bg-gold transition hover:bg-royalBlue focus:bg-gold active:text-royalBlue font-semibold text-royalBlue hover:text-gold text-lg"
>
  SignUp
</button>
<div role="hidden" className="mt-12 border-t">
                                <span className="block font-bold w-max mx-auto zmt-5 px-4 text-center text-gold bg-royalBlue rounded-full p-2">
                                    Or
                                </span>
                            </div>

                                </div>
                                <div className="mt-12 grid gap-6">
							<button className="py-3 px-6 rounded-xl bg-darkGray transition hover:bg-royalBlue active:bg-gray-600 focus:bg-gray-700">
									<div className="flex gap-4 items-center justify-center text-gold">

										<Link href='/authentication/signin'> <span className="block w-max font-bold tracking-wide text-sm text-gold">Back to Login Page</span></Link>
									</div>
								</button>

						
							</div>
                           

                            </section>

                            <div className="border-t pt-12">
                                <div className="space-y-2 text-center">
                                    {/* <Footer /> */}

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </body>

        </>
    )
}
// 'use client'
// import Footer from '@/components/footer';
// import Header from '@/components/header';
// import MarginWidthWrapperAtBothSides from '@/components/margin-width-wrapper-at-both-sides';
// import React from 'react';

// const SignUp = () => {
//     return (
//         <>
//             <Header />
//             <MarginWidthWrapperAtBothSides>
//                 <section className='h-screen bg-Lgrey flex justify-center text-center'>

//                     <div className="container mx-auto flex  px-5 py-10 items-center justify-center flex-col"> <img

//                         src="/logo.png"
//                         alt="Logo"
//                         className="w-40 h-40  .logo-image mb-5 transition duration-300 ease-in-out hover:scale-110"
//                     />
//                         <div className="text-center lg:w-2/3 w-full">
//                             <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-royalBlue">
//                                 Create an Account</h1>
//                             <p className="mb-8 leading-relaxed">
                                
// I appreciate your interest in joining our research platform. Currently, work is being enforced on developing a robust and secure account creation process to enhance your experience.

// Please be assured that your patience is highly valued. Until the implementation is complete, you are welcome to explore other aspects of the platform and familiarize yourself with other ongoing research endeavors.
//  Thank you for your understanding and for being part of our research community.


//                             </p>
//                             <div className="flex justify-center mb-10">
//                                 <button
//                                     className="inline-flex text-gold bg-royalBlue border-0 py-2 px-5 focus:outline-none hover:bg-gold hover:text-royalBlue rounded text-lg mb-2"
//                                     onClick={() => (window.location.href = "/homepage")}
//                                 >Back to home HomePage</button>

//                             </div>
//                         </div>
//                     </div>

//                 </section>
//                 <Footer /></MarginWidthWrapperAtBothSides>



//         </>
//     );
// };

// export default SignUp;
