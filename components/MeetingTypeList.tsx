'use client';

import { useToast } from "@/components/ui/use-toast";
import { useUser } from '@clerk/nextjs';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ReactDatePicker from "react-datepicker";
import HomeCard from './HomeCard';
import MeetingModal from './MeetingModal';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const initialValues = {
  dateTime: new Date(),
  description: '',
  link: '',
};

const MeetingTypeList = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined
  >();

  const { user } = useUser();
  const client = useStreamVideoClient();
  const [values, setValues] = useState(initialValues);
  const [callDetail, setCallDetail] = useState<Call>();

  const createMeeting = async () => {
    if (!client || !user) return;

    try {
      if (!values.dateTime) {
        toast({
          title: "Date Required",
          description: "Please select a date and time for the scheduled meeting.",
        });
        return;
      }

      const id = crypto.randomUUID();
      const call = client.call('default', id);

      if (!call) throw new Error('Failed to create meeting');

      const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || 'Instant Meeting';

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });

      setCallDetail(call);

      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }

      toast({
        title: 'Meeting Created Successfully',
        description: 'Your meeting is ready and invite link generated.',
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Failed to Create Meeting",
        description: "Please check your network connection and try again.",
      });
    }
  };

  const handleJoinMeeting = () => {
    const rawLink = values.link.trim();
    if (!rawLink) {
      toast({
        title: "Missing Link",
        description: "Please enter a valid meeting link or ID.",
      });
      return;
    }

    // Support both full URLs (http.../meeting/xyz) and standalone meeting IDs
    if (rawLink.startsWith('http://') || rawLink.startsWith('https://')) {
      try {
        const url = new URL(rawLink);
        router.push(url.pathname);
      } catch {
        router.push(rawLink);
      }
    } else if (rawLink.startsWith('/meeting/')) {
      router.push(rawLink);
    } else {
      router.push(`/meeting/${rawLink}`);
    }
  };

  const meetingLink = typeof window !== 'undefined'
    ? `${window.location.origin}/meeting/${callDetail?.id}`
    : `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/meeting/${callDetail?.id}`;

  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {/* 1. New Instant Meeting */}
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Launch an instant video call in seconds"
        badgeText="Instant"
        containerClassName="border-indigo-500/25 from-indigo-950/40 via-slate-900/90 to-[#0A0E1A] hover:border-indigo-500/50"
        iconBgClassName="bg-indigo-600/20 text-indigo-400 border-indigo-500/30"
        badgeClassName="bg-indigo-500/10 text-indigo-300 border-indigo-500/20"
        handleClick={() => setMeetingState('isInstantMeeting')}
      />

      {/* 2. Join Meeting */}
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="Enter with an invitation link or room ID"
        badgeText="Connect"
        containerClassName="border-cyan-500/25 from-cyan-950/40 via-slate-900/90 to-[#0A0E1A] hover:border-cyan-500/50"
        iconBgClassName="bg-cyan-600/20 text-cyan-400 border-cyan-500/30"
        badgeClassName="bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
        handleClick={() => setMeetingState('isJoiningMeeting')}
      />

      {/* 3. Schedule Meeting */}
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule"
        description="Plan and prepare upcoming discussions"
        badgeText="Calendar"
        containerClassName="border-amber-500/25 from-amber-950/40 via-slate-900/90 to-[#0A0E1A] hover:border-amber-500/50"
        iconBgClassName="bg-amber-600/20 text-amber-400 border-amber-500/30"
        badgeClassName="bg-amber-500/10 text-amber-300 border-amber-500/20"
        handleClick={() => setMeetingState('isScheduleMeeting')}
      />

      {/* 4. Recordings */}
      <HomeCard
        img="/icons/recordings.svg"
        title="Recordings"
        description="Revisit saved archives and sessions"
        badgeText="Cloud"
        containerClassName="border-purple-500/25 from-purple-950/40 via-slate-900/90 to-[#0A0E1A] hover:border-purple-500/50"
        iconBgClassName="bg-purple-600/20 text-purple-400 border-purple-500/30"
        badgeClassName="bg-purple-500/10 text-purple-300 border-purple-500/20"
        handleClick={() => router.push('/home/recordings')}
      />

      {/* Schedule Meeting Modal */}
      {!callDetail ? (
        <MeetingModal
          isOpen={meetingState === 'isScheduleMeeting'}
          onClose={() => setMeetingState(undefined)}
          title="Schedule a Meeting"
          handleClick={createMeeting}
          buttonText="Confirm & Create"
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-200">
              Meeting Topic / Description
            </label>
            <Textarea
              placeholder="e.g. Weekly Engineering Sync, Design Review..."
              className="resize-none rounded-xl border border-white/10 bg-slate-950/70 p-3 text-sm text-white placeholder:text-slate-500 focus-visible:ring-1 focus-visible:ring-indigo-500 focus-visible:ring-offset-0"
              rows={3}
              onChange={(e) => {
                setValues({ ...values, description: e.target.value });
              }}
            />
          </div>

          <div className="flex w-full flex-col gap-2">
            <label className="text-sm font-semibold text-slate-200">
              Select Date and Time
            </label>
            <div className="relative">
              <ReactDatePicker
                selected={values.dateTime}
                onChange={(date) => setValues({ ...values, dateTime: date || new Date() })}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
                className="w-full rounded-xl border border-white/10 bg-slate-950/70 p-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>
        </MeetingModal>
      ) : (
        <MeetingModal
          isOpen={meetingState === 'isScheduleMeeting'}
          onClose={() => {
            setMeetingState(undefined);
            setCallDetail(undefined);
          }}
          title="Meeting Created Successfully"
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({
              title: 'Link Copied',
              description: 'Meeting invitation link copied to clipboard.',
            });
          }}
          image="/icons/checked.svg"
          buttonIcon="/icons/copy.svg"
          className="text-center"
          buttonText="Copy Invitation Link"
        />
      )}

      {/* Instant Meeting Modal */}
      <MeetingModal
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Launch Meeting Now"
        handleClick={createMeeting}
      >
        <p className="text-center text-sm text-slate-300">
          Your camera and microphone permissions will be verified before joining the room.
        </p>
      </MeetingModal>

      {/* Join Meeting Modal */}
      <MeetingModal
        isOpen={meetingState === 'isJoiningMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Join Existing Meeting"
        className="text-center"
        buttonText="Join Room"
        handleClick={handleJoinMeeting}
      >
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-300 text-left">
            Meeting Link or ID
          </label>
          <Input
            placeholder="Paste meeting link or ID here..."
            value={values.link}
            onChange={(e) => setValues({ ...values, link: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleJoinMeeting();
              }
            }}
            className="rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus-visible:ring-1 focus-visible:ring-indigo-500 focus-visible:ring-offset-0"
          />
        </div>
      </MeetingModal>
    </section>
  );
};

export default MeetingTypeList;