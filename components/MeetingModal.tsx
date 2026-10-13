'use client';

import { ReactNode } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from './ui/button';

interface MeetingModalProps {
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

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  handleClick,
  buttonText,
  image,
  buttonIcon,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border border-white/[0.1] bg-[#0E1322]/95 backdrop-blur-2xl p-6 sm:p-8 text-white rounded-2xl shadow-2xl">
        <DialogHeader className="flex flex-col items-center gap-4 text-center">
          {image && (
            <div className="flex size-20 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 shadow-inner">
              <Image
                src={image}
                alt="Confirmation Icon"
                width={48}
                height={48}
                className="animate-in zoom-in-75 duration-300"
              />
            </div>
          )}
          <DialogTitle className={cn("text-2xl font-bold tracking-tight text-white", className)}>
            {title}
          </DialogTitle>
        </DialogHeader>

        {children && <div className="flex flex-col gap-4">{children}</div>}

        <Button
          className="w-full h-11 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-indigo-600/25 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E1322]"
          onClick={handleClick}
        >
          {buttonIcon && (
            <Image
              src={buttonIcon}
              alt="button icon"
              width={16}
              height={16}
              className="mr-2 brightness-0 invert"
            />
          )}
          {buttonText || "Schedule Meeting"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;