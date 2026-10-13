import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Zoomer — Dashboard",
  description: "Next-gen video collaboration dashboard",
  icons: {
    icon: '/icons/logo-2.svg',
  },
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative min-h-screen bg-[#080C15]">
      <Navbar />

      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-4 pb-8 pt-24 sm:pt-28 sm:px-8 sm:pl-72 lg:pl-80 max-md:pb-14">
          <div className="mx-auto w-full max-w-7xl">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;