'use client';

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed left-3 sm:left-4 lg:left-6 top-24 bottom-4 z-30 hidden w-64 flex-col justify-between rounded-3xl bg-[#090e1c]/80 border border-violet-400/15 backdrop-blur-2xl backdrop-saturate-150 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.12),0_25px_50px_rgba(0,0,0,0.55),0_0_35px_rgba(139,92,246,0.06)] p-4 sm:flex transition-all">
      <div className="flex flex-col gap-1.5 w-full">
        <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
          <span>Navigation</span>
          <span className="size-1.5 rounded-full bg-indigo-400/60" />
        </div>

        {sidebarLinks.map((link) => {
          const isActive = pathname === link.route || (pathname.startsWith(link.route) && link.route !== '/home');

          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "group relative flex items-center gap-3.5 px-3.5 py-3 rounded-2xl text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-gradient-to-r from-indigo-500/25 via-violet-500/15 to-transparent border border-indigo-400/30 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_4px_16px_rgba(99,102,241,0.18)]"
                  : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
              )}
            >
              {isActive && (
                <span className="absolute left-1.5 top-2.5 bottom-2.5 w-1 rounded-full bg-gradient-to-b from-indigo-400 to-violet-500 shadow-[0_0_10px_rgba(99,102,241,0.9)]" />
              )}
              <div className={cn(
                "flex items-center justify-center size-8 rounded-xl transition-all",
                isActive 
                  ? "bg-indigo-600/35 text-indigo-300 ring-1 ring-indigo-400/40 shadow-sm shadow-indigo-500/30" 
                  : "bg-white/[0.04] border border-white/[0.05] text-slate-400 group-hover:bg-white/[0.08] group-hover:text-white group-hover:border-white/10"
              )}>
                <Image
                  src={link.imgURL}
                  alt={link.label}
                  width={18}
                  height={18}
                  className={cn(
                    "transition-transform group-hover:scale-110",
                    isActive ? "brightness-125 filter" : "opacity-80 group-hover:opacity-100"
                  )}
                />
              </div>
              <span className="truncate">{link.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Pro Badge Card */}
      <div className="mt-auto rounded-2xl bg-gradient-to-b from-indigo-950/40 via-[#0e1629]/70 to-[#080d1a]/90 border border-indigo-500/20 p-4 text-xs backdrop-blur-xl shadow-inner">
        <div className="flex items-center gap-2 text-indigo-300 font-semibold mb-1">
          <Sparkles className="size-4 text-indigo-400 animate-pulse" />
          <span>Zoomer Pro</span>
        </div>
        <p className="text-slate-400 text-[11px] leading-relaxed mb-3">
          Ultra HD video, unlimited meeting durations, and cloud storage enabled.
        </p>
        <Link
          href="/home/personal-room"
          className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600/30 to-violet-600/30 border border-indigo-500/30 py-2 text-center font-semibold text-xs text-indigo-200 hover:from-indigo-600 hover:to-violet-600 hover:text-white transition-all shadow-md shadow-indigo-600/20"
        >
          My Meeting Room
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;