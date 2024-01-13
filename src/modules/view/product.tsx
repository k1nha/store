'use client'

import { ProductCard } from '@/components'
import { ProductsSkeleton } from '@/components/skeleton/skeleton'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import { HTTP } from '@/lib/axios'
import { useCartStore } from '@/shared/stores/cart'
import { useQuery } from '@tanstack/react-query'

type CardProduct = {
  id: string
  name: string
  price: number
  description: string
  badges: string[]
}

export function ViewProduct() {
  const { data, isLoading } = useQuery<CardProduct[]>({
    queryKey: ['products'],
    queryFn: () => HTTP.get('/product').then((res) => res.data),
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

  return (
    <>
      <div className='mx-auto grid grid-cols-2 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-10'>
        {!isLoading ? (
          data?.map(({ badges, description, name, price, id }) => (
            <ProductCard
              func={() =>
                addProductOnCart({
                  badges,
                  description,
                  id,
                  name,
                  price,
                })
              }
              badges={badges}
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
    </>
  )
}
