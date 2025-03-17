"use client"

import { useCall, useCallStateHooks } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

const EndCallButton = () => {
    const call = useCall();
    const router = useRouter();

    const {useLocalParticipant} = useCallStateHooks();
    const LocalParticipant = useLocalParticipant();


    const isMeetingOwner = LocalParticipant && call?.state.createdBy && LocalParticipant.userId === call.state.createdBy.id;

    if(!isMeetingOwner){
        return null;
    }

  return (
    <Button onClick={async () => {
        await call.endCall();
        router.push('/')
    }}
    className='rounded-md bg-red-500 px-4 py-2.5'
    >
        End Call For EveryOne
    </Button>
  )
}

export default EndCallButton