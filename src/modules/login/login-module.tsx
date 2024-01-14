'use client'
import { GoogleSignInButton } from '@/components'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function LoginModule() {
  const { data: session, status } = useSession()
  const { replace } = useRouter()

  useEffect(() => {
    if (session && session.user) {
      replace('/dashboard')
    }
  }, [replace, session])

  return (
    <>
      <p className='text-center text-sm text-gray-500'>
        Entre ou cadastre-se em
      </p>
      <h2 className='mb-4 text-xl font-bold'>Mission Store</h2>

      <GoogleSignInButton disabled={status === 'loading'} />
    </>
  )
}
