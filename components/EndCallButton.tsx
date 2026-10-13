"use client";

import { useCall, useCallStateHooks } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { PhoneOff } from 'lucide-react';

const EndCallButton = () => {
  const call = useCall();
  const router = useRouter();

  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();

  const isMeetingOwner =
    localParticipant &&
    call?.state.createdBy &&
    localParticipant.userId === call.state.createdBy.id;

  if (!isMeetingOwner) {
    return null;
  }

  return (
    <Button
      onClick={async () => {
        await call.endCall();
        router.push('/home');
      }}
      className="flex items-center gap-2 rounded-xl bg-rose-600 hover:bg-rose-500 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-rose-600/30 transition-all duration-200"
    >
      <PhoneOff className="size-3.5" />
      <span>End for All</span>
    </Button>
  );
};

export default EndCallButton;