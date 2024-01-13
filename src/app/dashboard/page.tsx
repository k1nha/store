import { ViewProduct } from '@/modules/view/product'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <main className='jusitfy-center flex w-full flex-col items-center'>
      <Link href={'dashboard/cadastro'}>Ir para cadastro</Link>
      <div className='my-8 text-center'>
        <h1 className='mb-4 text-3xl font-semibold'>Nossos produtos</h1>
        <p className='text-xl'>
          Explore nossa ampla gama de produtos de alta qualidade.
        </p>
        <p className='text-xl'>
          Projetados para atender todas as suas necessidades
        </p>
      </div>

      <ViewProduct />
    </main>
  )
}
