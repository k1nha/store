'use client'
import { ArrowRightToLine, ShoppingBagIcon, ShoppingCart } from 'lucide-react'
import { IconButton } from '../button'
import { Input } from '../ui/input'
import { useSession } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Drawer } from '../drawer/drawer'
import { useCart } from '@/shared/hooks/useCart'

export function Header() {
  const { data: session } = useSession()
  const { cartIsOpen, handleClickCart } = useCart()

  return (
    <header className='bg-gray-950 text-white'>
      <div className='mx-auto flex h-20 max-w-5xl items-center justify-between gap-10 px-4 lg:gap-4 lg:px-0'>
        <div className='flex gap-2'>
          <ShoppingBagIcon />
          <p className='text-nowrap font-medium'>Mission Store</p>
        </div>

        <Input
          type='text'
          className='max-w-2xl bg-white text-black'
          placeholder='Pesquise seu produto'
        />

        <div className='flex items-center gap-3'>
          <IconButton
            className='bg-gray-800 transition-all duration-300 hover:bg-gray-700'
            onClick={handleClickCart}
          >
            <ShoppingCart />
          </IconButton>
          <Avatar>
            <AvatarImage src={session?.user?.image || ''} alt='avatar-image' />
            <AvatarFallback>{}</AvatarFallback>
          </Avatar>
          <IconButton className='rounded-md bg-white transition-all duration-300 hover:bg-slate-200'>
            <ArrowRightToLine color='black' />
          </IconButton>
        </div>
      </div>

      <Drawer open={cartIsOpen} setOpen={handleClickCart} />
    </header>
  )
}
