'use client';

import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface HomeCardProps {
  containerClassName?: string;
  iconBgClassName?: string;
  badgeText?: string;
  badgeClassName?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({
  containerClassName,
  iconBgClassName = "bg-indigo-600/20 text-indigo-400 border-indigo-500/30",
  badgeText,
  badgeClassName = "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  img,
  title,
  description,
  handleClick
}: HomeCardProps) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick?.();
        }
      }}
      className={cn(
        "group relative flex min-h-[220px] w-full flex-col justify-between overflow-hidden rounded-2xl border p-6 transition-all duration-300 cursor-pointer text-left select-none",
        "bg-gradient-to-b from-slate-900/90 to-[#0B0F19] border-white/[0.08] hover:border-white/20 hover:shadow-xl hover:-translate-y-1",
        containerClassName
      )}
    >
      {/* Subtle hover gradient highlight */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.04] to-transparent" />

      {/* Top row: Icon & Badge */}
      <div className="relative z-10 flex items-start justify-between">
        <div className={cn(
          "flex size-12 items-center justify-center rounded-xl border backdrop-blur-md shadow-sm transition-transform duration-300 group-hover:scale-110",
          iconBgClassName
        )}>
          <Image
            src={img}
            width={24}
            height={24}
            alt={title}
            className="filter brightness-125"
          />
        </div>

        {badgeText && (
          <span className={cn(
            "rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide uppercase",
            badgeClassName
          )}>
            {badgeText}
          </span>
        )}
      </div>

      {/* Bottom row: Title, Description, and Quick arrow */}
      <div className="relative z-10 mt-6 flex items-end justify-between">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-200 transition-colors">
            {title}
          </h3>
          <p className="mt-1 text-sm font-medium text-slate-400 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex size-8 items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-400 group-hover:bg-indigo-600 group-hover:border-indigo-500 group-hover:text-white transition-all duration-200">
          <ArrowUpRight className="size-4" />
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
