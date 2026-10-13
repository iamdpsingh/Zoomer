import { SignUp } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2, Shield, Sparkles, Video, Users, Zap, Lock } from 'lucide-react';

export default function SignUpPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-between bg-[#080C15] text-white overflow-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Dynamic ambient backdrops */}
      <div className="pointer-events-none absolute -top-40 left-1/4 size-[600px] bg-indigo-600/15 rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 right-10 size-[500px] bg-cyan-600/10 rounded-full blur-[160px]" />

      {/* Subtle tech grid mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_65%_65%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

      {/* Top Header Navigation */}
      <header className="relative z-30 w-full border-b border-white/[0.06] backdrop-blur-xl bg-[#080C15]/70">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center size-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              <Image
                src="/icons/logo-2.svg"
                width={22}
                height={22}
                alt="Zoomer Logo"
                className="brightness-0 invert"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white">ZOOMER</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-400 -mt-1">
                Workspace
              </span>
            </div>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-white/[0.08] hover:text-white transition-all backdrop-blur-md shadow-sm"
          >
            <ArrowLeft className="size-3.5 text-slate-400" />
            <span>Return to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center justify-center lg:justify-between px-6 py-12 gap-12">
        {/* Left Column: Brand Showcase (Visible on lg screens) */}
        <div className="hidden lg:flex flex-col gap-8 max-w-xl">
          <div className="flex flex-col gap-3">
            <div className="inline-flex w-fit items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-semibold text-indigo-300 shadow-sm shadow-indigo-500/10">
              <Sparkles className="size-3.5 text-indigo-400" />
              <span>Instant Setup &bull; Free Forever</span>
            </div>
            <h1 className="text-4xl xl:text-5xl font-black tracking-tight text-white leading-tight">
              Create your <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-400 bg-clip-text text-transparent">Zoomer</span> account.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Start collaborating immediately with permanent meeting rooms, cloud recordings, and instant Google authentication.
            </p>
          </div>

          {/* Value Props Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5 rounded-2xl border border-white/[0.08] bg-slate-900/40 p-4 backdrop-blur-md">
              <div className="flex size-8 items-center justify-center rounded-xl bg-indigo-500/15 border border-indigo-500/25 text-indigo-400 mb-1">
                <Video className="size-4" />
              </div>
              <h2 className="text-sm font-bold text-white">Instant & Scheduled</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Launch calls immediately or plan ahead with calendar invites.
              </p>
            </div>

            <div className="flex flex-col gap-1.5 rounded-2xl border border-white/[0.08] bg-slate-900/40 p-4 backdrop-blur-md">
              <div className="flex size-8 items-center justify-center rounded-xl bg-cyan-500/15 border border-cyan-500/25 text-cyan-400 mb-1">
                <Shield className="size-4" />
              </div>
              <h2 className="text-sm font-bold text-white">Personal Meeting URL</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                A permanent link that never expires for quick 1-on-1s.
              </p>
            </div>
          </div>

          {/* Guarantee Pill */}
          <div className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] px-5 py-3.5 backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <span className="size-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-semibold text-slate-200">No Credit Card Required</span>
            </div>
            <span className="text-[11px] font-medium text-slate-400">100% Free Tier Included</span>
          </div>
        </div>

        {/* Right Column: Sleek Auth Box */}
        <div className="flex w-full max-w-[460px] flex-col items-center justify-center">
          <div className="relative w-full">
            {/* Iridescent outer glow aura */}
            <div className="pointer-events-none absolute -inset-1 rounded-[2.25rem] bg-gradient-to-r from-indigo-500/30 via-cyan-500/25 to-violet-500/20 blur-xl opacity-90" />
            
            {/* Glass enclosure card */}
            <div className="relative w-full rounded-[2rem] border border-white/[0.12] bg-[#090D18]/90 p-1 shadow-2xl backdrop-blur-3xl">
              <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer info */}
      <footer className="relative z-20 w-full border-t border-white/[0.06] py-5 px-6 text-center text-xs text-slate-500">
        Zoomer Video Platform &bull; End-to-end encrypted video collaboration
      </footer>
    </main>
  );
}