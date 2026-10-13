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
    <aside className="fixed left-0 top-0 z-30 hidden h-screen w-64 flex-col justify-between border-r border-white/[0.08] bg-[#0A0E1A]/95 backdrop-blur-xl pt-24 pb-6 px-4 sm:flex transition-all">
      <div className="flex flex-col gap-2 w-full">
        <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Navigation
        </div>

        {sidebarLinks.map((link) => {
          const isActive = pathname === link.route || (pathname.startsWith(link.route) && link.route !== '/home');

          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "group relative flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-gradient-to-r from-indigo-600/20 to-violet-600/10 text-white border border-indigo-500/30 shadow-sm shadow-indigo-500/10"
                  : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
              )}
            >
              {isActive && (
                <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
              )}
              <div className={cn(
                "flex items-center justify-center size-8 rounded-lg transition-colors",
                isActive 
                  ? "bg-indigo-600/30 text-indigo-400" 
                  : "bg-white/[0.04] text-slate-400 group-hover:bg-white/[0.08] group-hover:text-white"
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
      <div className="mt-auto rounded-2xl border border-indigo-500/20 bg-gradient-to-b from-indigo-950/40 to-slate-950/60 p-4 text-xs">
        <div className="flex items-center gap-2 text-indigo-400 font-semibold mb-1">
          <Sparkles className="size-4" />
          <span>Zoomer Pro</span>
        </div>
        <p className="text-slate-400 text-[11px] leading-relaxed mb-3">
          Ultra HD video, unlimited meeting durations, and cloud storage enabled.
        </p>
        <Link
          href="/home/personal-room"
          className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-600/30 border border-indigo-500/30 py-1.5 text-center font-medium text-indigo-200 hover:bg-indigo-600 hover:text-white transition-colors"
        >
          My Meeting Room
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;