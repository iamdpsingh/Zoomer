'use client'

import { ReactNode } from 'react';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from './ui/button';



interface MeetingModalProps{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode; 
  handleClick?: () => void;
  buttonText?: string;
  image?: string;
  buttonIcon?: string;

}

const MeetingModel = ({isOpen, onClose, title, className, children, handleClick, buttonText, image, buttonIcon}:MeetingModalProps ) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* <DialogTrigger></DialogTrigger> */}
      <DialogContent className='flex w-full max-w-[520px] flex-col gap-6 border-none bg-charcoal-1 px-6 py-9 text-white'>
        {/* <div className='flex flex-col gap-6'>
          {image && (
            <div className='flex justify-center'>
              <Image
              src={image}
              alt='image'
              width={72}
              height={72}
              />
              <h1 className={cn("text-3xl font-bold leading-[42px]", className)}>
            {title}
          </h1>
            </div>
          )}

        </div> */}
        <DialogHeader className='flex flex-col gap-6'>
      <DialogTitle className={cn("text-3xl font-bold leading-[42px]", className)}>{title}</DialogTitle>
      {children}
      <Button
      className={
        "bg-rust-1 focus-visible:ring-0 focus-visible:ring-offset-0 hover:bg-blue-900"
      }
      onClick={handleClick}>
        {buttonIcon && (
              <Image
                src={buttonIcon}
                alt="button icon"
                width={13}
                height={13}
              />
            )}{" "}
            &nbsp;
            {buttonText || "Schedule Meeting"}

      </Button>
    </DialogHeader>

      </DialogContent>
</Dialog>

  )
}

export default MeetingModel