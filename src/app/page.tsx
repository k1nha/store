import { GoogleSignInButton, GoogleSignUpButton } from '@/components'
import { Separator } from '@/components/ui/separator'
import { LoginModule } from '@/modules/login/login-module'
import { ShoppingBagIcon } from 'lucide-react'

export default function Home() {
  return (
    <>
      <main className='flex min-h-screen w-full'>
        <section className='flex w-full flex-col items-center justify-center bg-white text-black lg:w-1/2'>
          <div className='absolute left-7 top-10 flex items-center gap-2 lg:hidden'>
            <ShoppingBagIcon />
            <h1 className='font-semibold'>Mission Store</h1>
          </div>

          <LoginModule />
        </section>

        <section className='hidden w-1/2 justify-between bg-[url("https://images.unsplash.com/photo-1543996469-600fbadfc1e8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center lg:flex'></section>
      </main>
    </>
  )
}
