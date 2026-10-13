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
    <main className="relative min-h-screen bg-[#080C15] overflow-x-hidden">
      {/* Ambient glassmorphic backlight glow orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 left-1/4 w-[600px] h-[300px] bg-indigo-600/10 rounded-full blur-[130px]" />
        <div className="absolute top-48 left-6 w-[350px] h-[600px] bg-violet-600/[0.08] rounded-full blur-[150px]" />
        <div className="absolute top-1/2 right-10 w-[500px] h-[400px] bg-cyan-600/[0.07] rounded-full blur-[140px]" />
      </div>

      <Navbar />

      <div className="relative z-10 flex">
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