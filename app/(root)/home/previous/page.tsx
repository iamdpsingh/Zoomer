import CallList from "@/components/CallList";
import { History } from "lucide-react";

const PreviousPage = () => {
  return (
    <section className="flex size-full flex-col gap-8 text-white">
      <div className="flex flex-col gap-2 border-b border-white/[0.08] pb-6">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-slate-500/15 border border-slate-500/25 text-slate-300">
            <History className="size-5" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Previous Calls
          </h1>
        </div>
        <p className="text-sm text-slate-400">
          History and details of all completed calls and sessions.
        </p>
      </div>

      <CallList type="ended" />
    </section>
  );
};

export default PreviousPage;