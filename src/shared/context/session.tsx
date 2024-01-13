'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { LoadingSpinner } from '../icon'

export default function LoggedProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { status } = useSession()
  const { replace } = useRouter()
  if (status === 'loading') {
    return (
      <div className='flex h-screen items-center justify-center'>
        <LoadingSpinner />
      </div>
    )
  }

  if (status === 'unauthenticated') {
    replace('/')
    return
  }

  return <>{children}</>
}
