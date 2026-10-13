'use client';

import Loader from '@/components/Loader';
import MeetingRoom from '@/components/MeetingRoom';
import MeetingSetup from '@/components/MeetingSetup';
import { useGetCallById } from '@/hooks/useGetCallById';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { VideoOff, ArrowLeft } from 'lucide-react';

const Meeting = () => {
  const params = useParams();
  const rawId = params?.id;
  const id = Array.isArray(rawId) ? rawId[0] : (typeof rawId === 'string' ? rawId : '');

  const { isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const client = useStreamVideoClient();
  const { call, isCallLoading } = useGetCallById(id);

  if (!id) {
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

  if (!isLoaded || isCallLoading) return <Loader />;

  const activeCall = call || (client ? client.call('default', id) : undefined);

  if (!activeCall) return <Loader />;

  return (
    <main className="h-screen w-full bg-[#080C15]">
      <StreamCall call={activeCall}>
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
