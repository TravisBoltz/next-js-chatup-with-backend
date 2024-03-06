'use client';
import Footer from '@/components/footer';
import { auth } from '@/dbConfig/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Signin() {
	const [email, setEmail] = useState('');
	const router = useRouter();

	const resetEmail = () => {
		sendPasswordResetEmail(auth, email);
		// Show an alert when the button is clicked
		alert('Check your mail to change your password');
	};



	return (
		<>
			<body className='bg-Lgrey'>

				<div className="2xl:container h-screen m-auto">
					<div hidden className="fixed inset-0 ml-auto w-6/12 lg:block">
						<Image src="/logo.png" width={160} height={160} alt='Lhydra logo' className="w-full  h-full object-cover" />

					</div>
					<div hidden className="fixed inset-0 w-6/12 mr-auto lg:block">
						<Image src="/logo.png" alt='Lhydra logo' width={160} height={160} className="w-full  h-full object-cover" />

					</div>
					<div hidden role="hidden" className="fixed inset-0 w-6/12 mx-auto bg-white bg-opacity-70 backdrop-blur-xl lg:block"></div>
					<div className="relative  h-full mx-auto lg:w-6/12">
						<div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
							<div className="space-y-4">
								<a href="">
									<Image src="/logo.png" width={160} height={160} className="w-40 m-auto grayscale" alt="Lhydra logo" />
								</a>
								<h2 className="font-bold text-5xl text-center text-royalBlue"> Forgot Password </h2>
								<p className="pt-5 text-center text-royalBlue">Oops, it seems you are in need of help</p>

							</div>



							<form action="" className="space-y-6 py-6">
								<div>
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										onChange={(e) => setEmail(e.target.value)}
										required placeholder="Enter Email to reset password"
										className="w-full placeholder-royalBlue py-3 px-6 ring-1 ring-gray-300 rounded-xl "
									/>
								</div>


								<div>
									<button onClick={() => resetEmail()} className="w-full px-6 py-3 rounded-xl  bg-gold transition hover:bg-royalBlue focus:bg-gold  active:text-royalBlue font-semibold text-royalBlue hover:text-gold text-lg">Reset Email                       </button>

								</div>
							</form>
							<div role="hidden" className="mt-12 border-t">
								<span className="block font-bold w-max mx-auto -mt-10 px-4 text-center text-gold bg-royalBlue rounded-full p-2">
									Or
								</span>
							</div>
							<div className="mt-10 grid gap-6 sm:grid-cols-2">
								<button className="py-3 px-6 rounded-xl bg-darkGray transition hover:bg-royalBlue active:bg-gray-600 focus:bg-gray-700">
									<Link href='/authentication/signup'>
										<div className="flex gap-4 items-center justify-center text-gold">

											<span className="block w-max font-bold tracking-wide text-sm text-gold">Back to Sign Up Page</span>
										</div>
									</Link>
								</button>

								<button className="py-3 px-6 rounded-xl bg-darkGray transition hover:bg-royalBlue active:bg-gray-600 focus:bg-gray-700">
									<Link href='/authentication/signin'>
										<div className="flex gap-4 items-center justify-center text-gold">

											<span className="block w-max font-bold tracking-wide text-sm text-gold">Back to Login In Page </span>
										</div>
									</Link>
								</button>
							</div>



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
