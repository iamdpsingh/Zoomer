'use client';

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


const Sidebar=()=>{
    const [isHovered,setIsHovered]=useState(false);
    const path=usePathname();
    return (
      <>
        <div 
          className={cn("fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 z-10","top-[72px]",
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        />

        <section 
          className={cn("fixed left-0 top-0 flex h-screen bg-charcoal-1 text-white max-sm:hidden z-20","transition-all duration-300 ease-in-out",
            isHovered ? "w-[264px]" : "w-[90px]","p-4 pt-28"
          )}
          onMouseEnter={()=>setIsHovered(true)}
          onMouseLeave={()=>setIsHovered(false)}
        >
          <div className='flex flex-col gap-4 w-full'>
            {sidebarLinks.map((link)=>{
              const isActive=path===link.route || (path.startsWith(link.route) && link.route !== '/home');

              return(
                <Link
                  href={link.route}
                  key={link.label}
                  className={cn('flex gap-4 items-center rounded-lg w-full', 'transition-all duration-300 ease-in-out',
                    isHovered ? 'px-5 py-4' : 'p-5', 
                    {
                      'bg-rust-1': isActive,
                      'hover:bg-rust-1/80': !isActive,
                      'hover:bg-opacity-90': !isActive
                    }
                  )}
                >
                  <div className={cn('flex items-center justify-center','min-w-[24px] h-[24px]', 
                    !isHovered && 'w-full'
                  )}>
                    <Image
                      src={link.imgURL}
                      alt={link.label}
                      width={24}
                      height={24}
                      className="shrink-0"
                    />
                  </div>
                  <p 
                    className={cn("text-lg font-semibold whitespace-nowrap flex-1","transition-all duration-300 ease-in-out",
                      isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 overflow-hidden w-0"
                    )}
                  >
                    {link.label}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      </>
    );
  }; 

export default Sidebar