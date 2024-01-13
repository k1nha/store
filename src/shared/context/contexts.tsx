'use client'

import { Toaster } from '@/components/ui/toaster'
import { queryClient } from '@/lib/query'
import { QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'

export function Context({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster  />
      <QueryClientProvider client={queryClient}>
        <SessionProvider>{children}</SessionProvider>
      </QueryClientProvider>
    </>
  )
}
