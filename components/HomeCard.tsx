import { WobbleCard } from "@/components/ui/wobble-card";
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface HomeCardProps {
  containerClassName?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({
  containerClassName,
  img,
  title,
  description,
  handleClick
}: HomeCardProps) => {
  return (
    <div onClick={handleClick}>
      <WobbleCard
        containerClassName={cn(
          `w-full max-w-[300px] min-h-[360px] h-[360px]
          flex flex-col justify-between
          p-6 rounded-2xl shadow-lg
          transition-transform duration-300 transform hover:scale-105
          bg-white dark:bg-[#1e1e1e]
          border border-gray-200 dark:border-gray-700`,
          containerClassName
        )}
      >
        <div className="flex flex-col h-full justify-between">
          <div>
            <Image
              src={img}
              width={36}
              height={36}
              alt={title}
              className="mb-4"
            />
            <h2 className="text-xl font-bold text-gray-950 dark:text-white leading-tight tracking-tight">
              {title}
            </h2>
          </div>
          <p className="mt-4 text-[15px] text-gray-950 dark:text-gray-300 leading-[1.6]">
            {description}
          </p>
        </div>
      </WobbleCard>
    </div>
  );
};

export default HomeCard;
