import { SignUp } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2, Shield, Sparkles, Video, Users } from 'lucide-react';

export default function SignUpPage() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center bg-[#080C15] p-4 sm:p-6 lg:p-10 text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/3 size-[600px] bg-indigo-600/15 rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-40 right-10 size-[500px] bg-cyan-600/10 rounded-full blur-[160px]" />

      {/* Top Bar with Back to Home button */}
      <div className="absolute top-6 left-6 z-30">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-300 hover:bg-white/[0.08] hover:text-white transition-all backdrop-blur-md"
        >
          <ArrowLeft className="size-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-center lg:justify-between gap-12 pt-14 lg:pt-0">
        {/* Left Column: Brand Showcase (Visible on lg screens) */}
        <div className="hidden lg:flex flex-col gap-8 max-w-lg">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center size-11 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 shadow-lg shadow-indigo-500/30">
              <Image
                src="/icons/logo-2.svg"
                width={24}
                height={24}
                alt="Zoomer"
                className="brightness-0 invert"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-white">ZOOMER</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-400 -mt-1">
                Enterprise Video
              </span>
            </div>
          </Link>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-semibold text-indigo-300 mb-4">
              <Sparkles className="size-3.5 text-indigo-400" />
              <span>Create Your Free Account</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white leading-tight">
              Start collaborating in seconds.
            </h1>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Join thousands of creators, engineers, and educators who use Zoomer for fast, reliable, high-definition video calls.
            </p>
          </div>

          {/* Value Props */}
          <div className="flex flex-col gap-3.5 pt-2">
            <div className="flex items-center gap-3 text-sm text-slate-200">
              <div className="flex size-7 items-center justify-center rounded-lg bg-indigo-500/15 border border-indigo-500/30 text-indigo-400">
                <Video className="size-4" />
              </div>
              <span>Unlimited instant & scheduled meetings</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-200">
              <div className="flex size-7 items-center justify-center rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                <Shield className="size-4" />
              </div>
              <span>Permanent personal meeting room URL</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-200">
              <div className="flex size-7 items-center justify-center rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
                <Users className="size-4" />
              </div>
              <span>Instant Google single sign-on</span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 backdrop-blur-sm">
            <p className="text-xs text-slate-400 leading-relaxed">
              No credit card required. Free tier includes HD video, screen sharing, and cloud recording.
            </p>
          </div>
        </div>

        {/* Right Column: Sleek Auth Box */}
        <div className="flex w-full max-w-[440px] flex-col items-center justify-center">
          {/* Mobile-only branding banner */}
          <div className="lg:hidden flex flex-col items-center gap-2 mb-6 text-center">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 shadow-md shadow-indigo-500/30">
                <Image
                  src="/icons/logo-2.svg"
                  width={22}
                  height={22}
                  alt="Zoomer"
                  className="brightness-0 invert"
                />
              </div>
              <span className="text-xl font-black tracking-tight text-white">ZOOMER</span>
            </Link>
            <p className="text-xs text-slate-400">Create your free enterprise account</p>
          </div>

          <div className="relative w-full">
            {/* Ambient glow behind card */}
            <div className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-indigo-500/25 via-violet-500/20 to-cyan-500/20 blur-2xl opacity-80" />
            <div className="relative w-full flex justify-center">
              <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}