'use client'
import { GoogleSignInButton } from '@/components'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export function LoginModule() {
  const { data: session, status } = useSession()
  const { replace } = useRouter()

  if (session && session.user) {
    replace('/dashboard')
  }

  return (
    <>
      <p className='text-center text-sm text-gray-500'>
        Entre ou cadastre-se em
      </p>
      <h2 className='mb-4 text-xl font-bold'>Mission Store</h2>

      <GoogleSignInButton disabled={status === 'loading'} />

      {/* <div className='my-4 flex min-w-72 items-center gap-3'>
        <Separator className='h-[2px] shrink' orientation='horizontal' />
        <p>ou</p>
        <Separator className='h-[2px] shrink' orientation='horizontal' />
      </div> */}

      {/* <p className='mb-4 text-center text-sm text-gray-500'>
        Faça o cadastro abaixo
      </p>
      <GoogleSignUpButton /> */}
    </>
  )
}
