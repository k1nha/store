import { HTTP } from '@/lib/axios'

export async function FetchProducts() {
  const res = await HTTP.get('/product')

  return res.data
}
