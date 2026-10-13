"use client";

import Image from "next/image";
import { avatarImages } from "@/constants";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { Calendar, Copy, Play, Video } from "lucide-react";

interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  buttonIcon1,
  handleClick,
  link,
  buttonText,
}: MeetingCardProps) => {
  const { toast } = useToast();

  return (
    <article className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-gradient-to-b from-slate-900/90 to-[#0A0E1A] p-6 shadow-lg transition-all duration-300 hover:border-white/20 hover:shadow-indigo-500/5">
      {/* Top Header: Icon & Category */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex size-11 items-center justify-center rounded-xl border border-indigo-500/25 bg-indigo-500/15 text-indigo-400">
            <Image 
              src={icon} 
              alt="meeting type" 
              width={22} 
              height={22}
              className="brightness-125" 
            />
          </div>

          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-300">
            {isPreviousMeeting ? "Completed" : buttonIcon1 ? "Recording" : "Scheduled"}
          </span>
        </div>

        <div>
          <h2 className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-200 transition-colors line-clamp-1">
            {title}
          </h2>
          <div className="mt-1.5 flex items-center gap-2 text-xs sm:text-sm text-slate-400">
            <Calendar className="size-3.5 text-slate-400" />
            <span>{date}</span>
          </div>
        </div>
      </div>

      {/* Bottom Section: Attendees & Action Buttons */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.06]">
        {/* Attendee Avatars */}
        <div className="flex items-center -space-x-2.5 overflow-hidden">
          {avatarImages.slice(0, 4).map((img, index) => (
            <div
              key={index}
              className="relative size-8 rounded-full ring-2 ring-slate-900 overflow-hidden"
            >
              <Image
                src={img}
                alt="attendee avatar"
                fill
                className="object-cover"
              />
            </div>
          ))}
          <div className="flex size-8 items-center justify-center rounded-full bg-indigo-600/30 border border-indigo-500/40 text-[11px] font-bold text-indigo-200 ring-2 ring-slate-900">
            +5
          </div>
        </div>

        {/* Buttons */}
        {!isPreviousMeeting && (
          <div className="flex items-center gap-2.5">
            <Button
              onClick={handleClick}
              className="h-9 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-4 text-xs font-semibold text-white transition-all shadow-md shadow-indigo-600/20"
            >
              {buttonIcon1 ? (
                <Play className="mr-1.5 size-3.5 fill-current" />
              ) : (
                <Video className="mr-1.5 size-3.5" />
              )}
              {buttonText || "Start"}
            </Button>

            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast({
                  title: "Link Copied",
                  description: "Meeting URL has been copied to your clipboard.",
                });
              }}
              variant="outline"
              className="h-9 rounded-xl border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white px-3 text-xs font-medium text-slate-300"
            >
              <Copy className="mr-1.5 size-3.5 text-slate-400" />
              Copy Link
            </Button>
          </div>
        )}
      </div>
    </article>
  );
};

export default MeetingCard;