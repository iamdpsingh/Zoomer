import CallList from '@/components/CallList';
import { Calendar } from 'lucide-react';

const Upcoming = () => {
  return (
    <section className="flex size-full flex-col gap-8 text-white">
      <div className="flex flex-col gap-2 border-b border-white/[0.08] pb-6">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/15 border border-amber-500/25 text-amber-400">
            <Calendar className="size-5" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Upcoming Meetings
          </h1>
        </div>
        <p className="text-sm text-slate-400">
          Review and prepare for your scheduled video conference calls.
        </p>
      </div>

      <CallList type="upcoming" />
    </section>
  );
};

export default Upcoming;