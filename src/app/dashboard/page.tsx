import { CardProduct } from '@/components'

export default function DashboardPage() {
  return (
    <main className='jusitfy-center flex w-full flex-col items-center'>
      <div className='my-8 text-center'>
        <h1 className='mb-4 text-3xl font-semibold'>Nossos produtos</h1>
        <p className='text-xl'>
          Explore nossa ampla gama de produtos de alta qualidade.
        </p>
        <p className='text-xl'>
          Projetados para atender todas as suas necessidades
        </p>
      </div>

      <div className='mx-auto grid grid-cols-2 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-10'>
        <CardProduct imgSrc='https://placehold.co/250x250.png' />
        <CardProduct imgSrc='https://placehold.co/250x250.png' />
        <CardProduct imgSrc='https://placehold.co/250x250.png' />
      </div>
    </main>
  )
}
