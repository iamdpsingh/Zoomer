import CallList from '@/components/CallList';
import { Film } from 'lucide-react';

const Recordings = () => {
  return (
    <section className="flex size-full flex-col gap-8 text-white">
      <div className="flex flex-col gap-2 border-b border-white/[0.08] pb-6">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-purple-500/15 border border-purple-500/25 text-purple-400">
            <Film className="size-5" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Meeting Recordings
          </h1>
        </div>
        <p className="text-sm text-slate-400">
          Stream, playback, and review all cloud-recorded discussions.
        </p>
      </div>

      <CallList type="recordings" />
    </section>
  );
};

export default Recordings;