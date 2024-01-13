'use client'
import { ArrowRightToLine, ShoppingBagIcon } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { IconButton } from '../button'
import { CartDrawer } from '../drawer/cart-drawer'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Input } from '../ui/input'

export function Header() {
  const { data: session } = useSession()

  async function handleSignOut() {
    await signOut()
  }

  return (
    <header className='bg-gray-950 text-white'>
      <div className='mx-auto flex h-20 max-w-5xl items-center justify-between gap-10 px-4 lg:gap-4 lg:px-0'>
        <div className='flex gap-2'>
          <ShoppingBagIcon />
          <Link href={'/dashboard'} className='text-nowrap font-medium'>
            Mission Store
          </Link>
        </div>

        <Input
          type='text'
          className='max-w-2xl bg-white text-black'
          placeholder='Pesquise seu produto'
        />

        <div className='flex items-center gap-3'>
          <div className='flex items-center rounded-full bg-gray-800 p-2 transition-all duration-300 hover:bg-gray-700'>
            <CartDrawer />
          </div>
          <Avatar>
            <AvatarImage src={session?.user?.image || ''} alt='avatar-image' />
            <AvatarFallback>{}</AvatarFallback>
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
