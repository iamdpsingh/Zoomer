'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet"
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
  

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <section className='w-full max-w-[264px]'>
<Sheet>
  <SheetTrigger asChild>
    <Image
    src="/icons/hamburger.svg"
    width={36}
    height={36}
    alt='hamburger'
    className='cursor-pointer sm:hidden '
    />
  </SheetTrigger>
  <SheetContent side="left" className='border-none bg-charcoal-1'>
  <Link href='/home' className='flex items-center gap-1'>
        <Image 
        src="/icons/logo-2.svg"
        width={32}
        height={32}
        alt='Zoomer Logo'
        className='max-sm:size-10'
        />
        <p className='"text-[26px] font-extrabold text-white max-sm:hidden'>ZOOMER</p>
       </Link>

       <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'> 
        <SheetClose asChild>
            <section className='flex h-full flex-col gap-6 pt-16 text-white'>
            {sidebarLinks.map((items) => {
          const isActive = pathname === items.route;
          
          return (
            <SheetClose asChild key={items.route}>


            <Link
              href={items.route}
              key={items.label}
              className={cn(
                'flex gap-4 itemss-center p-4 rounded-lg w-full max-w-60',
                {
                  'bg-rust-1': isActive,
                  'hover:bg-rust-1/80': !isActive,
                  'text-black': isActive,
                  'hover:text-black': !isActive,
                  'hover:bg-opacity-90': !isActive
                }
              )}
            >
              <Image
                src={items.imgURL}
                alt={items.label}
                width={20}
                height={20}
              />
              <p className="font-semibold">
                {items.label}
              </p>
            </Link>
            </SheetClose>
          );
        })}
            </section>
        </SheetClose>
     
       </div>
  </SheetContent>
</Sheet>

    </section>
  )
}

export default MobileNav