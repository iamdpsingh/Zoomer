'use client';
import { useEffect, useState } from 'react';
import MeetingTypeList from '@/components/MeetingTypeList';
import { useUser } from '@clerk/nextjs';

const Home = () => {
  const [time, setTime] = useState('');
  const now = new Date();
  const date = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(now);

  const { user } = useUser();

  useEffect(() => {
    const interval = setInterval(() => {
      const current = new Date();
      setTime(current.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[400px] rounded py-2 text-center text-lg font-bold mt-4">
            Welcome {`${user?.firstName} to Zoomer!`}
          </h2>

          <div className='flex flex-col gap-3 pl-7'>
            <h1 className='text-3xl font-extrabold lg:text-7xl'>
              {time}
            </h1>
            <p className='text-lg font-medium text-sky-1 lg:text-2xl'>
              {date}
            </p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
