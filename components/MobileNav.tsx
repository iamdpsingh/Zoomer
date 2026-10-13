'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button className="flex items-center justify-center size-9 rounded-xl bg-white/[0.06] text-white hover:bg-white/[0.12] transition-colors">
            <Menu className="size-4 text-slate-200" />
            <span className="sr-only">Toggle navigation</span>
          </button>
        </SheetTrigger>

        <SheetContent side="left" className="border-0 bg-[#090D18]/95 backdrop-blur-2xl p-6 text-white w-72 shadow-2xl">
          <Link href="/home" className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center size-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 shadow-md shadow-indigo-500/20">
              <Image 
                src="/icons/logo-2.svg"
                width={20}
                height={20}
                alt="Zoomer Logo"
                className="brightness-0 invert"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-white">
                ZOOMER
              </span>
              <span className="text-[9px] uppercase font-semibold tracking-widest text-indigo-400 -mt-1">
                Pro Video
              </span>
            </div>
          </Link>

          <div className="flex h-[calc(100vh-120px)] flex-col justify-between overflow-y-auto">
            <section className="flex flex-col gap-2">
              <span className="px-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Menu
              </span>
              {sidebarLinks.map((item) => {
                const isActive = pathname === item.route;

                return (
                  <SheetClose asChild key={item.route}>
                    <Link
                      href={item.route}
                      className={cn(
                        'flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                        isActive
                          ? 'bg-gradient-to-r from-indigo-600/25 to-violet-600/15 text-white border border-indigo-500/30'
                          : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                      )}
                    >
                      <div className={cn(
                        'flex items-center justify-center size-8 rounded-lg',
                        isActive ? 'bg-indigo-600/30 text-indigo-400' : 'bg-white/[0.04]'
                      )}>
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={18}
                          height={18}
                          className={isActive ? "brightness-125 filter" : "opacity-75"}
                        />
                      </div>
                      <span className="truncate">{item.label}</span>
                    </Link>
                  </SheetClose>
                );
              })}
            </section>

            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 text-xs text-slate-400">
              <p className="font-semibold text-slate-300">Zoomer 2.0</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Encrypted HD WebRTC meetings</p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;