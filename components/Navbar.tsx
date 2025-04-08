import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between fixed z-50 w-full bg-charcoal-1 px-6 py-4 lg:px-10">
      <Link href='/home' className='flex items-center gap-4'>
        <Image 
        src="/icons/logo-2.svg"
        width={32}
        height={32}
        alt='Zoomer Logo'
        className='max-sm:size-10'
        />
        <p className='"text-[26px] font-extrabold text-white max-sm:hidden'>ZOOMER</p>
       </Link>

       <div className="flex items-center gap-6">
       {/* <SignedIn>
              <UserButton />
        </SignedIn> */}

          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>


    <MobileNav/>
       </div>
    </nav>
  )
}

export default Navbar