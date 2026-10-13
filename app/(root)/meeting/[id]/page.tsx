'use client';

import Loader from '@/components/Loader';
import MeetingRoom from '@/components/MeetingRoom';
import MeetingSetup from '@/components/MeetingSetup';
import { useGetCallById } from '@/hooks/useGetCallById';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { VideoOff, ArrowLeft } from 'lucide-react';

const Meeting = () => {
  const params = useParams();
  const id = params?.id;

  const { isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  if (typeof id !== 'string') {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#080C15] p-6 text-white text-center">
        <div className="max-w-md rounded-3xl border border-rose-500/30 bg-slate-900/90 p-8 shadow-2xl">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-rose-500/15 border border-rose-500/25 text-rose-400 mb-5">
            <VideoOff className="size-7" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Invalid Meeting ID</h2>
          <p className="text-sm text-slate-300 mb-6">The meeting ID provided in the URL is malformed.</p>
          <Link
            href="/home"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors"
          >
            <ArrowLeft className="size-4" />
            <span>Return to Dashboard</span>
          </Link>
        </div>
      </div>
    );
  }

  const { call, isCallLoading } = useGetCallById(id);

  if (!isLoaded || isCallLoading) return <Loader />;

  if (!call) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#080C15] p-6 text-white text-center">
        <div className="max-w-md rounded-3xl border border-white/10 bg-slate-900/90 p-8 shadow-2xl backdrop-blur-xl">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-indigo-500/15 border border-indigo-500/25 text-indigo-400 mb-5">
            <VideoOff className="size-7" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Call Not Found</h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            This meeting does not exist or has already concluded. Verify the meeting link and try again.
          </p>
          <Link
            href="/home"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors shadow-md shadow-indigo-600/30"
          >
            <ArrowLeft className="size-4" />
            <span>Back to Dashboard</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="h-screen w-full bg-[#080C15]">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
