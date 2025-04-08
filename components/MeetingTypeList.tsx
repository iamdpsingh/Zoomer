'use client'

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

  const { toast } = useToast()


  const router = useRouter();
  const [meetingState, setMeetingState] = 
  useState<
    'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>();

    const { user } = useUser();
    const client = useStreamVideoClient();
    

    const [values, setValues] = useState(initialValues);

    const [callDetail, setCallDetail] = useState<Call>();
 
  const createMeeting = async () =>{
      if(!client || !user) return;


      try {

        if(!values.dateTime){
          toast({
            title: "Please select a date and time for the meeting", 
          })

          return;
        }
        const id = crypto.randomUUID();
        const call = client.call('default', id);

        if (!call) throw new Error('Failed to create meeting');
      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
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
        title: 'Meeting Created',
      });

      } catch (error) {
        console.log(error);
        toast({
          title: "Failed to create meeting please try again", 
        })
      }
  }


  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetail?.id}`;
  
  
    return (
    <section
    className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'
    >
        {/* <div
        className='bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px]'>
            Box 1
        </div> */}

      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        containerClassName="bg-blue-900"
        handleClick={() => setMeetingState('isInstantMeeting')}
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via invitation link"
        containerClassName="bg-blue-900"
        handleClick={() => setMeetingState('isJoiningMeeting')}
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        containerClassName="bg-blue-900"
        handleClick={() => setMeetingState('isScheduleMeeting')}
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Meeting Recordings"
        containerClassName="bg-blue-900"
        handleClick={() => router.push('/home/recordings')}
      />

      {!callDetail ?(
        <MeetingModal
        isOpen={meetingState === 'isScheduleMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Create Meeting"
        handleClick={createMeeting}
      >

        <div
        className='flex flex-col gap-2.5'
        >
          <label className='text-base text-normal leading-[22px] text-sky-2'>
            Add a discription
          </label>
          <Textarea className='border-none bg-[#4A4A4A] focus-visible:ring-0 focus-visible:ring-offset-0'
          onChange={(e)=>{
            setValues({...values, description:e.target.value})
          }}
          />
        </div>

        <div className="flex w-full flex-col gap-2.5">
            <label className="text-base font-normal leading-[22.4px] text-sky-2">
              Select Date and Time
            </label>
            <ReactDatePicker
              selected={values.dateTime}
              onChange={(date) => setValues({ ...values, dateTime: date! })}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="w-full rounded bg-[#4A4A4A] p-2 focus:outline-none"
            />
          </div>

      </MeetingModal>
      ):(
        <MeetingModal
          isOpen={meetingState === 'isScheduleMeeting'}
          onClose={() => setMeetingState(undefined)}
          title="Meeting Created"
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({ title: 'Link Copied' });
          }}
          image={'/icons/checked.svg'}
          buttonIcon="/icons/copy.svg"
          className="text-center"
          buttonText="Copy Meeting Link"
        />
      )}
      
      <MeetingModal
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />


<MeetingModal
        isOpen={meetingState === 'isJoiningMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Type the link here"
        className="text-center"
        buttonText="Join Meeting"
        handleClick={() => router.push(values.link)}
      >
        <Input
          placeholder="Meeting link"
          onChange={(e) => setValues({ ...values, link: e.target.value })}
          className="border-none bg-[#4A4A4A] focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </MeetingModal>
    </section>
  )
}

export default MeetingTypeList