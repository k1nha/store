'use client'

import { GoogleIcon } from '@/shared/icon'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { Button } from '../ui/button'

interface GoogleButtonProps {
  disabled?: boolean
}

export function GoogleSignInButton(props: GoogleButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

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

  return (
    <Button
      className='flex w-72 items-center gap-4 py-5'
      onClick={handleClick}
      disabled={isLoading}
      {...props}
    >
      <GoogleIcon />
      Entrar com Google
    </Button>
  )
}
