import { X } from 'lucide-react'
import { IconButton } from '../button'
import { motion as m } from 'framer-motion'

type DrawerProps = {
  open: boolean
  setOpen: () => void
}

export function Drawer({ open, setOpen }: DrawerProps) {
  if (!open) return null

  return (
    <m.nav
      initial={{ x: 300 }}
      animate={{
        x: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      exit={{
        x: 50,
      }}
      className='fixed bottom-0 left-auto right-0 top-0 z-[99999] w-80 overflow-scroll bg-slate-100 text-black'
    >
      <div className='flex items-center justify-between bg-white p-4'>
        <p>Resumo do carrinho</p>

        <IconButton onClick={setOpen}>
          <X />
        </IconButton>
      </div>
    </m.nav>
  )
}
