import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Zoomer",
  description: "By Anubhav and Team || Zoom Clone App",
  icons:{
    icon: '/icons/logo-2.svg'
  }
};


const HomeLayout  = ({children}:{children:ReactNode}) => {
  return (
    <main className='relative'>
        <Navbar/>

        <div className='flex'>
            <Sidebar/>
            <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 ml-20 max-md:pb-14 sm:px-14'>
                <div className='w-full'>
                {children}
                </div>
            </section>
        </div>
    </main>
  )
}

export default HomeLayout