import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="fixed top-3 inset-x-3 sm:inset-x-6 lg:inset-x-8 z-50 flex items-center justify-between backdrop-blur-2xl bg-[#090D18]/75 rounded-2xl px-5 py-3.5 lg:px-8 shadow-2xl shadow-black/40 transition-all">
      <Link href="/home" className="flex items-center gap-3 group">
        <div className="relative flex items-center justify-center size-9 sm:size-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
          <Image 
            src="/icons/logo-2.svg"
            width={20}
            height={20}
            alt="Zoomer Logo"
            className="brightness-0 invert"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-lg sm:text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            ZOOMER
          </span>
          <span className="text-[9px] uppercase font-semibold tracking-widest text-indigo-400/90 -mt-1">
            Pro Video
          </span>
        </div>
      </Link>

      <div className="flex items-center gap-4 sm:gap-6">
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] text-xs font-medium text-slate-300">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Stream Engine Active</span>
        </div>

        <div className="flex items-center gap-3">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 transition-colors">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="px-4 py-1.5 text-xs font-semibold rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white transition-all shadow-md shadow-indigo-600/30">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <div className="flex items-center p-0.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] transition-all">
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