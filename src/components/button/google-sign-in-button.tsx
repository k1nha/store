'use client'

import { GoogleIcon, LoadingSpinner } from '@/shared/icon'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { Button } from '../ui/button'

interface GoogleButtonProps {
  disabled?: boolean
}

export function GoogleSignInButton(props: GoogleButtonProps) {
  async function handleClick() {
    await signIn('google')
  }

  return (
    <Button
      className='flex w-72 items-center gap-4 py-5'
      onClick={handleClick}
      disabled={props.disabled}
      {...props}
    >
      {props.disabled ? (
        <LoadingSpinner />
      ) : (
        <>
          <GoogleIcon />
          Entrar com Google
        </>
      )}
    </Button>
  )
}
