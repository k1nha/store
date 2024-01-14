'use client'

import { ArrowRightToLine, ShoppingBagIcon } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { IconButton } from '../button'
import { CartDrawer } from '../drawer/cart-drawer'
import { SearchInput } from '../input/search-input'
import { Avatar, AvatarImage } from '../ui/avatar'

export function Header() {
  const { data: session } = useSession()

  async function handleSignOut() {
    await signOut()
  }

  return (
    <header className='bg-gray-950 text-white'>
      <div className='mx-auto flex h-20 max-w-5xl items-center justify-between gap-4 px-6 lg:px-0'>
        <Link href={'/dashboard'} className='flex gap-2 '>
          <ShoppingBagIcon />
          <p className='hidden text-nowrap font-medium sm:block'>
            Mission Store
          </p>
        </Link>

        <SearchInput />

        <div className='flex items-center gap-3'>
          <div className='flex items-center rounded-full bg-gray-800 p-2 transition-all duration-300 hover:bg-gray-700'>
            <CartDrawer />
          </div>
          <Avatar className='hidden sm:block'>
            <AvatarImage src={session?.user?.image || ''} alt='avatar-image' />
          </Avatar>
          <IconButton
            className='rounded-md bg-white transition-all duration-300 hover:bg-slate-200'
            onClick={handleSignOut}
          >
            <ArrowRightToLine color='black' />
          </IconButton>
        </div>
      </div>
    </header>
  )
}
