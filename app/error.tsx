'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, RotateCcw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App runtime error caught:', error);
  }, [error]);

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#080C15] p-6 text-white text-center overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-rose-600/15 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-md rounded-3xl border border-rose-500/25 bg-slate-900/85 p-8 sm:p-10 shadow-2xl backdrop-blur-2xl">
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-rose-500/15 border border-rose-500/25 text-rose-400 mb-6">
          <AlertCircle className="size-8" />
        </div>

        <span className="rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-300 uppercase tracking-widest">
          Application Error
        </span>

        <h1 className="mt-4 text-2xl sm:text-3xl font-black tracking-tight text-white">
          Something went wrong
        </h1>

        <p className="mt-2 text-sm text-slate-300 leading-relaxed mb-4">
          An unexpected error occurred while rendering this session. You can retry or head back to the dashboard.
        </p>

        {error?.message && (
          <div className="mb-6 rounded-xl border border-rose-500/20 bg-rose-950/40 p-3 text-left">
            <p className="text-xs font-mono text-rose-300 break-words">
              {error.message}
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            onClick={() => reset()}
            className="w-full sm:w-auto h-11 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-5 text-sm font-semibold text-white shadow-md shadow-indigo-600/30 transition-all"
          >
            <RotateCcw className="mr-2 size-4" />
            Try Again
          </Button>
          <Link
            href="/home"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] px-4 text-sm font-medium text-slate-300 hover:text-white transition-all"
          >
            <Home className="size-4" />
            <span>Dashboard</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
