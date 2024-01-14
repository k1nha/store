'use client'
import { ViewProduct } from '@/modules/view/product'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export default function DashboardPage() {
  const searchParams = useSearchParams()
  const productParam = searchParams.get('search')
  const page = searchParams.get('page')

  const router = useRouter()

  const handlePaginate = useCallback(
    (pageIndex: number) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set('page', String(pageIndex))

      router.push('/dashboard?' + params.toString())
      return params.toString()
    },
    [searchParams, router],
  )

  return (
    <main className='jusitfy-center flex w-full flex-col items-center'>
      <div className='mb-1 mt-8 px-4 text-center'>
        <h1 className='text-3xl font-semibold'>Nossos produtos</h1>
        <p className='text-xl'>
          Explore nossa ampla gama de produtos de alta qualidade.
        </p>
        <p className='text-xl'>
          Projetados para atender todas as suas necessidades
        </p>
      </div>

      <Link
        href={'dashboard/cadastro'}
        className='mb-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90'
      >
        Ir para cadastro
      </Link>

      <ViewProduct
        searchParams={productParam}
        paginate={handlePaginate}
        page={page}
      />
    </main>
  )
}
