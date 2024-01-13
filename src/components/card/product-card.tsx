import Image from 'next/image'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { Badge } from '../ui/badge'

type CardProductProps = {
  name: string
  price: number
  imgSrc?: string
  alt?: string
  className?: string
  description?: string
  badges: string[]
  func: () => void
}

export function ProductCard({
  alt,
  className,
  imgSrc,
  badges,
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
        height={250}
        className='aspect-[1/1] w-full rounded-lg object-cover transition-opacity group-hover:opacity-75'
      />

      <h2 className='mt-4 text-lg font-bold'>{name}</h2>

      <div className='pb-2 text-start'>
        <p className='text-lg font-semibold text-green-400'>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(price / 100)}
        </p>
        <span className='text-sm text-gray-500'>À vista no PIX</span>
      </div>

      <div className='mb-2'>
        {badges?.map((badge, k) => <Badge key={k}>{badge}</Badge>)}
      </div>

      <Button className='flex' onClick={func}>
        Adicione ao carrinho
      </Button>
    </Card>
  )
}
