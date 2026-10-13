'use client';

import { useGetCalls } from '@/hooks/useGetCalls';
import { Call, CallRecording } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loader from './Loader';
import MeetingCard from './MeetingCard';
import { useToast } from './ui/use-toast';
import { Calendar, Film, History, Plus } from 'lucide-react';
import Link from 'next/link';

const CallList = ({ type }: { type: 'ended' | 'upcoming' | 'recordings' }) => {
  const { endedCalls, upcomingCalls, callRecordings, isLoading } = useGetCalls();
  const router = useRouter();
  const { toast } = useToast();
  const [recordings, setRecordings] = useState<CallRecording[]>([]);

  const getCalls = () => {
    switch (type) {
      case 'ended':
        return endedCalls;
      case 'recordings':
        return recordings;
      case 'upcoming':
        return upcomingCalls;
      default:
        return [];
    }
  };

  const getNoCallsMessage = () => {
    switch (type) {
      case 'ended':
        return {
          title: 'No Previous Calls',
          description: 'Meetings you have hosted or joined will be archived here.',
          icon: History,
        };
      case 'recordings':
        return {
          title: 'No Recordings Found',
          description: 'Cloud recorded meetings will automatically be saved and available here.',
          icon: Film,
        };
      case 'upcoming':
        return {
          title: 'No Upcoming Calls',
          description: 'You have no scheduled sessions on your calendar right now.',
          icon: Calendar,
        };
      default:
        return {
          title: 'No Calls',
          description: '',
          icon: Calendar,
        };
    }
  };

  useEffect(() => {
    const fetchRecordings = async () => {
      try {
        const callData = await Promise.all(
          callRecordings?.map((meeting) => meeting.queryRecordings()) ?? [],
        );

        const recordings = callData
          .filter((call) => call.recordings.length > 0)
          .flatMap((call) => call.recordings);

        setRecordings(recordings);
      } catch (error) {
        console.error(error);
        toast({
          title: "Notice",
          description: "Could not fetch recordings at this time. Please try again later.",
        });
      }
    };

    if (type === 'recordings') {
      fetchRecordings();
    }
  }, [type, callRecordings, toast]);

  if (isLoading) return <Loader />;

  const calls = getCalls();
  const emptyInfo = getNoCallsMessage();
  const EmptyIcon = emptyInfo.icon;

  const [origin, setOrigin] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin);
    }
  }, []);

  const baseUrl =
    origin ||
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : '');


  return (
    <div>
      {calls && calls.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {calls.map((meeting: Call | CallRecording, index: number) => {
            const isRecording = type === 'recordings';
            const callItem = meeting as Call;
            const recItem = meeting as CallRecording;

            const uniqueKey = isRecording ? (recItem.url || `rec-${index}`) : (callItem.id || `call-${index}`);

            return (
              <MeetingCard
                key={uniqueKey}
                icon={
                  type === 'ended'
                    ? '/icons/previous.svg'
                    : type === 'upcoming'
                      ? '/icons/upcoming.svg'
                      : '/icons/recordings.svg'
                }
                title={
                  callItem.state?.custom?.description ||
                  recItem.filename?.substring(0, 30) ||
                  'Zoomer Meeting'
                }
                date={
                  callItem.state?.startsAt?.toLocaleString() ||
                  recItem.start_time?.toLocaleString() ||
                  'Recent'
                }
                isPreviousMeeting={type === 'ended'}
                link={
                  isRecording
                    ? recItem.url
                    : `${baseUrl}/meeting/${callItem.id}`
                }
                buttonIcon1={isRecording ? '/icons/play.svg' : undefined}
                buttonText={isRecording ? 'Play Recording' : 'Start Meeting'}
                handleClick={
                  isRecording
                    ? () => router.push(`${recItem.url}`)
                    : () => router.push(`/meeting/${callItem.id}`)
                }
              />
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/[0.1] bg-slate-900/30 p-12 text-center backdrop-blur-sm">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4">
            <EmptyIcon className="size-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{emptyInfo.title}</h3>
          <p className="max-w-md text-sm text-slate-400 mb-6 leading-relaxed">
            {emptyInfo.description}
          </p>
          <Link
            href="/home"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white transition-all shadow-md shadow-indigo-600/20"
          >
            <Plus className="size-4" />
            <span>Schedule or Start Meeting</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CallList;