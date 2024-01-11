'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LoggedProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { status } = useSession()
  const { replace } = useRouter()
  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (status === 'unauthenticated') {
    replace('/')
    return
  }

  return <>{children}</>
}
