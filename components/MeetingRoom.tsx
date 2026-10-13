'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from '@/lib/utils';
import {
  CallControls,
  CallParticipantsList,
  CallStatsButton,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from '@stream-io/video-react-sdk';
import { LayoutList, Users } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import EndCallButton from './EndCallButton';
import Loader from './Loader';

type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right';

const MeetingRoom = () => {
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get('personal');
  const router = useRouter();
  const [layout, setLayout] = useState<CallLayoutType>('speaker-left');
  const [showParticipants, setShowParticipants] = useState(false);

  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) {
    return <Loader />;
  }

  const CallLayout = () => {
    switch (layout) {
      case 'grid':
        return <PaginatedGridLayout />;
      case 'speaker-right':
        return <SpeakerLayout participantsBarPosition="left" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#080C15] text-white">
      {/* Main Video Viewport */}
      <div className="relative flex size-full items-center justify-center p-4 pb-24">
        <div className="flex size-full max-w-[1200px] items-center justify-center">
          <CallLayout />
        </div>

        {/* Participants drawer */}
        <div
          className={cn(
            'fixed right-4 top-4 bottom-24 w-80 rounded-2xl border border-white/10 bg-slate-950/90 backdrop-blur-2xl p-4 shadow-2xl z-30 transition-all',
            showParticipants ? 'block' : 'hidden'
          )}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>

      {/* Floating Control Bar Dock */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center justify-center gap-3 rounded-2xl border border-white/[0.1] bg-slate-950/80 px-4 py-2.5 backdrop-blur-2xl shadow-2xl">
        <CallControls onLeave={() => router.push('/home')} />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              aria-label="Change layout"
              className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white hover:bg-white/[0.12] transition-colors"
            >
              <LayoutList className="size-4 text-slate-200" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border border-white/10 bg-slate-950/95 text-white backdrop-blur-xl rounded-xl p-1.5 shadow-2xl">
            <div className="px-2 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Layout Options
            </div>
            {(['Grid', 'Speaker-Left', 'Speaker-Right'] as const).map((item) => (
              <DropdownMenuItem
                key={item}
                onClick={() => setLayout(item.toLowerCase() as CallLayoutType)}
                className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs font-medium hover:bg-indigo-600/20 hover:text-indigo-300 focus:bg-indigo-600/20 focus:text-indigo-300 transition-colors"
              >
                {item}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="rounded-xl border border-white/10 bg-white/[0.06] overflow-hidden">
          <CallStatsButton />
        </div>

        <button
          onClick={() => setShowParticipants((prev) => !prev)}
          aria-label="Toggle participants list"
          className={cn(
            "flex size-10 items-center justify-center rounded-xl border transition-colors",
            showParticipants
              ? "border-indigo-500 bg-indigo-600/30 text-indigo-300"
              : "border-white/10 bg-white/[0.06] text-white hover:bg-white/[0.12]"
          )}
        >
          <Users className="size-4" />
        </button>

        {!isPersonalRoom && <EndCallButton />}
      </div>
    </section>
  );
};

export default MeetingRoom;