import Link from 'next/link';
import { ArrowLeft, Compass, Video } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#080C15] p-6 text-white text-center overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-indigo-600/15 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 right-10 w-[500px] h-[400px] bg-violet-600/10 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-md rounded-3xl border border-white/[0.08] bg-slate-900/80 p-8 sm:p-10 shadow-2xl backdrop-blur-2xl">
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-indigo-500/15 border border-indigo-500/25 text-indigo-400 mb-6">
          <Compass className="size-8 animate-spin [animation-duration:12s]" />
        </div>

        <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300 uppercase tracking-widest">
          404 Error
        </span>

        <h1 className="mt-4 text-3xl font-black tracking-tight text-white">
          Page or Room Not Found
        </h1>

        <p className="mt-2 text-sm text-slate-300 leading-relaxed mb-8">
          The link you followed doesn't exist, has expired, or the meeting room may have concluded.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/home"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-600/30 transition-all"
          >
            <Video className="size-4" />
            <span>Go to Dashboard</span>
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white transition-all"
          >
            <ArrowLeft className="size-4" />
            <span>Landing Page</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
