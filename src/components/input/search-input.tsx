'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { Input } from '../ui/input'

export function SearchInput() {
  const router = useRouter()
  const [text, setText] = useState('')
  const [query] = useDebounce(text, 1000)
  const url = window.location.pathname.split('/')[2]

  useEffect(() => {
    if (!query && !url) {
      return router.push('/dashboard')
    }

    if (query && url != 'page') {
      return router.push(`/dashboard?search=${query}`)
    }
  }, [query, router, url])

  return (
    <>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type='text'
        className='max-w-2xl bg-white text-black'
        placeholder='Pesquise seu produto'
      />
    </>
  )
}
