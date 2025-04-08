import StreamVideoProvider from '@/providers/StreamClientProvider';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Zoomer",
  description: "By Anubhav and Team || Zoom Clone App",
  icons:{
    icon: '/icons/logo-2.svg'
  }
};


const RootLayout  = ({children}:{children:ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
                {/* <BackgroundBeams
      className='fixed top-0 left-64 w-full h-full z-0'
      /> */}
    </main>
  )
}

export default RootLayout 