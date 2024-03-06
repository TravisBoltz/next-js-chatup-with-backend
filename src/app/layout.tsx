// 'use client'
import '../styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MarginWidthWrapper from '../components/margin-width-wrapper';
import PageWrapper from '../components/page-wrapper';
import Footer from '../components/footer';
import FrancisDetails from '../components/francis_details';
import SessionProvider from '@/components/SessionProvider';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import SplashScreen from '@/components/splash_screen';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
// const inter = Inter({ subsets: ['latin'] });
// const pathname = usePathname()
// const isHome = pathname === "/"
// const [isLoading, setIsLoading] = useState(isHome)

// useEffect(() => {
//   if (isLoading)
//     return
// }, [isLoading])

export const metadata: Metadata = {
  title: 'LHydra',
  description: 'A project by Francis Martinson',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body >
        {/* {isLoading && isHome ? (
        <SplashScreen />) : ( */}
        <SessionProvider>
          <div className="flex">
            {/* <SideNav /> */}
            {/* < FrancisDetails /> */}
            <main className="flex-1  bg-zinc-100">
              {/* <MarginWidthWrapper> */}

              {/* <Header />
               
              <HeaderMobile /> */}
              <PageWrapper>{children}
              <Analytics/>
              <SpeedInsights />

              </PageWrapper>
              {/* <Footer/>   */}

              {/* </MarginWidthWrapper> */}
            </main>
          </div>
        </SessionProvider>
        {/* )
      } */}

      </body>
    </html >
  );
}
