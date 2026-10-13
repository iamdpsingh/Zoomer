'use client';

import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Mic, MicOff, Settings, Video, VideoOff, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);
  const call = useCall();

  if (!call) {
    throw new Error('useCall must be within StreamCall component');
  }

  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToggledOn, call?.camera, call?.microphone]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#080C15] p-6 text-white">
      {/* Top Bar */}
      <div className="absolute top-6 left-6">
        <Link
          href="/home"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-300 hover:bg-white/[0.08] hover:text-white transition-colors"
        >
          <ArrowLeft className="size-4" />
          <span>Exit to Dashboard</span>
        </Link>
      </div>

      <div className="flex w-full max-w-xl flex-col items-center gap-6 rounded-3xl border border-white/[0.08] bg-slate-900/60 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Audio & Video Setup
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-400">
            Check your appearance and audio levels before joining the call.
          </p>
        </div>

        {/* Video Preview Container */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black aspect-video shadow-inner">
          <VideoPreview className="size-full object-cover" />
        </div>

        {/* Controls and Toggles */}
        <div className="flex flex-col sm:flex-row w-full items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-black/40 px-5 py-3">
          <label className="flex items-center gap-3 cursor-pointer select-none text-xs sm:text-sm font-medium text-slate-300 hover:text-white">
            <input
              type="checkbox"
              checked={isMicCamToggledOn}
              onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
              className="size-4 rounded border-slate-700 bg-slate-800 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0"
            />
            <div className="flex items-center gap-2">
              {isMicCamToggledOn ? (
                <>
                  <MicOff className="size-4 text-rose-400" />
                  <VideoOff className="size-4 text-rose-400" />
                  <span>Join with Mic & Cam Muted</span>
                </>
              ) : (
                <>
                  <Mic className="size-4 text-emerald-400" />
                  <Video className="size-4 text-emerald-400" />
                  <span>Mic & Camera Ready</span>
                </>
              )}
            </div>
          </label>

          <div className="flex items-center gap-2">
            <DeviceSettings />
          </div>
        </div>

        {/* Join CTA */}
        <Button
          className="w-full h-12 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-sm text-white shadow-lg shadow-indigo-600/30 transition-all duration-200"
          onClick={() => {
            call.join();
            setIsSetupComplete(true);
          }}
        >
          Join Meeting
        </Button>
      </div>
    </div>
  );
};

export default MeetingSetup;