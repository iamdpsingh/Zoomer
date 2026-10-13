import { SignUp } from '@clerk/nextjs';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function SignUpPage() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center bg-[#080C15] p-6 text-white overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/15 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 right-10 w-[500px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px]" />

      <div className="absolute top-6 left-6 z-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-300 hover:bg-white/[0.08] hover:text-white transition-colors"
        >
          <ArrowLeft className="size-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="relative z-10">
        <SignUp />
      </div>
    </main>
  );
}