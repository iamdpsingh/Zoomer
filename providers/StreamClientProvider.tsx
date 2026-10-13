'use client';

import { useUser } from '@clerk/nextjs';
import { StreamVideo, StreamVideoClient } from '@stream-io/video-react-sdk';
import { ReactNode, useEffect, useState } from 'react';
import { tokenProvider } from '@/actions/stream.actions';
import Loader from '@/components/Loader';
import { AlertTriangle, Key } from 'lucide-react';
import Link from 'next/link';

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const { user, isLoaded } = useUser();
  const [videoClient, setVideoClient] = useState<StreamVideoClient | null>(null);
  const [missingKey, setMissingKey] = useState(false);

  useEffect(() => {
    if (!isLoaded || !user) return;

    const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
    if (!apiKey) {
      console.warn('Stream API key not found in environment variables');
      setMissingKey(true);
      return;
    }

    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: user.id,
        name: user.username || user.firstName || user.id,
        image: user.imageUrl,
      },
      tokenProvider,
    });

    setVideoClient(client);

    return () => {
      client.disconnectUser();
    };
  }, [user, isLoaded]);

  if (missingKey) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#080C15] p-6 text-white text-center">
        <div className="max-w-md rounded-3xl border border-amber-500/30 bg-slate-900/90 p-8 shadow-2xl backdrop-blur-xl">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-amber-500/15 border border-amber-500/25 text-amber-400 mb-5">
            <Key className="size-7" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white mb-2">
            Stream API Key Required
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            To enable live video and audio calling, configure <code className="rounded bg-black/50 px-1.5 py-0.5 text-xs text-amber-300">NEXT_PUBLIC_STREAM_API_KEY</code> and <code className="rounded bg-black/50 px-1.5 py-0.5 text-xs text-amber-300">STREAM_SECRET_KEY</code> in your <code className="rounded bg-black/50 px-1.5 py-0.5 text-xs text-amber-300">.env.local</code> file.
          </p>
          <Link
            href="/home"
            className="inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 hover:bg-indigo-500 py-3 text-sm font-semibold text-white transition-colors shadow-md shadow-indigo-600/30"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  if (!videoClient) {
    if (isLoaded && !user) {
      return <>{children}</>;
    }
    return <Loader />;
  }

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
