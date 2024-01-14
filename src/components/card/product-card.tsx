import { cn } from '@/lib/utils'
import Image from 'next/image'
import { ToolTip } from '../tooltip'
import { Button } from '../ui/button'
import { Card } from '../ui/card'

type CardProductProps = {
  name: string
  price: number
  imgSrc?: string
  alt?: string
  className?: string
  description: string
  func: () => void
}

export function ProductCard({
  alt,
  className,
  imgSrc,
  description,
  name,
  price,
  func,
}: CardProductProps) {
  return (
    <Card className={cn('p-4', className)}>
      <Image
        src={imgSrc || ''}
        alt={'product ' + alt}
        width={250}
        priority
        height={250}
        className='aspect-[1/1] w-full rounded-lg object-cover transition-opacity group-hover:opacity-75'
      />

      <div className='mt-4 flex justify-between'>
        <h2 className=' text-lg font-bold'>{name}</h2>
        <ToolTip description={description} trigger='Leia mais' />
      </div>

      <div className='pb-2 text-start'>
        <p className='text-lg font-semibold text-green-400'>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(price / 100)}
        </p>
        <span className='text-sm text-gray-500'>À vista no PIX</span>
      </div>

      <Button className='flex' onClick={func}>
        Adicione ao carrinho
      </Button>
    </Card>
  )
}
