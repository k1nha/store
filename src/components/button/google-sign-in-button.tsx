'use client'

import { redirect, useRouter } from 'next/navigation'
import { GoogleIcon } from '@/shared/icon'
import { Button } from '../ui/button'
import { signIn, useSession } from 'next-auth/react'
import { useState } from 'react'

export function GoogleSignInButton() {
  const [isLoading, setIsLoading] = useState(false)
  const { data: session } = useSession()

  async function handleClick() {
    setIsLoading((prev) => !prev)
    const result = await signIn('google')

    if (result?.error) {
      console.error(result.error)

      setIsLoading((prev) => !prev)
      return
    }

    console.log(result)
  }

  if (session && session.user) {
    return <div className=''>oi</div>
  }

  return (
    <Button
      className='flex w-72 items-center gap-4 py-5'
      onClick={handleClick}
      disabled={isLoading}
    >
      <GoogleIcon />
      Entrar com Google
    </Button>
  )
}
