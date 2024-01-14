'use client'

import { ProductCard } from '@/components'
import { Pagination } from '@/components/pagination/pagination'
import { ProductsSkeleton } from '@/components/skeleton/skeleton'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import { getProducts } from '@/shared/api'
import { useCartStore } from '@/shared/stores/cart'
import { Product as CardProduct } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import { Suspense, useEffect } from 'react'

type ViewProductProps = {
  searchParams: string | null
  paginate: (pageIndex: number) => string
  page: string | null
}

export function ViewProduct({
  searchParams,
  paginate,
  page,
}: ViewProductProps) {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ['products', searchParams, paginate],
    queryFn: () =>
      getProducts({
        pageIndex: Number(page) || 1,
        searchParams,
      }),
  })
  const { increaseCart } = useCartStore()
  const { toast } = useToast()

  function addProductOnCart(product: CardProduct) {
    increaseCart(product)
    toast({
      title: `Produto adicionado ao carrinho`,
      action: <ToastAction altText='undo notification'>Desfazer</ToastAction>,
    })
  }

  useEffect(() => {
    refetch()
  }, [refetch, searchParams, page])

  return (
    <>
      <div className='mx-auto mb-10 grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-10'>
        {!isLoading ? (
          data?.products.map(({ description, name, price, id }) => (
            <ProductCard
              func={() =>
                addProductOnCart({
                  description,
                  id,
                  name,
                  price,
                })
              }
              key={id}
              name={name}
              description={description}
              price={price}
              imgSrc='https://placehold.co/250x250.png'
            />
          ))
        ) : (
          <ProductsSkeleton />
        )}
      </div>
      {data?.products.length === 0 && (
        <p className='text-sm font-medium text-gray-600'>Não há produtos</p>
      )}
      {data?.products.length != 0 && data && (
        <Pagination
          totalCount={data.total}
          pageIndex={data.page}
          onPageChange={paginate}
          perPage={data.perPage}
        />
      )}
    </>
  )
}
