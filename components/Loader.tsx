import { Loader2 } from 'lucide-react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-[#080C15] text-white">
      <div className="relative flex items-center justify-center">
        <div className="absolute size-16 rounded-full bg-indigo-500/20 blur-xl animate-pulse" />
        <Loader2 className="size-10 animate-spin text-indigo-500" />
      </div>

      <div className="mt-5 flex items-center gap-1.5 text-base font-semibold tracking-wide text-slate-300">
        <span>Connecting to Zoomer</span>
        <span className="inline-flex gap-1 ml-0.5">
          <span className="size-1 rounded-full bg-indigo-400 animate-bounce [animation-delay:-0.3s]" />
          <span className="size-1 rounded-full bg-indigo-400 animate-bounce [animation-delay:-0.15s]" />
          <span className="size-1 rounded-full bg-indigo-400 animate-bounce" />
        </span>
      </div>
    </div>
  );
};

export default Loader;
