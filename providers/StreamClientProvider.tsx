'use client';

import { useUser } from '@clerk/nextjs';
import { StreamVideo, StreamVideoClient } from '@stream-io/video-react-sdk';
import { ReactNode, useEffect, useState, useMemo } from 'react';

import { tokenProvider } from '@/actions/stream.actions';
import Loader from '@/components/Loader';

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const { user, isLoaded } = useUser();
  const [videoClient, setVideoClient] = useState<StreamVideoClient | null>(null);

  useEffect(() => {
    if (!isLoaded || !user) return;

    const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
    if (!apiKey) {
      console.error('Stream API key not found');
      return;
    }

    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: user.id,
        name: user.username || user.id,
        image: user.imageUrl,
      },
      tokenProvider,
    });

    setVideoClient(client);

    return () => {
      client.disconnectUser(); // Clean up when component unmounts
    };
  }, [user, isLoaded]);

  if (!videoClient) return <Loader />;

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
