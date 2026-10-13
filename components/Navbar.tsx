import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between backdrop-blur-xl bg-[#080C15]/80 border-b border-white/[0.08] px-6 py-3.5 lg:px-10 transition-all">
      <Link href="/home" className="flex items-center gap-3 group">
        <div className="relative flex items-center justify-center size-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
          <Image 
            src="/icons/logo-2.svg"
            width={22}
            height={22}
            alt="Zoomer Logo"
            className="brightness-0 invert"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            ZOOMER
          </span>
          <span className="text-[10px] uppercase font-semibold tracking-widest text-indigo-400/90 -mt-1">
            Pro Video
          </span>
        </div>
      </Link>

      <div className="flex items-center gap-4 sm:gap-6">
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-medium text-slate-300">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Stream Engine Active</span>
        </div>

        <div className="flex items-center gap-3">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 transition-colors">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-sm shadow-indigo-600/30">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <div className="flex items-center p-0.5 rounded-full ring-2 ring-indigo-500/30 hover:ring-indigo-500/60 transition-all">
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonAvatarBox: "size-8",
                  }
                }}
              />
            </div>
          </SignedIn>
        </div>

        <div className="sm:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;