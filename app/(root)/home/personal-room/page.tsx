"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useGetCallById } from "@/hooks/useGetCallById";
import { Copy, Link2, Shield, Video, Sparkles } from "lucide-react";

const InfoRow = ({
  label,
  value,
  onCopy,
}: {
  label: string;
  value: string;
  onCopy?: () => void;
}) => {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-white/[0.06] bg-slate-900/40 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-1 min-w-0">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
          {label}
        </span>
        <span className="truncate text-sm sm:text-base font-medium text-slate-100 select-all">
          {value}
        </span>
      </div>

      {onCopy && (
        <Button
          variant="outline"
          size="sm"
          onClick={onCopy}
          className="h-8 rounded-lg border-white/10 bg-white/[0.04] text-xs font-medium text-slate-300 hover:bg-white/[0.08] hover:text-white shrink-0 self-start sm:self-auto"
        >
          <Copy className="mr-1.5 size-3 text-slate-400" />
          Copy
        </Button>
      )}
    </div>
  );
};

const PersonalRoom = () => {
  const { user } = useUser();
  const router = useRouter();
  const { toast } = useToast();
  const client = useStreamVideoClient();
  const [origin, setOrigin] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  const meetingId = user?.id || '';
  const { call } = useGetCallById(meetingId);

  const startRoom = async () => {
    if (!client || !user) return;

    const newCall = client.call("default", meetingId);
    if (!call) {
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }
    router.push(`/meeting/${meetingId}?personal=true`);
  };

  const baseUrl =
    origin ||
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : "");

  const meetingLink = baseUrl
    ? `${baseUrl}/meeting/${meetingId}?personal=true`
    : `/meeting/${meetingId}?personal=true`;
  const roomTopic = user?.firstName ? `${user.firstName}'s Personal Room` : (user?.username ? `${user.username}'s Personal Room` : 'Personal Meeting Room');


  return (
    <section className="flex size-full flex-col gap-8 text-white">
      {/* Header */}
      <div className="flex flex-col gap-2 border-b border-white/[0.08] pb-6">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-500/15 border border-indigo-500/25 text-indigo-400">
            <Sparkles className="size-5" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Personal Meeting Room
          </h1>
        </div>
        <p className="text-sm text-slate-400">
          Your permanent, dedicated meeting URL that never expires. Ideal for recurring 1-on-1s and quick catch-ups.
        </p>
      </div>

      {/* Main Room Card */}
      <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-slate-900/90 to-[#0A0E1A] p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              Room Active & Ready
            </span>

            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Shield className="size-3.5 text-indigo-400" />
              <span>Host-Protected</span>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <InfoRow
              label="Meeting Topic"
              value={roomTopic}
            />

            <InfoRow
              label="Permanent Room ID"
              value={meetingId || 'Generating...'}
              onCopy={() => {
                navigator.clipboard.writeText(meetingId);
                toast({
                  title: "Room ID Copied",
                  description: "Room ID copied to clipboard.",
                });
              }}
            />

            <InfoRow
              label="Invite Link"
              value={meetingLink}
              onCopy={() => {
                navigator.clipboard.writeText(meetingLink);
                toast({
                  title: "Invitation Link Copied",
                  description: "Permanent meeting URL copied to clipboard.",
                });
              }}
            />
          </div>

          {/* Action CTAs */}
          <div className="mt-6 flex flex-wrap gap-4 pt-4 border-t border-white/[0.06]">
            <Button
              className="h-11 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-6 font-semibold text-sm text-white shadow-lg shadow-indigo-600/25 transition-all"
              onClick={startRoom}
            >
              <Video className="mr-2 size-4" />
              Start Meeting Now
            </Button>

            <Button
              variant="outline"
              className="h-11 rounded-xl border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white px-5 font-medium text-sm text-slate-200"
              onClick={() => {
                navigator.clipboard.writeText(meetingLink);
                toast({
                  title: "Invite Link Copied",
                  description: "Share this link with your guests to join your room.",
                });
              }}
            >
              <Link2 className="mr-2 size-4 text-slate-400" />
              Copy Room Invitation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalRoom;