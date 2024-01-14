import { HTTP } from '@/lib/axios'
import { Product as CardProduct } from '@/shared/types'

interface GetProductsQuery {
  pageIndex?: number | null
  searchParams?: string | null
}

interface GetProductsResponse {
  page: number
  products: CardProduct[]
  perPage: number
  total: number
}

export async function getProducts({
  pageIndex,
  searchParams,
}: GetProductsQuery) {
  const res = await HTTP.get<GetProductsResponse>(`product/${searchParams}`, {
    params: {
      pageIndex,
    },
  })

  return res.data
}
