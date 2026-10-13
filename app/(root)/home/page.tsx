'use client';

import { useEffect, useState } from 'react';
import MeetingTypeList from '@/components/MeetingTypeList';
import { useUser } from '@clerk/nextjs';
import { Calendar, Clock, ShieldCheck, Video } from 'lucide-react';

const Home = () => {
  const [time, setTime] = useState('');
  const [greeting, setGreeting] = useState('Welcome');
  const [dateStr, setDateStr] = useState('');
  const { user, isLoaded } = useUser();

  useEffect(() => {
    const updateTime = () => {
      const current = new Date();
      setTime(current.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
      setDateStr(new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(current));

      const hour = current.getHours();
      if (hour < 12) setGreeting('Good morning');
      else if (hour < 18) setGreeting('Good afternoon');
      else setGreeting('Good evening');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const userName = isLoaded && user?.firstName ? user.firstName : (user?.username || 'Guest');

  return (
    <section className="flex size-full flex-col gap-8 text-white">
      {/* Executive Command Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.09] bg-gradient-to-br from-indigo-950/60 via-slate-900/90 to-[#0A0E1A] p-6 sm:p-10 shadow-2xl">
        {/* Ambient decorative glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 size-80 rounded-full bg-violet-600/10 blur-3xl" />

        <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          {/* Left Column: Greeting & Status Badges */}
          <div className="flex flex-col gap-4 max-w-xl">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3.5 py-1 text-xs font-medium text-indigo-300 backdrop-blur-md">
              <span className="size-2 rounded-full bg-indigo-400 animate-ping" />
              <span>{greeting}, {userName}</span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-2">
                Ready to collaborate?
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect with crystal-clear audio, dynamic screen sharing, and enterprise-grade end-to-end security.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 rounded-xl bg-white/[0.04] border border-white/[0.06] px-3 py-1.5 text-xs text-slate-300">
                <ShieldCheck className="size-3.5 text-emerald-400" />
                <span>WebRTC 256-bit Encrypted</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/[0.04] border border-white/[0.06] px-3 py-1.5 text-xs text-slate-300">
                <Video className="size-3.5 text-indigo-400" />
                <span>HD Video Engine Ready</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Live Clock */}
          <div className="flex flex-col items-start md:items-end gap-1.5 rounded-2xl border border-white/[0.08] bg-black/30 p-5 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
              <Clock className="size-3.5" />
              <span>Live Clock</span>
            </div>
            <div className="text-4xl sm:text-6xl font-black tracking-tighter text-white tabular-nums">
              {time || '--:--'}
            </div>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-400">
              <Calendar className="size-3.5 text-slate-400" />
              <span>{dateStr || 'Loading date...'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Grid */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white tracking-tight">Quick Actions</h2>
          <span className="text-xs text-slate-400">Start, schedule, or join instantly</span>
        </div>
        <MeetingTypeList />
      </div>
    </section>
  );
};

export default Home;
